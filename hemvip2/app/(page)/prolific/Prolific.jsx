"use client"

import React from "react"
import axios from "axios"
import { Screen } from "@/components/screen"
import { ExperimentConfigProvider } from "@/contexts/experiment"
import { ScreenControlProvider } from "@/contexts/screencontroll"
import { ActionRecorderProvider } from "@/contexts/action-recorder"
import PreventRefreshPage from "@/components/PreventRefreshPage"
import { Callout } from "@/components/core"
import { StudyProvider } from "@/contexts/selected"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { UnloadProvider } from "@/contexts/beforeunload"
import { PopupMessageProvider } from "@/contexts/popupmessage"
import useSWR from "swr"
import { apiFetcherData } from "@/utils/fetcher"
import { useSearchParams } from "next/navigation"

export function Prolific() {
	const searchParams = useSearchParams()
	const prolificid = searchParams.get("PROLIFIC_ID")
	const studyid = searchParams.get("STUDY_ID")
	const sessionid = searchParams.get("SESSION_ID")
	const code = searchParams.get("CODE")

	console.log("prolificid", prolificid, studyid, sessionid, code)
	const {
		data: study,
		error,
		isLoading: loading,
	} = useSWR(`/api/study?prolificid=${prolificid}&studyid=${studyid}&sessionid=${sessionid}&code=${code}`, apiFetcherData, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	})
	console.log("study", study)
	// const [data, setData] = useState([])
	// const [loading, setLoading] = useState(true)
	// const [isSuccess, setIsSuccess] = useState(false)
	// const [error, setError] = useState(null)

	// useEffect(() => {
	// 	const fetchStudies = async () => {
	// 		const response = await axios.get(`${API_ENDPOINT}/api/studies?prolificid=${PROLIFIC_PID}&studyid=${STUDY_ID}&sessionid=${SESSION_ID}`)

	// 		const { errors, success, data, msg } = response.data
	// 		// console.log("msg", msg)
	// 		// setError(errors)
	// 		if (data == null) {
	// 			setError(true)
	// 		}
	// 		setIsSuccess(success)
	// 		setData(data)
	// 	}
	// 	setLoading(true)
	// 	fetchStudies()
	// 	setLoading(false)
	// }, [PROLIFIC_PID, STUDY_ID, SESSION_ID])

	if (error) {
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

	if (loading) {
		return (
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<LoadingSpin />
			</div>
		)
	}

	if (!study) {
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
		<ExperimentConfigProvider value={study}>
			<ScreenControlProvider min={0} max={study.pages.length - 1}>
				<ActionRecorderProvider pages={study.pages}>
					<StudyProvider>
						<UnloadProvider>
							<PopupMessageProvider>
								<Screen prolificid={prolificid} studyid={studyid} sessionid={sessionid} />
							</PopupMessageProvider>
						</UnloadProvider>
					</StudyProvider>
				</ActionRecorderProvider>
			</ScreenControlProvider>
		</ExperimentConfigProvider>
	)
}
