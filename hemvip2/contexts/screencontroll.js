"use client"

import { createContext, useContext, useState } from "react"

const ScreenControlContext = createContext({
  currentPage: 0,
  progress: 0,
  isStartPage: true,
  isEndPage: false,
  setPrev: () => {},
  setNext: () => {},
})

export const useScreenControl = () => useContext(ScreenControlContext)

// from min_page 0 to max_page 3 (total 4 page)
export function ScreenControlProvider({ min = 0, max = 3, children }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [progress, setProgress] = useState(0) // 0 - 100
  const [isStartPage, setIsStartPage] = useState(true)
  const [isEndPage, setIsEndPage] = useState(false)

  // console.log("max", max, "min", min)

  const setPrev = () => {
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
      }}
    >
      {children}
    </ScreenControlContext.Provider>
  )
}
