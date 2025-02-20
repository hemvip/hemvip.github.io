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
	const pagesRef = useRef({})
	studyRef.current = study
	pagesRef.current = pages

	return (
		<ConfigStudyContext.Provider value={{ study: studyRef.current, pages: pagesRef.current, loading: loading }}>
			{children}
		</ConfigStudyContext.Provider>
	)
}
