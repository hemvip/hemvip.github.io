"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React, { Suspense, useState } from "react"
import axios from "axios"
import Loading from "@/components/loading/loading"
import { Callout } from "@/components/core"
import { API_ENDPOINT } from "@/utils/urlEndpoint"
import cn from "clsx"

// export function HomePage({ state, handleAttentionCheck }) {
export function HomePage({ state }) {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [isComplete, setIsComplete] = useState(false)
	const [isError, setIsError] = useState(!PROLIFIC_PID || !STUDY_ID || !SESSION_ID)

	const handleStart = async () => {
		// if (state === "Attention Check") {
		//   handleAttentionCheck()
		//   return
		// }

		// if (state !== "Start Study") {
		//   return
		// }

		setLoading(true)
		setIsComplete(false)
		const formData = {
			prolificid: PROLIFIC_PID,
			studyid: STUDY_ID,
			sessionid: SESSION_ID,
		}
		try {
			console.log("API_ENDPOINT", API_ENDPOINT)
			if (!API_ENDPOINT) {
				return ""
			}

			const response = await axios.post(`${API_ENDPOINT}/api/studies`, formData)
			console.log("Homepage.response", response)

			// console.log(res)
			const { success, data } = response.data
			// console.log(res)
			if (success) {
				if (data) {
					router.push(`/prolific?PROLIFIC_PID=${formData.prolificid}&STUDY_ID=${formData.studyid}&SESSION_ID=${formData.sessionid}`)
				} else {
					setIsComplete(true)
				}
			} else {
				setIsError(true)
			}
		} catch (error) {
			console.error("Homepage.Error", error)
			setIsError(true)
			setLoading(false)
		}

		setLoading(false)
	}

	return (
		<div className="w-full px-[7%] gap-2 py-2 flex flex-col">
			<div className="flex flex-col w-full h-full gap-2">
				<div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
					<div className=" h-full w-full  flex justify-center align-middle">
						<div className=" w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle">
							<div className="lg:px-8 px-0 overflow-y-auto">
								<h1 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Pairwise Comparison of Gesture Generation AI Model Studies</h1>

								<p className="mt-3 leading-6 first:mt-0">
									Click <strong>Start</strong> button to begin study.
								</p>

								<p className="mt-3 leading-6 first:mt-0">Please read Startup guide before Start</p>

								<div className="flex flex-col py-4 md:py-8">
									<div className="flex flex-row gap-4 px-4 justify-center items-start">
										{/* <div className="flex-1">
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
                        </div> */}
										{/* <div className="flex-1">
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
                        </div> */}
										{/* <div className="flex-1">
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
                        </div> */}
										{!isError && (
											<div className="min-w-60">
												<button
													type="submit"
													onClick={handleStart}
													className={cn(
														"flex mb-4 mt-5 h-10 w-full font-bold text-white  items-center justify-center rounded-md border text-sm transition-all focus:outline-none disabled:bg-blue-200 disabled:border-blue-200",
														state === "Start Study" ? "bg-blue-500" : "bg-green-600"
													)}
												>
													{loading ? (
														<Loading />
													) : state === "Start Study" ? (
														<div className="flex gap-2 items-center">
															<svg width={20} height={20} viewBox="0 0 28 28" fill="current" className="fill-current">
																<path d="M12.7658 9.27776C11.7659 8.68408 10.5 9.40469 10.5 10.5675V17.4324C10.5 18.5953 11.7659 19.3159 12.7658 18.7222L19.2709 14.8598C19.9235 14.4724 19.9235 13.5276 19.2709 13.1401L12.7658 9.27776ZM2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14ZM14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5Z" />
															</svg>
															Start Study
														</div>
													) : (
														<div className="flex gap-2 items-center">
															<svg width={20} height={20} viewBox="0 0 48 48" fill="current" className="text-current fill-current">
																<path d="M6.5 24C6.5 14.335 14.335 6.5 24 6.5C33.665 6.5 41.5 14.335 41.5 24V28H36.25C35.5596 28 35 28.5596 35 29.25V42.75C35 43.4404 35.5596 44 36.25 44H38.25C41.4256 44 44 41.4256 44 38.25V24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24V38.25C4 41.4256 6.57436 44 9.75 44H11.75C12.4404 44 13 43.4404 13 42.75V29.25C13 28.5596 12.4404 28 11.75 28H6.5V24ZM37.5 30.5H41.5V38.25C41.5 40.0449 40.0449 41.5 38.25 41.5H37.5V30.5ZM6.5 30.5H10.5V41.5H9.75C7.95507 41.5 6.5 40.0449 6.5 38.25V30.5ZM22.75 23.25L22.75 44.75C22.75 45.4404 23.3096 46 24 46C24.6904 46 25.25 45.4404 25.25 44.75L25.25 23.25C25.25 22.5596 24.6904 22 24 22C23.3096 22 22.75 22.5596 22.75 23.25ZM18.25 28C18.9404 28 19.5 28.5596 19.5 29.25V38.75C19.5 39.4404 18.9404 40 18.25 40C17.5596 40 17 39.4404 17 38.75V29.25C17 28.5596 17.5596 28 18.25 28ZM31 29.25C31 28.5596 30.4404 28 29.75 28C29.0596 28 28.5 28.5596 28.5 29.25V38.75C28.5 39.4404 29.0596 40 29.75 40C30.4404 40 31 39.4404 31 38.75V29.25Z" />
															</svg>
															Attention Check
														</div>
													)}
												</button>
											</div>
										)}
									</div>
									{isError && (
										<div className="px-4">
											<Callout type="error">
												Please visit{" "}
												<a className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]" href="https://www.prolific.com/">
													Prolific
												</a>{" "}
												to get session.
												{/* PROLIFIC_PID, STUDY_ID, SESSION_ID */}
											</Callout>
										</div>
									)}

									{isComplete && (
										<div className="px-4">
											<Callout type="info">All study is complete</Callout>
										</div>
									)}
								</div>

								<hr className="dark:border-neutral-800" />
								<h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">Startup guide</h2>
								<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">1. Our Gesture Generation Study</h3>
								<p className="mt-3 leading-6 first:mt-0">
									Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for
									the given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.
								</p>
								<p className="mt-3 leading-6 first:mt-0">Guide</p>
								<ul className="mt-3 list-disc first:mt-0 ltr:ml-6 rtl:mr-6">
									<li className="task-list-item">Exist screen when paritipate</li>
									<li className="task-list-item">Update the website...</li>
									<li className="task-list-item">Contact the media...</li>
								</ul>
								<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">2. Process of Gesture Generation Study</h3>
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
	)
}
