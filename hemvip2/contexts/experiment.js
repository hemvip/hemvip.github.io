"use client"

import { DEEP_OBJECT_KEYS, DEFAULT_SCREEN_CONFIG } from "@/config/constants"
import { createContext, useContext, useRef } from "react"

const ExperimentConfigContext = createContext({})
ExperimentConfigContext.displayName = "ExperimentConfig"
export const useExperimentConfig = () => useContext(ExperimentConfigContext)

export const usePages = () => {
  const config = useExperimentConfig()
  return config.pages
}

export const useCurrentPage = (index) => {
  const pages = usePages()
  if (index < 0 || index >= pages.length) {
    return {}
  } else {
    return pages[index]
  }
}

export function ExperimentConfigProvider({ value, children }) {
  const storeRef = useRef()
  storeRef.current ||= {
    ...DEFAULT_SCREEN_CONFIG,
    ...(value &&
      Object.fromEntries(
        Object.entries(value).map(([key, value]) => [
          key,
          value && typeof value === "object" && DEEP_OBJECT_KEYS.includes(key)
            ? { ...DEFAULT_SCREEN_CONFIG[key], ...value }
            : value,
        ])
      )),
  }

  return (
    <ExperimentConfigContext.Provider value={storeRef.current}>
      {children}
    </ExperimentConfigContext.Provider>
  )
}
