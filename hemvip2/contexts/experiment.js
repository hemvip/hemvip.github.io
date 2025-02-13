"use client"

import { DEFAULT_STUDY } from "@/config/constants"
import { createContext, useContext, useEffect, useRef } from "react"

const ConfigStudyContext = createContext({ study: {}, pages: {} })
ConfigStudyContext.displayName = "StudyConfig"

export const useConfigStudy = () => useContext(ConfigStudyContext)

export const useStudy = () => {
	const config = useConfigStudy()
	return config.study
}

export const usePages = () => {
	const config = useConfigStudy()
	return config.pages
}

export const useCurrentPage = (index) => {
	const pages = usePages()
	return pages?.[index] || {}
}

export function ConfigStudyProvider({ study, pages, children, loading }) {
	// DEFAULT_STUDY
	const studyRef = useRef({})
	// studyRef.current ||= {
	// 	...DEFAULT_STUDY,
	// 	...(study && typeof study === "object" ? study : {}),
	// }
	// DEFAULT_PAGES
	const pagesRef = useRef({})
	studyRef.current = study
	pagesRef.current = pages
	// const storeRef = useRef()
	// storeRef.current ||= {
	// 	...DEFAULT_STUDY,
	// 	...DEFAULT_PAGES,
	// 	...(value &&
	// 		Object.fromEntries(
	// 			Object.entries(value).map(([key, value]) => [key, value && typeof value === "object" && DEEP_OBJECT_KEYS.includes(key) ? { ...DEFAULT_SCREEN_CONFIG[key], ...value } : value])
	// 		)),
	// }
	// storeRef.current

	return (
		<ConfigStudyContext.Provider value={{ study: studyRef.current, pages: pagesRef.current, loading: loading }}>
			{children}
		</ConfigStudyContext.Provider>
	)
}
