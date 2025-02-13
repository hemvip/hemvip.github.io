"use client"

import { createContext, useContext, useState } from "react"
import { usePages } from "./experiment"

const ActionRecorderContext = createContext({
	actions: ["Actions 1", "Actions 2"], // sample, this will be replace
	screenActions: [],
	addAction: () => {},
})

export const useActionRecorder = () => useContext(ActionRecorderContext)
export function ActionRecorderProvider({ children }) {
	const [globalActions, setGlobalActions] = useState([])
	let [screenActions, setScreenActions] = useState([])
	const pages = usePages()

	const addAction = (newAction, currentPage) => {
		console.log("pages", pages)
		setGlobalActions([...globalActions, newAction])
		const updatedScreenActions = [...screenActions]

		if (updatedScreenActions[currentPage]) {
			updatedScreenActions[currentPage] = [...updatedScreenActions[currentPage], newAction]
		} else {
			updatedScreenActions[currentPage] = [newAction]
		}
		setScreenActions(updatedScreenActions)
	}

	// actions list sample will be replace by [] here
	return <ActionRecorderContext.Provider value={{ actions: globalActions, screenActions, addAction }}>{children}</ActionRecorderContext.Provider>
}
