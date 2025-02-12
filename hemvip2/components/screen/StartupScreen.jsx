import React from "react"
import Image from "next/image"

export default function StartupScreen() {
	return (
		<div className="overflow-y-auto">
			<div className="mx-[10%]  overflow-y-visible">
				<h2 className="text-center font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl">📢 User study guide 📢</h2>
				<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">1. Our Gesture Generation Study</h3>
				<p className="mt-3 leading-6 first:mt-0">
					Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for the
					given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.
				</p>
				<p className="mt-3 leading-6 first:mt-0">
					Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for the
					given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.
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
				<div className="-mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
					<Image alt="Title suffix" loading="lazy" decoding="async" data-nimg="1" className="w-[60%] select-none bg-white ring-1 ring-gray-200" width={100} height={100} src="/screen_sample.png" />
				</div>
				<p className="mt-6 leading-6 first:mt-0">
					Please choose{" "}
					<code className="nextra-code" dir="ltr">
						Next
					</code>
				</p>
				<div className="-mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
					<Image alt="Title suffix" loading="lazy" decoding="async" data-nimg="1" className="w-[60%] select-none bg-white ring-1 ring-gray-200" width={100} height={100} src="/screen_sample.png" />
				</div>
				<div className="-mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
					<Image alt="Title suffix" loading="lazy" decoding="async" data-nimg="1" className="w-[60%] select-none bg-white ring-1 ring-gray-200" width={100} height={100} src="/screen_sample.png" />
				</div>
				<div className="-mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
					<Image alt="Title suffix" loading="lazy" decoding="async" data-nimg="1" className="w-[60%] select-none bg-white ring-1 ring-gray-200" width={100} height={100} src="/screen_sample.png" />
				</div>
				<p className="mt-3 leading-6 first:mt-0">
					Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for the
					given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.
				</p>
			</div>
		</div>
	)
}
