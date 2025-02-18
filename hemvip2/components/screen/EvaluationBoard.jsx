// "use client"

// import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
// import { useActionRecorder } from "@/contexts/action-recorder"
// import { useSelected } from "@/contexts/selected"
// import React, { useState } from "react"
// import cn from "clsx"
// import { useCurrentPage, usePages } from "@/contexts/experiment"

// export function EvaluationBoard({ currentPage }) {
// 	const { addAction } = useActionRecorder()
// 	const { options, selectOption } = useSelected()
// 	const page = useCurrentPage(currentPage)

// 	// console.log("page", page)
// 	// console.log("options", options)

// 	const handleClearlyLeft = () => {
// 		addAction(DEFAULT_ACTION_STRING.clickClearlyLeft, currentPage)
// 		selectOption(DEFAULT_OPTION.clearlyLeft, currentPage)
// 	}

// 	const handleSlightlyLeft = () => {
// 		addAction(DEFAULT_ACTION_STRING.clickSlightlyLeft, currentPage)
// 		selectOption(DEFAULT_OPTION.slightlyLeft, currentPage)
// 	}

// 	const handleEqual = () => {
// 		addAction(DEFAULT_ACTION_STRING.clickEqual, currentPage)
// 		selectOption(DEFAULT_OPTION.equal, currentPage)
// 	}

// 	const handleSlightlyRight = () => {
// 		addAction(DEFAULT_ACTION_STRING.clickSlightlyRight, currentPage)
// 		selectOption(DEFAULT_OPTION.slightlyRight, currentPage)
// 	}

// 	const handleClearlyRight = () => {
// 		addAction(DEFAULT_ACTION_STRING.clickClearlyRight, currentPage)
// 		selectOption(DEFAULT_OPTION.clearlyRight, currentPage)
// 	}

// 	return (
// 		<div className="flex-col justify-between items-center">
// 			<div className="w-full justify-evenly mx-auto flex flex-row">
// 				<button
// 					className={cn(
// 						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 ",
// 						options[page.id] === DEFAULT_OPTION.clearlyLeft
// 							? "bg-neutral-800 text-neutral-100"
// 							: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
// 					)}
// 				>
// 					<div
// 						className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight"
// 						onClick={handleClearlyLeft}
// 					>
// 						Left slearly better
// 					</div>
// 				</button>

// 				<button
// 					className={cn(
// 						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 ",
// 						options[page.id] === DEFAULT_OPTION.slightlyLeft
// 							? "bg-neutral-800 text-neutral-100"
// 							: "bg-neutral-100 hover:bg-neutral-200"
// 					)}
// 				>
// 					<div
// 						className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight"
// 						onClick={handleSlightlyLeft}
// 					>
// 						Left slightly better
// 					</div>
// 				</button>

// 				<button
// 					className={cn(
// 						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
// 						options[page.id] === DEFAULT_OPTION.equal
// 							? "bg-neutral-800 text-neutral-100"
// 							: "bg-neutral-100 hover:bg-neutral-200"
// 					)}
// 				>
// 					<div
// 						className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight"
// 						onClick={handleEqual}
// 					>
// 						They are equal
// 					</div>
// 				</button>

// 				<button
// 					className={cn(
// 						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
// 						options[page.id] === DEFAULT_OPTION.slightlyRight
// 							? "bg-neutral-800 text-neutral-100"
// 							: "bg-neutral-100 hover:bg-neutral-200"
// 					)}
// 				>
// 					<div
// 						className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight"
// 						onClick={handleSlightlyRight}
// 					>
// 						Right slightly better
// 					</div>
// 				</button>

// 				<button
// 					className={cn(
// 						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
// 						options[page.id] === DEFAULT_OPTION.clearlyRight
// 							? "bg-neutral-800 text-neutral-100"
// 							: "bg-neutral-100 hover:bg-neutral-200"
// 					)}
// 				>
// 					<div
// 						className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight"
// 						onClick={handleClearlyRight}
// 					>
// 						Right clearly better
// 					</div>
// 				</button>
// 			</div>
// 		</div>
// 	)
// }
"use client"

import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React from "react"
import cn from "clsx"
import { useCurrentPage } from "@/contexts/experiment"

export function EvaluationBoard({ currentPage }) {
	const { addAction } = useActionRecorder()
	const { options, selectOption } = useSelected()
	const page = useCurrentPage(currentPage)

	const buttonOptions = [
		{
			label: "Left Clearly Better",
			actionString: DEFAULT_ACTION_STRING.clickClearlyLeft,
			optionValue: DEFAULT_OPTION.clearlyLeft,
		},
		{
			label: "Left Slightly Better",
			actionString: DEFAULT_ACTION_STRING.clickSlightlyLeft,
			optionValue: DEFAULT_OPTION.slightlyLeft,
		},
		{
			label: "They Are Equal",
			actionString: DEFAULT_ACTION_STRING.clickEqual,
			optionValue: DEFAULT_OPTION.equal,
		},
		{
			label: "Right Slightly Better",
			actionString: DEFAULT_ACTION_STRING.clickSlightlyRight,
			optionValue: DEFAULT_OPTION.slightlyRight,
		},
		{
			label: "Right Clearly Better",
			actionString: DEFAULT_ACTION_STRING.clickClearlyRight,
			optionValue: DEFAULT_OPTION.clearlyRight,
		},
	]

	const handleOptionClick = (actionString, optionValue) => {
		addAction(actionString, currentPage)
		selectOption(optionValue, currentPage)
	}

	return (
		<div className="flex-col justify-between items-center">
			<div className="w-full justify-evenly mx-auto flex flex-row">
				{buttonOptions.map((option, index) => (
					<button
						key={index}
						className={cn(
							"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
							options[page.id] === option.optionValue
								? "bg-neutral-800 text-neutral-100"
								: "bg-neutral-100 hover:bg-neutral-200"
						)}
						onClick={() => handleOptionClick(option.actionString, option.optionValue)}
					>
						<div className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight">
							{option.label}
						</div>
					</button>
				))}
			</div>
		</div>
	)
}
