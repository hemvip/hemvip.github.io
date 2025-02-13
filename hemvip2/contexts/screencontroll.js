"use client"

import { createContext, useContext, useState } from "react"
import { usePages } from "./experiment"

const ScreenControlContext = createContext({
	currentPage: 0,
	progress: 0,
	isStartPage: true,
	isEndPage: false,
	setPrev: () => {},
	setNext: () => {},
	direction: 1,
})

export const useScreenControl = () => useContext(ScreenControlContext)

// from min_page 0 to max_page 3 (total 4 page)
export function ScreenControlProvider({ children }) {
	const [currentPage, setCurrentPage] = useState(0)
	const [progress, setProgress] = useState(0) // 0 - 100
	const [isStartPage, setIsStartPage] = useState(true)
	const [isEndPage, setIsEndPage] = useState(false)
	const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward
	const pages = usePages()
	const min = 0
	const max = pages.length - 1

	// console.log("max", max, "mins", min)

	const setPrev = () => {
		setDirection(-1) // Set direction to backward
		const pageNow = currentPage - 1
		setIsStartPage(pageNow === min)
		setIsEndPage(pageNow === max)
		if (pageNow >= min) {
			setCurrentPage(pageNow)
			setProgress(((pageNow - min) / (max - min)) * 100)
		} else {
			setCurrentPage(min)
		}
	}

	const setNext = () => {
		setDirection(1) // Set direction to forward
		const pageNow = currentPage + 1
		setIsStartPage(pageNow === min)
		setIsEndPage(pageNow === max)
		if (pageNow <= max) {
			setCurrentPage(pageNow)
			setProgress(((pageNow - min) / (max - min)) * 100)
		} else {
			setCurrentPage(max)
		}
	}

	return (
		<ScreenControlContext.Provider
			value={{
				currentPage,
				progress,
				isStartPage,
				isEndPage,
				setPrev,
				setNext,
				direction,
			}}
		>
			{children}
		</ScreenControlContext.Provider>
	)
}
