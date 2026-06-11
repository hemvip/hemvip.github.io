"use client"

import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React from "react"
import cn from "clsx"
import { useCurrentPage } from "@/contexts/experiment"

// Semantic Mismatch response: the rater reads two descriptions and picks the one
// that matches the gesture. The two texts ride in page.options (parsed upstream).
// Left choice -> LeftClearlyBetter, right choice -> RightClearlyBetter, matching
// the value in page.expected_vote so scoring stays in the existing vocabulary.
export function SemanticBoard({ currentPage }) {
	const { addAction } = useActionRecorder()
	const { options, selectOption } = useSelected()
	const page = useCurrentPage(currentPage)

	const semantic = page.options && typeof page.options === "object" ? page.options : {}
	const choices = [
		{ text: semantic.leftText ?? "", actionString: DEFAULT_ACTION_STRING.clickClearlyLeft, optionValue: DEFAULT_OPTION.clearlyLeft },
		{ text: semantic.rightText ?? "", actionString: DEFAULT_ACTION_STRING.clickClearlyRight, optionValue: DEFAULT_OPTION.clearlyRight },
	]

	const handleChoice = (actionString, optionValue) => {
		addAction(actionString, currentPage)
		selectOption(optionValue, currentPage)
	}

	return (
		<div className="w-full mx-auto flex flex-col sm:flex-row justify-center items-stretch gap-4">
			{choices.map((choice, index) => (
				<button
					key={index}
					onClick={() => handleChoice(choice.actionString, choice.optionValue)}
					className={cn(
						"flex-1 max-w-xl cursor-pointer select-none rounded-lg border border-zinc-300 p-4 text-left shadow transition-colors",
						options[page.id] === choice.optionValue ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
					)}
				>
					<span className="block text-xs font-semibold uppercase tracking-wide opacity-60">{index === 0 ? "Description A" : "Description B"}</span>
					<span className="mt-1 block text-base leading-snug">{choice.text}</span>
				</button>
			))}
		</div>
	)
}
