"use client"

import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React from "react"
import cn from "clsx"
import { NoSymbolIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
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

	// The two "escape" votes: neither sentence matches, or both match equally. They
	// share the same single-vote slot as the sentence buttons, so picking one clears
	// any other selection. "Neither" keeps the red warning color; "both equally" is a
	// neutral judgment, so it reads grey rather than red.
	const escapeChoices = [
		{
			text: "The gestures express both sentences equally.",
			Icon: QuestionMarkCircleIcon,
			actionString: DEFAULT_ACTION_STRING.clickBothSemantic,
			optionValue: DEFAULT_OPTION.bothSemantic,
			selectedClass: "bg-zinc-600 border-zinc-600 text-white",
			unselectedClass: "bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200",
		},
		{
			text: "The gestures don't express either sentence.",
			Icon: NoSymbolIcon,
			actionString: DEFAULT_ACTION_STRING.clickNeitherSemantic,
			optionValue: DEFAULT_OPTION.neitherSemantic,
			selectedClass: "bg-red-700 border-red-700 text-white",
			unselectedClass: "bg-red-50 border-red-300 text-red-700 hover:bg-red-100",
		},
	]

	return (
		<div className="w-full mx-auto flex flex-col gap-4">
			<div className="text-center text-xl font-semibold text-zinc-600">Pick one:</div>
			<div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
				{choices.map((choice, index) => (
					<button
						key={index}
						onClick={() => handleChoice(choice.actionString, choice.optionValue)}
						className={cn(
							"flex flex-1 max-w-xl items-center gap-3 cursor-pointer select-none rounded-lg border border-zinc-300 p-4 text-left shadow transition-colors",
							options[page.id] === choice.optionValue ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
						)}
					>
						<span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-current text-sm font-bold" aria-hidden="true">
							{index + 1}
						</span>
						<span className="min-w-0">
							<span className="block text-xs font-semibold uppercase tracking-wide opacity-60">{index === 0 ? "Sentence 1" : "Sentence 2"}</span>
							<span className="mt-1 block text-base leading-snug">{renderWithBold(choice.text)}</span>
						</span>
					</button>
				))}
			</div>
			<div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
				{escapeChoices.map((choice, index) => (
					<button
						key={index}
						onClick={() => handleChoice(choice.actionString, choice.optionValue)}
						className={cn(
							"flex flex-1 max-w-xl items-center gap-2 cursor-pointer select-none rounded-lg border p-4 text-left shadow transition-colors font-semibold",
							options[page.id] === choice.optionValue ? choice.selectedClass : choice.unselectedClass
						)}
					>
						<choice.Icon className="size-6 shrink-0" aria-hidden="true" />
						<span>{choice.text}</span>
					</button>
				))}
			</div>
		</div>
	)
}
