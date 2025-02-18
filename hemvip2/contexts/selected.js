"use client"

import { DEFAULT_OPTION } from "@/config/constants"
import { createContext, useContext, useEffect, useState } from "react"
import { usePages, useStudy } from "./experiment"
import { useRouter } from "next/navigation"
import { apiPost } from "@/utils/fetcher"

const SelectedContext = createContext({
	// [pageid]: selectedOption
	options: {
		0: DEFAULT_OPTION.unselect, // sample data
		1: DEFAULT_OPTION.unselect,
	},
	selectOption: (newOption, currentPage) => {},
	validateAttentionCheck: () => {},
})

export const useSelected = () => useContext(SelectedContext)
export function SelectProvider({ children }) {
	const [options, setOptions] = useState({})
	const [failedAttentionCheck, setFailedAttentionCheck] = useState({})
	const pages = usePages()
	const study = useStudy()
	const router = useRouter()

	const selectOption = (newOption, currentPage) => {
		const currentPageId = pages[currentPage].id
		const expectedVote = pages[currentPage].expected_vote
		if (currentPageId != 0) {
			setOptions((prevOption) => ({
				...prevOption,
				[currentPageId]: newOption,
			}))
			console.log("expectedVote", expectedVote, "newOption", newOption)
		}
	}

	const validateAttentionCheck = (currentPage) => {
		console.log("go here   validateAttentionCheck", currentPage)
		const page = pages[currentPage]
		const currentPageId = pages[currentPage].id
		if (page.type === "check" && currentPageId !== 0) {
			const expectedVote = pages[currentPage].expected_vote
			const selectedOption = options[currentPageId]

			if (expectedVote !== selectedOption) {
				console.log("expectedVote", expectedVote, "selectedOption", selectedOption)

				if (Object.keys(failedAttentionCheck).length >= 3) {
					const resp = apiPost("/api/failed-study", {
						prolific_userid: study.prolific_userid,
						prolific_studyid: study.prolific_studyid,
						prolific_sessionid: study.prolific_sessionid,
						studyid: study.id,
						failedAttentionCheck: JSON.stringify(failedAttentionCheck),
					})
					router.push("/failed")
				}

				setFailedAttentionCheck((prev) => ({
					...prev,
					[currentPageId]: new Date(),
				}))
			}
		}
	}

	return (
		<SelectedContext.Provider value={{ options, selectOption, validateAttentionCheck }}>
			{children}
		</SelectedContext.Provider>
	)
}
