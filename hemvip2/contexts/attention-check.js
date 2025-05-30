"use client"

import { DEFAULT_OPTION } from "@/config/constants"
import { createContext, useContext, useEffect, useState } from "react"
import { usePages } from "./experiment"
import { useRouter } from "next/navigation"

const AttentionCheckContext = createContext({
	// [pageid]: selectedOption
	options: {
		39: DEFAULT_OPTION.unselect, // sample value
	},
	selectAttentionCheck: (newOption, currentPage) => {},
	validateAttentionCheck: () => {},
})

export const useAttentionCheck = () => useContext(AttentionCheckContext)
export function AttentionCheckProvider({ children }) {
	const [failedOptions, setFailedOptions] = useState({})
	const pages = usePages()
	const router = useRouter()

	const selectAttentionCheck = (newOption, currentPage) => {
		const currentPageId = pages[currentPage].id
		const expectedVote = pages[currentPage].expected_vote
		if (currentPageId != 0) {
			setFailedOptions((prevOption) => ({
				...prevOption,
				[currentPageId]: newOption,
			}))
		}
	}

	const validateAttentionCheck = () => {}

	useEffect(() => {
		if (Object.keys(failedOptions).length > 3) {
			router.push("/failed?reason=too_many_failed_attention_checks")
		}
	}, [failedOptions])

	return (
		<AttentionCheckContext.Provider value={{ options: failedOptions, selectAttentionCheck, validateAttentionCheck }}>
			{children}
		</AttentionCheckContext.Provider>
	)
}
