"use client"

import { ScreenControlProvider } from "@/contexts/screencontroll"
import { ActionRecorderProvider } from "@/contexts/action-recorder"
import { SelectProvider } from "@/contexts/selected"
import { PreventUnloadProvider } from "@/contexts/beforeunload"
import { PopupMessageProvider } from "@/contexts/popupmessage"
import { NavScreen, Screen } from "@/components/screen"
import { StudyConfig } from "../StudyConfig"
import PreventRefreshPage from "@/components/PreventRefreshPage"
import { AttentionCheckProvider } from "@/contexts/attention-check"

export default function Page() {
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

	// if (loading) {
	// 	return (
	// 		<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
	// 			<LoadingSpin />
	// 		</div>
	// 	)
	// }

	return (
		<StudyConfig>
			<NavScreen />

			<ScreenControlProvider>
				<ActionRecorderProvider>
					<SelectProvider>
						<PreventUnloadProvider>
							<PopupMessageProvider>
								<AttentionCheckProvider>
									<Screen />
								</AttentionCheckProvider>
							</PopupMessageProvider>
						</PreventUnloadProvider>
					</SelectProvider>
				</ActionRecorderProvider>
			</ScreenControlProvider>
			<PreventRefreshPage />
		</StudyConfig>
	)
}
