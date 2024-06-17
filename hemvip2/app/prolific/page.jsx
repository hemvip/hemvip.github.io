"use server"

import { Screen } from "@/components/screen"
import { fetchStudy } from "./actions"
import { ExperimentConfigProvider } from "@/contexts/experiment"
import { ScreenControlProvider } from "@/contexts/screencontroll"
import { ActionRecorderProvider } from "@/contexts/action-recorder"
import PreventRefreshPage from "@/components/PreventRefreshPage"
import { Callout } from "@/components/core"
import { StudyProvider } from "@/contexts/study"

export default async function Page({ searchParams }) {
  const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams
  // console.log(PROLIFIC_PID, STUDY_ID, SESSION_ID)

  const { errors, success, data, msg } = await fetchStudy({
    prolificid: PROLIFIC_PID,
    studyid: STUDY_ID,
    sessionid: SESSION_ID,
  })

  // console.log("data", data)
  if (!success || !data) {
    return (
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <div className="h-screen flex items-center justify-center">
          <Callout type="error" className="z-10 w-full max-w-lg rounded-2xl">
            <p className="leading-7 first:mt-0">
              Your account prolific, study or session is not exist or expired.
            </p>
            Please visit{" "}
            <a
              className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
              href="https://www.prolific.com/"
            >
              Prolific
            </a>{" "}
            to get access again.
          </Callout>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <ExperimentConfigProvider value={data}>
          <ScreenControlProvider min={0} max={data.pages.length - 1}>
            <ActionRecorderProvider pages={data.pages}>
              <StudyProvider>
                <Screen
                  prolificid={PROLIFIC_PID}
                  studyid={STUDY_ID}
                  sessionid={SESSION_ID}
                />
              </StudyProvider>
            </ActionRecorderProvider>
          </ScreenControlProvider>
        </ExperimentConfigProvider>
      </div>
      {/* <PreventRefreshPage /> */}
      {/* <PaginationScreen /> */}
    </>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           experimentid: 'my_first_experiment',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

// export async function getServerProps({ params }) {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const repo = await res.json()
//   // return { props: { repo } }
//   console.log(params)
//   const id = params.experimentid

//   return { props: { experimentid: id } }
// }
// export async function getServerSideProps() {
//   // const data = await fetchData()
//   const data = { json: '' }
//   return { props: { data } }
// }
