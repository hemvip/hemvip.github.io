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

export default function Page() {
	const searchParams = useSearchParams()
	const PROLIFIC_PID = searchParams.get("PROLIFIC_PID")
	const STUDY_ID = searchParams.get("STUDY_ID")
	const SESSION_ID = searchParams.get("SESSION_ID")

	console.log("object", PROLIFIC_PID, STUDY_ID, SESSION_ID)
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

	return (
		<Suspense fallback={<div>Loading heeeeere....</div>}>
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<Prolific userid={PROLIFIC_PID} studyid={STUDY_ID} sessionid={SESSION_ID} />
			</div>
			{/* <PreventRefreshPage /> */}
			{/* <PaginationScreen /> */}
		</Suspense>
	)
}

// export const runtime = 'edge'
