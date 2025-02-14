"use client"

import { DEFAULT_OPTION } from "@/config/constants"
import { createContext, useContext, useEffect, useState } from "react"
import { usePages } from "./experiment"
import { useRouter } from "next/navigation"

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
	const router = useRouter()

	const selectAttentionCheck = (newOption, currentPage) => {
		const currentPageId = pages[currentPage].id
		if (currentPageId != 0) {
			setOptions((prevOption) => ({
				...prevOption,
				[currentPageId]: newOption,
			}))
		}
	}

	useEffect(() => {
		if (Object.keys(options).length > 3) {
			router.push("/failed")
		}
	}, [options])

	return (
		<AttentionCheckContext.Provider value={{ options, selectAttentionCheck }}>
			{children}
		</AttentionCheckContext.Provider>
	)
}
