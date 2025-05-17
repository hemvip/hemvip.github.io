import React, { useEffect, useState } from "react"
import { useCurrentPage } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING, DEFAULT_OPTION, OPTION_SELECT, JUICE_MOTION, JUICE_SPEECH, N_MAX_SKIPPED_PAGES } from "@/config/constants"
import { useScreenControl } from "@/contexts/screencontroll"
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons"
import { useSelected } from "@/contexts/selected"
import { useRouter } from "next/navigation"
import { apiPost } from "@/utils/fetcher"

export function ScreenHeader({ currentPage, setPrev, setNext, showPopup, study }) {
	const page = useCurrentPage(currentPage)
	const { screenActions, addAction } = useActionRecorder()
    const { isStartPage, isEndPage } = useScreenControl()
    const { options, juiceOptions, juiceOtherReason, validateAttentionCheck, getFailedAttentionChecks } = useSelected()
    const [skipButtonEnabled, setSkipButtonEnabled] = useState(false)
    const [skipTimer, setSkipTimer] = useState(5)
    const router = useRouter()

	const isEqualSelected = !options[page.id] || options[page.id] === DEFAULT_OPTION.equal
	const selectedJuiceOptions = juiceOptions[page.id] || []
	const currentJuiceOtherReason = juiceOtherReason[page.id] || ""

	useEffect(() => {
		history.pushState({}, "", `?page=${currentPage + 1}`)
	}, [currentPage])

	// Skip page button timer
	useEffect(() => {
		if (!isStartPage && !isEndPage) {
			setSkipButtonEnabled(false)
			setSkipTimer(5)
			
			const timer = setInterval(() => {
				setSkipTimer(prev => {
					if (prev <= 1) {
						setSkipButtonEnabled(true)
						clearInterval(timer)
						return 0
					}
					return prev - 1
				})
			}, 1000)
			
			return () => clearInterval(timer)
		}
	}, [currentPage, isStartPage, isEndPage])

	const prevPage = () => {
		setPrev()
		addAction(DEFAULT_ACTION_STRING.clickPrev, currentPage)
	}

	const skipPage = () => {
		addAction(DEFAULT_ACTION_STRING.clickSkip, currentPage)

		if (!study.skippedPages) {
			study.skippedPages = []
		}

		if (!study.skippedPages.includes(page.id)) {
			study.skippedPages = [...study.skippedPages, page.id]
		}

		// Terminate study if page skip exceeds limit
		if (study.skippedPages.length > N_MAX_SKIPPED_PAGES) {
			const resp = apiPost("/api/failed-study", {
				prolific_userid: study.prolific_userid,
				prolific_studyid: study.prolific_studyid,
				prolific_sessionid: study.prolific_sessionid,
				failedAttentionCheck: JSON.stringify(getFailedAttentionChecks()),
				studyid: study.id,
				skippedPages: study.skippedPages
			})
			router.push("/failed")
		} else {
			setNext()
		}
	}

	const nextPage = () => {
		// console.log(currentPage, "object", Object.keys(screenActions).length)
		if (currentPage > Object.keys(screenActions).length) {
			showPopup("Please watch the video first")
			console.log("Please watch the video first")
			return
		}

		const currentScreenActions = screenActions[page.id] || []
		// console.log("currentAction", currentScreenActions)

		const isFinishLeftVideo = currentScreenActions.includes(DEFAULT_ACTION_STRING.finishVideoLeft)
		// console.log("isFinishLeftVideo", isFinishLeftVideo)
		if (!isFinishLeftVideo) {
			showPopup("Please watch the left video to the end.")
			return
		}

		const isFinishRightVideo = currentScreenActions.includes(DEFAULT_ACTION_STRING.finishVideoRight)
		if (!isFinishRightVideo) {
			showPopup("Please watch the right video to the end.")
			return
		}

		// Check if a JUICE option has been selected
		if (study.type === "pairwise-humanlikeness" || study.type === "mismatch-speech") {
			// Check JUICE selection only if videos are not labeled as equal
			if (!isEqualSelected) {
				// Check if any JUICE options are selected
				if (selectedJuiceOptions.length === 0) {
					showPopup("Please tick one or more checkboxes.")
					return
				}

				// Check if "Other" is selected and a reason is provided
				if (selectedJuiceOptions.includes(JUICE_MOTION.other) || selectedJuiceOptions.includes(JUICE_SPEECH.other)) {
					if (!currentJuiceOtherReason.trim()) {
						showPopup("Please specify a reason for selecting 'Other'.")
						return
					}
				}
			}
		}

		let isSelected = false
		for (let i = 0; i < OPTION_SELECT.length; i++) {
			const option = OPTION_SELECT[i]
			if (currentScreenActions.includes(option)) {
				isSelected = true
				break
			}
		}

		if (isSelected) {
			setNext()
			validateAttentionCheck(currentPage)
			addAction(DEFAULT_ACTION_STRING.clickNext, currentPage)
		} else {
			showPopup("Please select your option.")
		}
	}

	return (
		<div className="w-full flex flex-row py-1 px-4 bg-gradient-to-b from-slate-200 to-gray-200 shadow border-gray-300 border rounded-lg border-zinc-300">
			{/* Left section - contains Previous button */}
			<div className="flex-1 flex items-center justify-start">
				{!isStartPage && (
					<button
						data-role="button"
						data-inline="true"
						onClick={prevPage}
						className="cursor-pointer select-none py-0 sm:py-2 m-1 px-0 sm:px-5 text-center text-zinc-800 font-bold leading-1 sm:leading-5 flex items-center gap-2 disabled:text-gray-400"
					>
						<ArrowLeftIcon className="h-4 sm:h-5 inline shrink-0 ltr:rotate-180" />
						Previous
					</button>
				)}
			</div>

			{/* Middle section - contains page title, always centered */}
			<div className="flex-1 flex justify-center items-center">
				<h3 className="py-3 px-5 leading-5 text-shadow-sm text-center text-neutral-800 font-bold">
					{page.name}
				</h3>
			</div>

			{/* Right section - contains Skip and Next buttons */}
			<div className="flex-1 flex items-center justify-end">
				{!isStartPage && !isEndPage && (
					<button
						data-role="button"
						data-inline="true"
						onClick={skipPage}
						disabled={!skipButtonEnabled}
						className={`cursor-pointer select-none py-0 sm:py-2 m-1 px-0 sm:px-5 mr-24 text-center font-bold leading-5 flex items-center gap-2 rounded-md border ${
							skipButtonEnabled 
								? "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-200" 
								: "bg-gray-50 text-gray-400 border-gray-300 cursor-not-allowed"
						}`}
					>
						{skipButtonEnabled ? "Skip Page due to Issue" : `Skip Page due to Issue (${skipTimer}s)`}
					</button>
				)}

				{!isEndPage && !isStartPage && (
					<button
						data-role="button"
						data-inline="true"
						className="cursor-pointer select-none py-0 sm:py-2 m-1 px-0 sm:px-5 text-center text-zinc-800 font-bold leading-5 flex items-center gap-2 disabled:text-gray-400"
						onClick={nextPage}
					>
						Next
						<ArrowRightIcon className="h-4 sm:h-5 inline shrink-0 rtl:rotate-180" />
					</button>
				)}
			</div>
		</div>
	)
}
