"use client"

import { DEFAULT_OPTION } from "@/config/constants"
import { createContext, useContext, useState } from "react"
import { usePages } from "./experiment"

const AttentionCheckContext = createContext({
	// [pageid]: selectedOption
	options: {
		39: DEFAULT_OPTION.unselect, // sample value
		27: DEFAULT_OPTION.unselect,
	},
	selectAttentionCheck: (newOption, currentPage) => {},
})

export const useAttentionCheck = () => useContext(AttentionCheckContext)
export function AttentionCheckProvider({ children }) {
	const [options, setOptions] = useState({})
	const pages = usePages()

	const selectAttentionCheck = (newOption, currentPage) => {
		const currentPageId = pages[currentPage].id
		if (currentPageId != 0) {
			setOptions((prevOption) => ({
				...prevOption,
				[currentPageId]: newOption,
			}))
		}
	}

	return (
		<AttentionCheckContext.Provider value={{ options, selectAttentionCheck }}>
			{children}
		</AttentionCheckContext.Provider>
	)
}
