import React, { memo } from "react"
import Image from "next/image"
import { StartBoostIcon } from "@/icons/startboost"
import { useScreenControl } from "@/contexts/screencontroll"

const StartupScreen = memo(function () {
	const { setNext } = useScreenControl()
	const startPage = () => {
		setNext()
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
					<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">1. Our Gesture Generation Study</h3>
					<p className="mt-3 leading-6 first:mt-0">
						Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that
						are natural, realistic, and appropriate for the given context. The generated gestures can be used to animate virtual characters, robots,
						or embodied conversational agents.
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
					<div className="mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
						<Image
							alt="Title suffix"
							loading="lazy"
							decoding="async"
							data-nimg="1"
							className="w-[60%] select-none bg-white ring-1 ring-gray-200"
							width={100}
							height={100}
							src="/screen_sample.png"
						/>
					</div>
					<p className="mt-6 leading-6 first:mt-0">
						Please choose{" "}
						<code className="nextra-code" dir="ltr">
							Next
						</code>
					</p>
					<div className="mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
						<Image
							alt="Title suffix"
							loading="lazy"
							decoding="async"
							data-nimg="1"
							className="w-[60%] select-none bg-white ring-1 ring-gray-200"
							width={100}
							height={100}
							src="/screen_sample.png"
						/>
					</div>
					<div className="mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
						<Image
							alt="Title suffix"
							loading="lazy"
							decoding="async"
							data-nimg="1"
							className="w-[60%] select-none bg-white ring-1 ring-gray-200"
							width={100}
							height={100}
							src="/screen_sample.png"
						/>
					</div>
					<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">3. Attention Check</h3>
					<div className="mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
						<Image
							alt="Title suffix"
							loading="lazy"
							decoding="async"
							data-nimg="1"
							className="w-[60%] select-none bg-white ring-1 ring-gray-200"
							width={100}
							height={100}
							src="/screen_sample.png"
						/>
					</div>
					<p className="mt-3 leading-6 first:mt-0">
						Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that
						are natural, realistic, and appropriate for the given context. The generated gestures can be used to animate virtual characters, robots,
						or embodied conversational agents.
					</p>
				</div>
			</div>
			<div className="my-4 w-full mx-auto flex justify-center">
				<button
					type="submit"
					// onClick={handleFinish}
					onClick={startPage}
					aria-disabled="false"
					className="flex cursor-pointer select-none gap-2 min-w-48 h-10 px-4 font-bold text-white leading-1 bg-green-500 dark:border-neutral-800 items-center justify-center rounded-md border transition-all focus:outline-none"
				>
					<StartBoostIcon className="w-5 h-5 fill-current" />
					Start Study
				</button>
			</div>
		</>
	)
})

export default StartupScreen
