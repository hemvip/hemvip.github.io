import React, { useEffect } from "react"
import { useCurrentPage } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING, DEFAULT_OPTION, OPTION_SELECT, JUICE_MOTION, JUICE_SPEECH } from "@/config/constants"
import { useScreenControl } from "@/contexts/screencontroll"
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons"
import { useSelected } from "@/contexts/selected"

export function ScreenHeader({ currentPage, setPrev, setNext, showPopup, study }) {
	const page = useCurrentPage(currentPage)
	const { screenActions, addAction } = useActionRecorder()
	const { isStartPage, isEndPage } = useScreenControl()
	const { options, juiceOptions, juiceOtherReason, validateAttentionCheck } = useSelected()

	const isEqualSelected = !options[page.id] || options[page.id] === DEFAULT_OPTION.equal
	const selectedJuiceOptions = juiceOptions[page.id] || []
	const currentJuiceOtherReason = juiceOtherReason[page.id] || ""

	useEffect(() => {
		history.pushState({}, "", `?page=${currentPage + 1}`)
	}, [currentPage])

	const prevPage = () => {
		setPrev()
		addAction(DEFAULT_ACTION_STRING.clickPrev, currentPage)
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
		// <h3 className="ui-bar ui-bar-a ui-corner-all" id="page_header" style={{ borderRadius: "all" }}>
		//     MUSHRA - Random 2
		// </h3>
		<div className="w-full flex flex-row justify-between py-1 px-4 bg-gradient-to-b from-slate-200 to-gray-200 shadow border-gray-300  border rounded-lg border-zinc-300">
			{isStartPage ? (
				<div></div>
			) : (
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

			<h3 className="py-3 px-5 leading-5 flex-grow items-center flex justify-center h-full text-shadow-sm text-center text-neutral-800 font-bold">
				{page.name}
			</h3>

			{isEndPage || isStartPage ? (
				<div></div>
			) : isStartPage ? (
				// <button
				// 	data-role="button"
				// 	data-inline="true"
				// 	className="cursor-pointer select-none py-0 sm:py-2 m-1 px-0 sm:px-5 text-center text-zinc-800 font-bold leading-5 flex items-center gap-2 disabled:text-gray-400"
				// 	// onClick={startPage}
				// >
				// 	Start
				// 	<ArrowRightIcon className="h-4 sm:h-5 inline shrink-0 rtl:rotate-180" />
				// </button>
				<div></div>
			) : (
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
	)
}
