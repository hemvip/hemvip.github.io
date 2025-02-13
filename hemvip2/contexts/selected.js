"use client"

import { DEFAULT_OPTION } from "@/config/constants"
import { createContext, useContext, useState } from "react"

const SelectedContext = createContext({
	options: {
		0: DEFAULT_OPTION.unselect,
		1: DEFAULT_OPTION.unselect,
	}, // sample, this will be replace
	selectStudy: (newOption, currentPage) => {},
})

export const useSelected = () => useContext(SelectedContext)
export function SelectProvider({ children }) {
	const [options, setOptions] = useState({})

	const selectStudy = (newOption, currentPage) => {
		console.log(newOption, currentPage)
		setOptions(() => {
			options[currentPage] = newOption

			return options
		})
	}

	// actions list sample will be replace by [] here
	return <SelectedContext.Provider value={{ options, selectStudy }}>{children}</SelectedContext.Provider>
}
