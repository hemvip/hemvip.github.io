"use client"

import { createContext, useContext, useState } from "react"

const ScreenAttentionCheckContext = createContext({
  pages: [2, 3],
  attentionPage: 2,
  correctValue: "Left Better", // "Left Better", "Right Better", "Equal"
  getAttentionPage: () => {},
  checkAttention: () => { },
})

export const useScreenAttentionCheck = () => useContext(ScreenAttentionCheckContext)

// from min_page 0 to max_page 3 (total 4 page)
export function ScreenAttentionCheckProvider({ maxPageIdx, children }) {
  const [attentionPage, setAttentionPage] = useState(0)
  const [progress, setProgress] = useState(0)

  

  return (
    <ScreenAttentionCheckContext.Provider
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
    </ScreenAttentionCheckContext.Provider>
  )
}
