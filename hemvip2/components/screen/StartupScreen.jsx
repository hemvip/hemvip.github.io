import React, { memo } from "react"
import Image from "next/image"
import { StartBoostIcon } from "@/icons/startboost"
import { useScreenControl } from "@/contexts/screencontroll"
import { usePreventUnload } from "@/contexts/beforeunload"

const StartupScreen = memo(function StartupScreen() {
	const { setNext } = useScreenControl()
	const { setCanUnload } = usePreventUnload()
	const startPage = () => {
		setNext()
		setCanUnload(false)
	}

	return (
		<>
			<h2 className="mx-[10%] border-b mb-3">
				<div className="flex justify-center mb-2 gap-2 text-center font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl ">
					<div>📢</div> User study guide <div className="-scale-x-90">📢</div>
				</div>
			</h2>
			<div className="overflow-y-auto">
				<div className="mx-[10%]  overflow-y-visible">
					Pairwise Comparison of Gesture Generation Studies
					<p className="mt-3 leading-6 first:mt-0">
						<strong>Please use Chrome, Edge, Safari, or Firefox for this study.</strong>
					</p>

					<p className="mt-3 leading-6">
						In this experiment you will see pairs of videos of talking characters gesturing with their arms, hands, head, and body. The faces are covered by masks since facial expressions are not part of this experiment, and the speech audio is muted on purpose, since we are only interested in what you think about the motion.
					</p>

					<p className="mt-3 leading-6">
						Your task is to determine <strong>in which of the two videos the character’s motion looks more like the motion of a real person.</strong> To give your response, click one of the five buttons below the videos.
					</p>

					<p className="mt-3 leading-6">
						Unless you respond <code className="nextra-code" dir="ltr">They are equal</code>, you also have to give the reason for your choice by ticking one or more options listed under the videos. You can also write in your own reasons if they are not covered by the options we provide.
					</p>

					<p className="mt-3 leading-6">
						There are occasional attention checks inserted into the task. Please comply with their instructions when you find them or you will be disqualified without pay.
					</p>

					<p className="mt-3 leading-6">
						Please use the <code className="nextra-code" dir="ltr">Skip screen</code> button only in case of technical issues such as a video failing to load. Do not reload the webpage itself, as this will cause the experiment to start over.
					</p>

					<p className="mt-3 leading-6">
						Importantly, please make sure you watch each video in full.
					</p>
					<p className="mt-3 leading-6 first:mt-0">
						Start our study by click{" "}
						<code className="nextra-code" dir="ltr">
							Start
						</code>
					</p>
				</div>
			</div>
			<div className="my-4 w-full mx-auto flex justify-center">
				<button
					type="submit"
					// onClick={handleFinish}
					onClick={startPage}
					aria-disabled="false"
					className="flex cursor-pointer select-none gap-2 min-w-48 h-10 px-4 font-bold text-white leading-1 bg-green-600 dark:border-neutral-800 items-center justify-center rounded-md border transition-all focus:outline-none"
				>
					<StartBoostIcon className="w-5 h-5 fill-current"/>
					Start Study
				</button>
			</div>
		</>
	)
})


export default StartupScreen
