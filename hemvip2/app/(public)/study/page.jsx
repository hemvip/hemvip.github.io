"use client"

// import axios from "axios"
// import { Screen } from "@/components/screen"
// import { ExperimentConfigProvider } from "@/contexts/experiment"
// import { ScreenControlProvider } from "@/contexts/screencontroll"
// import { ActionRecorderProvider } from "@/contexts/action-recorder"
// import PreventRefreshPage from "@/components/PreventRefreshPage"
// import { Callout } from "@/components/core"
// import { StudyProvider } from "@/contexts/study"
import { Suspense, useEffect, useState } from "react"
// import { API_ENDPOINT } from "@/utils/urlEndpoint"
import LoadingSpin from "@/components/loading/LoadingSpin"
// import { UnloadProvider } from "@/contexts/beforeunload"
import { useSearchParams } from "next/navigation"
import { Prolific } from "./Prolific"
import { usePages, useStudy } from "@/contexts/experiment"
import { ScreenControlProvider } from "@/contexts/screencontroll"
import { ActionRecorderProvider } from "@/contexts/action-recorder"
import { StudyProvider } from "@/contexts/selected"
import { UnloadProvider } from "@/contexts/beforeunload"
import { PopupMessageProvider } from "@/contexts/popupmessage"
import { Screen } from "@/components/screen"

export default function Page() {
	// const searchParams = useSearchParams()
	// const prolificid = searchParams.get("PROLIFIC_ID")
	// const studyid = searchParams.get("STUDY_ID")
	// const sessionid = searchParams.get("SESSION_ID")
	// const code = searchParams.get("CODE")
	const [currentPage, setCurrentPage] = useState(0)
	const [loading, setLoading] = useState(false)
	// const [study, setStudy] = useState(null)

	const pages = usePages()

	// useEffect(() => {
	// 	const params = new URLSearchParams(window.location.search)
	// 	const idx = Number(params.get("page"))
	// 	setCurrentPage(idx)

	// 	const study = localStorage.getItem("hemvip-study")
	// 	const pages = localStorage.getItem("hemvip-pages")
	// 	setStudy(study)
	// 	setPages(pages)
	// 	setLoading(false)
	// }, [])

	// if (!isSuccess || !data) {
	//   return (
	//     <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
	//       <div className="h-screen flex items-center justify-center">
	//         <Callout type="error" className="z-10 w-full max-w-lg rounded-2xl">
	//           <p className="leading-7 first:mt-0">
	//             Your account prolific, study or session is not exist or expired.
	//           </p>
	//           Please visit{" "}
	//           <a
	//             className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
	//             href="https://www.prolific.com/"
	//           >
	//             Prolific
	//           </a>{" "}
	//           to get access again.
	//         </Callout>
	//       </div>
	//     </div>
	//   )
	// }
	if (loading) {
		return (
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<LoadingSpin />
			</div>
		)
	}

	return (
		<Suspense fallback={<div>Loading....</div>}>
			<ScreenControlProvider min={0} max={pages.length - 1}>
				<ActionRecorderProvider pages={pages}>
					<StudyProvider>
						<UnloadProvider>
							<PopupMessageProvider>
								<Screen />
							</PopupMessageProvider>
						</UnloadProvider>
					</StudyProvider>
				</ActionRecorderProvider>
			</ScreenControlProvider>
			{/* <PreventRefreshPage /> */}
			{/* <PaginationScreen /> */}
		</Suspense>
	)
}
