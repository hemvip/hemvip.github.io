import React from "react"
import { useCurrentPage } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING } from "@/config/constants"
import { useScreenControl } from "@/contexts/screencontroll"
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons"
import { usePopupMessage } from "@/contexts/popupmessage"

export function ScreenHeader({ currentPage, setPrev, setNext, showPopup }) {
	const page = useCurrentPage(currentPage)
	const { screenActions, addAction } = useActionRecorder()
	const { isStartPage, isEndPage } = useScreenControl()

	// const finishPage = () => {
	//   addAction(DEFAULT_ACTION_STRING.clickFinish, currentPage)
	// }

	const prevPage = () => {
		setPrev()
		addAction(DEFAULT_ACTION_STRING.clickPrev, currentPage)
	}

	const nextPage = () => {
		if (currentPage >= screenActions.length) {
			showPopup("Please watch the video first")
			console.log("Please watch the video first")
			return
		}

		const currentAction = screenActions[currentPage]
		console.log("currentAction", currentAction)

		const isFinishLeftVideo = currentAction.includes(DEFAULT_ACTION_STRING.finishVideoLeft)
		console.log("isFinishLeftVideo", isFinishLeftVideo)
		if (!isFinishLeftVideo) {
			showPopup("Please finish watch left video.")
			return
		}
		console.log("isFinishLeftVideo", isFinishLeftVideo)

		const isFinishRightVideo = currentAction.includes(DEFAULT_ACTION_STRING.finishVideoRight)
		if (!isFinishRightVideo) {
			showPopup("Please finish watch right video.")
			return
		}

		const optionSelect = [
			DEFAULT_ACTION_STRING.clickClearlyLeft,
			DEFAULT_ACTION_STRING.clickSlightlyLeft,
			DEFAULT_ACTION_STRING.clickEqual,
			DEFAULT_ACTION_STRING.clickSlightlyRight,
			DEFAULT_ACTION_STRING.clickClearlyRight,
		]

		let isSelected = false
		for (let i = 0; i < optionSelect.length; i++) {
			const option = optionSelect[i]
			if (currentAction.includes(option)) {
				isSelected = true
				break
			}
		}

		if (isSelected) {
			setNext()
			addAction(DEFAULT_ACTION_STRING.clickNext, currentPage)
		} else {
			showPopup("Please select your option.")
		}
	}

	const startPage = () => {
		setNext()
		addAction(DEFAULT_ACTION_STRING.clickStart, currentPage)
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
					className="py-0 sm:py-2 m-1 px-0 sm:px-5 text-center text-zinc-800 font-bold leading-1 sm:leading-5 flex items-center gap-2 disabled:text-gray-400"
				>
					<ArrowLeftIcon className="h-4 sm:h-5 inline shrink-0 ltr:rotate-180" />
					Previous
				</button>
			)}

			<h3 className="flex-grow items-center flex justify-center text-gray-800 h-full text-shadow-sm text-center text-zinc-800 font-bold">{page.name}</h3>

			{isEndPage ? (
				<div></div>
			) : isStartPage ? (
				<button
					data-role="button"
					data-inline="true"
					className="py-0 sm:py-2 m-1 px-0 sm:px-5 text-center text-zinc-800 font-bold leading-5 flex items-center gap-2 disabled:text-gray-400"
					onClick={startPage}
				>
					Start
					<ArrowRightIcon className="h-4 sm:h-5 inline shrink-0 rtl:rotate-180" />
				</button>
			) : (
				<button
					data-role="button"
					data-inline="true"
					className="py-0 sm:py-2 m-1 px-0 sm:px-5 text-center text-zinc-800 font-bold leading-5 flex items-center gap-2 disabled:text-gray-400"
					onClick={nextPage}
				>
					Next
					<ArrowRightIcon className="h-4 sm:h-5 inline shrink-0 rtl:rotate-180" />
				</button>
			)}
		</div>
	)
}
