"use client"

import { createContext, useContext, useState } from "react"
import { usePages } from "./experiment"

const ActionRecorderContext = createContext({
	globalActions: ["Actions 1", "Actions 2"], // sample, this will be replace
	screenActions: [],
	addAction: () => {},
})

export const useActionRecorder = () => useContext(ActionRecorderContext)
export function ActionRecorderProvider({ children }) {
	const [globalActions, setGlobalActions] = useState([])
	const [screenActions, setScreenActions] = useState({})
	const pages = usePages()
	// console.log("screenActions", screenActions)

	const addAction = (newAction, currentPage) => {
		setGlobalActions([...globalActions, newAction])
		const currentPageId = pages[currentPage].id
		if (currentPageId != 0) {
			setScreenActions((prevActions) => ({
				...prevActions,
				[currentPageId]: [...(prevActions[currentPageId] || []), newAction],
			}))
		}
	}

	return (
		<ActionRecorderContext.Provider value={{ globalActions: globalActions, screenActions, addAction }}>
			{children}
		</ActionRecorderContext.Provider>
	)
}
