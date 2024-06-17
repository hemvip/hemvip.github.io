"use client"

import { createContext, useContext, useState } from "react"

const ActionRecorderContext = createContext({
  actions: ["Actions 1", "Actions 2"], // sample, this will be replace
  screenActions: [],
  addAction: () => {},
})

export const useActionRecorder = () => useContext(ActionRecorderContext)
export function ActionRecorderProvider({ pages, children }) {
  const [actions, setActions] = useState([])
  let [screenActions, setScreenActions] = useState([])

  const addAction = (newAction, currentPage) => {
    setActions([...actions, newAction])
    const updatedScreenActions = [...screenActions]

    if (updatedScreenActions[currentPage]) {
      updatedScreenActions[currentPage] = [
        ...updatedScreenActions[currentPage],
        newAction,
      ]
    } else {
      updatedScreenActions[currentPage] = [newAction]
    }
    setScreenActions(updatedScreenActions)
  }

  // actions list sample will be replace by [] here
  return (
    <ActionRecorderContext.Provider
      value={{ actions, screenActions, addAction }}
    >
      {children}
    </ActionRecorderContext.Provider>
  )
}
