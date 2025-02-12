"use client"

import LoadingSpin from "@/components/loading/LoadingSpin"
import { ConfigStudyProvider } from "@/contexts/experiment"
import { useEffect, useState } from "react"

export function StudyConfig({ children }) {
	const [study, setStudy] = useState({})
	const [pages, setPages] = useState({})
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const studyStorage = JSON.parse(localStorage.getItem("hemvip-study") || "{}")
		const pagesStorage = JSON.parse(localStorage.getItem("hemvip-pages") || "{}")

		setStudy(studyStorage)
		setPages(pagesStorage)
		setLoading(false)
	}, [])

	if (loading) {
		return (
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<LoadingSpin />
			</div>
		)
	}

	return (
		<ConfigStudyProvider study={study} pages={pages}>
			{children}
		</ConfigStudyProvider>
	)
}
