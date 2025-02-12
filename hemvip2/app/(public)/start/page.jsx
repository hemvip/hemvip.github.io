"use client"

import { Callout } from "@/components/core"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { apiFetcherData } from "@/utils/fetcher"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom"

export default function Page() {
	const searchParams = useSearchParams()
	const prolificid = searchParams.get("prolificid")
	const studyid = searchParams.get("studyid")
	const sessionid = searchParams.get("sessionid")
	const code = searchParams.get("code")
	const router = useRouter()

	useEffect(() => {
		async function fetchStudy() {
			localStorage.setItem("hemvip-study", {})
			const study = await apiFetcherData(`/api/study?prolificid=${prolificid}&studyid=${studyid}&sessionid=${sessionid}&code=${code}`)
			console.log("study", study)

			if (study) {
				localStorage.setItem("hemvip-study", JSON.stringify(study))
				router.push(`/study?index=generic`)
			}
		}

		fetchStudy()
	}, [prolificid, studyid, sessionid, code])

	if (!prolificid || !studyid || !sessionid || !code) {
		return (
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<Callout type="error">
						<p className="leading-7 first:mt-0">Your account prolific, study or session is not exist or expired.</p>
						Please visit{" "}
						<a className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="https://www.prolific.com/">
							Prolific
						</a>{" "}
						to get access again
					</Callout>
				</div>
			</div>
		)
	}

	return (
		<Suspense>
			<LoadingSpin />
		</Suspense>
	)
}
