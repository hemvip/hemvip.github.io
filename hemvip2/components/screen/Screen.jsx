"use client"

import React, { useEffect, useState } from "react"
import { ScreenHeader } from "./ScreenHeader"
import { ScreenMain } from "./ScreenMain"
import { AnimatePresence, motion } from "framer-motion"
import { NavScreen, PopupDialog, PopupError, Progressbar } from "."
import { useStudy } from "@/contexts/experiment"
import { useScreenControl } from "@/contexts/screencontroll"
import FinishScreen from "./FinishScreen"
import useDebouncedCallback from "@/utils/hooks/use-bounded-callback"
import { useSelected } from "@/contexts/selected"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useRouter } from "next/navigation"
import { usePopupMessage } from "@/contexts/popupmessage"
import { apiPost } from "@/utils/fetcher"
import StartupScreen from "./StartupScreen"

export function Screen() {
	const router = useRouter()
	const study = useStudy()
	const { currentPage, progress, isStartPage, isEndPage, setPrev, setNext, direction } = useScreenControl()
	const { options } = useSelected()
	const { globalActions, screenActions } = useActionRecorder()

	const [overlay, setOverlay] = useState(false)
	const debouncedPrevPage = useDebouncedCallback(setPrev, 500, {
		leading: true,
	})
	const debouncedNextPage = useDebouncedCallback(setNext, 500, {
		leading: true,
	})

	const { isOpen, message, showPopup, closePopup } = usePopupMessage()

	const handleFinish = async () => {
		setOverlay(true)
		console.log("actions", globalActions)
		console.log("screenActions", screenActions)
		const body = {
			prolific_userid: study.prolific_userid,
			prolific_studyid: study.prolific_studyid,
			prolific_sessionid: study.prolific_sessionid,
			studyid: study.id,
			global_actions: globalActions,
			screenActions: screenActions,
			studySelections: options,
		}
		console.log("", JSON.stringify(body))

		const resp = await apiPost("/api/finish-study", body)
		console.log("resp", resp)

		setOverlay(false)
		if (resp.success) {
			router.push(`https://app.prolific.com/submissions/complete?cc=${study.completion_code}`)
		} else {
			console.error("errors", resp)
			// router.push(`https://app.prolific.com/submissions/complete?cc=${study.fail_code}`)
		}
	}

	useEffect(() => {
		const handleKeyDown = (event) => {
			// console.log("event.key", event.key)
			if (event.key === "ArrowLeft") {
				if (!isStartPage) {
					// setTimeout(() => {
					//   setPrev()
					// }, 500)
					debouncedPrevPage()
				}
			} else if (event.key === "ArrowRight") {
				if (!isEndPage) {
					debouncedNextPage()
				}
			}
		}
		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [setPrev, setNext, debouncedNextPage, debouncedPrevPage, isStartPage, isEndPage])

	if (!study) {
		return <></>
	}

	// console.log("screenActions", screenActions)

	return (
		<>
			<div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
				<Progressbar progress={progress} />
				<div className="flex flex-col w-full h-full gap-2">
					<ScreenHeader currentPage={currentPage} setPrev={setPrev} setNext={setNext} showPopup={showPopup} />

					<div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
						<div className="relative h-full w-full  flex justify-center align-middle">
							<AnimatePresence initial={false} custom={direction}>
								<motion.div
									key={currentPage}
									initial="enter"
									animate="center"
									exit="exit"
									custom={direction}
									variants={{
										enter: (direction) => {
											return {
												x: direction > 0 ? "100%" : "-100%",
												opacity: 0,
											}
										},
										center: {
											x: 0,
											opacity: 1,
										},
										exit: (direction) => {
											return {
												x: direction > 0 ? "-100%" : "100%",
												opacity: 0,
											}
										},
									}}
									transition={{
										ease: "linear",
										x: { type: "linear", stiffness: 300, damping: 30 },
										opacity: { duration: 0.2 },
									}}
									className="absolute w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle"
								>
									{isStartPage ? (
										<StartupScreen />
									) : isEndPage ? (
										<FinishScreen handleFinish={handleFinish} />
									) : (
										<ScreenMain currentPage={currentPage} setNext={setNext} />
									)}
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>

				<PopupDialog isOpen={isOpen} message={message} closePopup={closePopup} autoCloseTime={3000} />

				<PopupError />
			</div>
		</>
	)
}
