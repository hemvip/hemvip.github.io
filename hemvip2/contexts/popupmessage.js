"use client"

import { createContext, useContext, useState } from "react"

const PopupMessageContext = createContext({
	isOpen: false,
	message: "", // sample, this will be replace
	showPopup: (message) => {},
	closePopup: () => {},
})

export const usePopupMessage = () => useContext(PopupMessageContext)
export function PopupMessageProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)
	const [message, setMessage] = useState("")

	const showPopup = (message) => {
		console.log("showPopup ", message)
		setMessage(message)
		setIsOpen(true)
	}

	const closePopup = () => {
		setMessage("")
		setIsOpen(false)
	}

	return (
		<PopupMessageContext.Provider value={{ isOpen, message, showPopup, closePopup }}>
			{children}
		</PopupMessageContext.Provider>
	)
}
