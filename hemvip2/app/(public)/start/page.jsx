"use client"

import LoadingSpin from "@/components/loading/LoadingSpin"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom"

export default function Page() {
	const searchParams = useSearchParams()
	const prolificid = searchParams.get("PROLIFIC_ID")
	const studyid = searchParams.get("STUDY_ID")
	const sessionid = searchParams.get("SESSION_ID")
	const code = searchParams.get("CODE")

	useEffect(() => {}, [prolificid, studyid, sessionid, code])

	return (
		<Suspense>
			<LoadingSpin />
		</Suspense>
	)
}
