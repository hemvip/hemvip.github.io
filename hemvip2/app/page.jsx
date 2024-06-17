"use client"

import axios from "axios"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Loading from "@/components/loading/loading"
import { Callout } from "@/components/core"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { startStudy } from "./actions"

const studySchema = z.object({
  prolificid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "PROLIFIC_PID is invalid" }),
  studyid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "STUDY_ID is invalid" }),
  sessionid: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, { message: "SESSION_ID is invalid" }),
})

export default function Home({ searchParams }) {
  const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isError, setIsError] = useState(
    !PROLIFIC_PID || !STUDY_ID || !SESSION_ID
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(studySchema),
    defaultValues: {
      prolificid: PROLIFIC_PID || "",
      studyid: STUDY_ID || "",
      sessionid: SESSION_ID || "",
    },
  })

  const handleStart = async (formData) => {
    setLoading(true)
    setIsComplete(false)
    try {
      // const response = await axios.post("/api/study", data)
      // console.log(response)
      // const { success } = response.data

      const res = await startStudy({
        prolificid: formData.prolificid,
        studyid: formData.studyid,
        sessionid: formData.sessionid,
      })
      // console.log(res)
      const { success, data } = res
      // console.log(res)
      if (success) {
        if (data) {
          router.push(
            `/prolific?PROLIFIC_PID=${formData.prolificid}&STUDY_ID=${formData.studyid}&SESSION_ID=${formData.sessionid}`
          )
        } else {
          setIsComplete(true)
        }
      } else {
        const { errors } = response.data
        const fieldErrorMapping = {
          prolificid: "prolificid",
          studyid: "studyid",
          sessionid: "sessionid",
        }
        const fieldWithError = Object.keys(fieldErrorMapping).find(
          (field) => errors[field]
        )
        if (fieldWithError) {
          // Use the ValidFieldNames type to ensure the correct field names
          setError(fieldErrorMapping[fieldWithError], {
            type: "server",
            message: errors[fieldWithError],
          })
        }
      }
    } catch (error) {
      console.log(error)
      alert("Submitting form failed!", error)
      setIsError(true)
      setLoading(false)
    }

    setLoading(false)
  }

  return (
    <main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
      {loading && <LoadingSpin />}
      <div className="w-full px-[7%] gap-2 py-2 flex flex-col bg-stone-50">
        <div className="flex flex-col w-full h-full gap-2">
          <div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
            <div className=" h-full w-full  flex justify-center align-middle">
              <div className=" w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle">
                <div className="lg:px-8 px-0 overflow-y-auto">
                  <h1 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Pairwise Comparison of Gesture Generation AI Model Studies
                  </h1>

                  <p className="mt-3 leading-6 first:mt-0">
                    Click <strong>Start</strong> button to begin study.
                  </p>

                  <p className="mt-3 leading-6 first:mt-0">
                    Please read Startup guide before Start
                  </p>

                  <form
                    onSubmit={handleSubmit(handleStart)}
                    // onSubmit={func}
                    className="flex flex-col py-4 md:py-8"
                  >
                    <div className="flex flex-row gap-4 px-4 justify-center items-start">
                      <div className="flex-1">
                        <label
                          htmlFor="prolificid"
                          className="block text-xs text-gray-600 uppercase"
                        >
                          PROLIFIC_PID
                        </label>
                        <input
                          {...register("prolificid")}
                          id="prolificid"
                          placeholder=""
                          disabled={true}
                          required={true}
                          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-g-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                          type="text"
                          name="prolificid"
                        />
                        {errors.prolificid && (
                          <div className="px-2">
                            <span className="font-semibold text-red-900 w-full block text-xs">
                              {errors.prolificid.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="studyid"
                          className="block text-xs text-gray-600 uppercase"
                        >
                          STUDY_ID
                        </label>
                        <input
                          id="studyid"
                          {...register("studyid")}
                          placeholder=""
                          required={true}
                          disabled={true}
                          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-g-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                          type="text"
                          name="studyid"
                        />
                        {errors.studyid && (
                          <div className="px-2">
                            <span className="font-semibold text-red-900 w-full block text-xs">
                              {errors.studyid.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="sessionid"
                          className="block text-xs text-gray-600 uppercase"
                        >
                          SESSION_ID
                        </label>
                        <input
                          id="sessionid"
                          {...register("sessionid")}
                          placeholder=""
                          required={true}
                          disabled={true}
                          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-g-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                          type="text"
                          name="sessionid"
                        />
                        {errors.sessionid && (
                          <div className="px-2">
                            <span className="font-semibold text-red-900 w-full block text-xs">
                              {errors.sessionid.message}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <button
                          // disabled={isError}
                          type="submit"
                          className="flex mb-4 mt-5 h-10 w-full font-bold text-white bg-blue-500 items-center justify-center rounded-md border text-sm transition-all focus:outline-none disabled:bg-blue-200 disabled:border-blue-200"
                        >
                          {loading ? <Loading color="#fff" /> : "Start"}
                        </button>
                      </div>
                    </div>
                    {isError && (
                      <div className="px-4">
                        <Callout type="error">
                          Please visit{" "}
                          <a
                            className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
                            href="https://www.prolific.com/"
                          >
                            Prolific
                          </a>{" "}
                          to get link PROLIFIC_PID, STUDY_ID, SESSION_ID
                        </Callout>
                      </div>
                    )}

                    {isComplete && (
                      <div className="px-4">
                        <Callout type="info">All study is complete</Callout>
                      </div>
                    )}
                  </form>

                  <hr className="dark:border-neutral-800" />
                  <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">
                    Startup guide
                  </h2>
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">
                    1. Our Gesture Generation Study
                  </h3>
                  <p className="mt-3 leading-6 first:mt-0">
                    Gesture Generation is the process of generating gestures
                    from speech or text. The goal of Gesture Generation is to
                    generate gestures that are natural, realistic, and
                    appropriate for the given context. The generated gestures
                    can be used to animate virtual characters, robots, or
                    embodied conversational agents.
                  </p>
                  <p className="mt-3 leading-6 first:mt-0">Guide</p>
                  <ul className="mt-3 list-disc first:mt-0 ltr:ml-6 rtl:mr-6">
                    <li className="task-list-item">
                      Exist screen when paritipate
                    </li>
                    <li className="task-list-item">Update the website...</li>
                    <li className="task-list-item">Contact the media...</li>
                  </ul>
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">
                    2. Process of Gesture Generation Study
                  </h3>
                  <p className="mt-3 leading-6 first:mt-0">
                    Start our study by click{" "}
                    <code className="nextra-code" dir="ltr">
                      Start
                    </code>
                  </p>
                  <p className="mt-6 leading-6 first:mt-0">
                    Please choose{" "}
                    <code className="nextra-code" dir="ltr">
                      Next
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
