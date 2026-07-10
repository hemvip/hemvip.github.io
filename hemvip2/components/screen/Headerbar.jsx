import { useConfigStudy, useStudy } from "@/contexts/experiment"
import { DEFAULT_MISMATCH, DEFAULT_PAIRWISE } from "@/config/constants"
import React from "react"

export function Headerbar() {
	const study = useStudy()

	if (!study || !study.name) {
		return <></>
	}

	// Seamless studies (incl. semantic mismatch) don't show this top banner — its text
	// is the mismatch-speech question, which doesn't apply to them.
	if (typeof study.type === "string" && study.type.startsWith("seamless-")) {
		return <></>
	}

	if (study.type === "pairwise-humanlikeness") {
		study.name = DEFAULT_PAIRWISE.question
	} else {
		study.name = DEFAULT_MISMATCH.question
	}
	return (
		<div className="w-full p-3 bg-gradient-to-b from-neutral-700 to-neutral-900 border border-zinc-800">
			<h1 className="w-full justify-center text-center text-white text-2xl font-bold leading-6">{study.name}</h1>
		</div>
	)
}
