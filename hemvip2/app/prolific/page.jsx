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
import { useSearchParams } from 'next/navigation'

export default function Page() {
  // const searchParams = useSearchParams();
  // const PROLIFIC_PID = searchParams.get('PROLIFIC_PID');
  // const STUDY_ID = searchParams.get('STUDY_ID');
  // const SESSION_ID = searchParams.get('SESSION_ID');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   const fetchStudies = async () => {
  //     const response = await axios.get(`${API_ENDPOINT}/api/studies?prolificid=${PROLIFIC_PID}&studyid=${STUDY_ID}&sessionid=${SESSION_ID}`)

  //     const { errors, success, data, msg } = response.data
  //     console.log("msg", msg)
  //     setError(errors)
  //     setIsSuccess(success)
  //     setData(data)
  //   }
  //   setLoading(true)
  //   fetchStudies()
  //   setLoading(false)
  // }, [PROLIFIC_PID, STUDY_ID, SESSION_ID])

  if (loading) {
    return (
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <LoadingSpin />
      </div>
    )
  }

  if (!data || data.length <= 0) {
    return (
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <LoadingSpin />
      </div>
    )
  }

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
    <Suspense fallback={<div>loading...</div>}>
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">34
        {/* <ExperimentConfigProvider value={data}>
          <ScreenControlProvider min={0} max={data.pages.length - 1}>
            <ActionRecorderProvider pages={data.pages}>
              <StudyProvider>
                <UnloadProvider>
                  <Screen
                    prolificid={PROLIFIC_PID}
                    studyid={STUDY_ID}
                    sessionid={SESSION_ID}
                  />
                </UnloadProvider>
              </StudyProvider>
            </ActionRecorderProvider>
          </ScreenControlProvider>
        </ExperimentConfigProvider> */}
      </div>
      {/* <PreventRefreshPage /> */}
      {/* <PaginationScreen /> */}
    </Suspense>
  )
}

// export const runtime = 'edge'