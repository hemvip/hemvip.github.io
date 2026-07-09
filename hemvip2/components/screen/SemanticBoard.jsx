"use client"

import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React from "react"
import cn from "clsx"
import { useCurrentPage } from "@/contexts/experiment"

// Descriptions mark their key phrase by wrapping it in asterisks (`*phrase*`,
// the same convention used in the uploaded .txt files). Render those spans bold
// instead of showing the literal asterisks. The text originates from our own
// description uploads, so we build React nodes (no dangerouslySetInnerHTML).
function renderWithBold(text) {
	// Split on `*...*` groups, keeping the delimiters so we can style them.
	return String(text)
		.split(/(\*[^*]+\*)/g)
		.map((part, index) =>
			part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
				<strong key={index}>{part.slice(1, -1)}</strong>
			) : (
				part
			)
		)
}

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

	const isNeither = options[page.id] === DEFAULT_OPTION.neitherSemantic

	return (
		<div className="w-full mx-auto flex flex-col gap-4">
			<div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
				{choices.map((choice, index) => (
					<button
						key={index}
						onClick={() => handleChoice(choice.actionString, choice.optionValue)}
						className={cn(
							"flex-1 max-w-xl cursor-pointer select-none rounded-lg border border-zinc-300 p-4 text-left shadow transition-colors",
							options[page.id] === choice.optionValue ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
						)}
					>
						<span className="block text-xs font-semibold uppercase tracking-wide opacity-60">{index === 0 ? "Sentence 1" : "Sentence 2"}</span>
						<span className="mt-1 block text-base leading-snug">{renderWithBold(choice.text)}</span>
					</button>
				))}
			</div>
			<div className="flex justify-center">
				<button
					onClick={() => handleChoice(DEFAULT_ACTION_STRING.clickNeitherSemantic, DEFAULT_OPTION.neitherSemantic)}
					className={cn(
						"cursor-pointer select-none rounded-lg border p-3 text-center shadow transition-colors text-sm font-semibold",
						isNeither
							? "bg-red-700 border-red-700 text-white"
							: "bg-red-50 border-red-300 text-red-700 hover:bg-red-100"
					)}
				>
					Not clear / Neither sentence is expressed.
				</button>
			</div>
		</div>
	)
}
