"use client"

import { DEFAULT_OPTION } from "@/config/constants"
import { createContext, useContext, useState } from "react"
import { usePages } from "./experiment"

const SelectedContext = createContext({
	// [pageid]: selectedOption
	options: {
		0: DEFAULT_OPTION.unselect,
		1: DEFAULT_OPTION.unselect,
	},
	selectOption: (newOption, currentPage) => {},
})

export const useSelected = () => useContext(SelectedContext)
export function SelectProvider({ children }) {
	const [options, setOptions] = useState({})
	const pages = usePages()

	const selectOption = (newOption, currentPage) => {
		const currentPageId = pages[currentPage].id
		if (currentPageId != 0) {
			setOptions((prevOption) => ({
				...prevOption,
				[currentPageId]: newOption,
			}))
		}
	}

	return <SelectedContext.Provider value={{ options, selectOption }}>{children}</SelectedContext.Provider>
}
