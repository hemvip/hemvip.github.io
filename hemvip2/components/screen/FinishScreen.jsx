"use client"

import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React, { useState } from "react"
import cn from "clsx"
import ScreenSelectedResult from "./ScreenSelectedResult"
import { usePages } from "@/contexts/experiment"
import { CheckIcon, CircleLoading } from "@/icons"
import { CheckMarkIcon, FinishIcon } from "@/icons/finish"

export default function FinishScreen({ handleFinish, loadingFinish }) {
	const { options } = useSelected()

	return (
		<div className="px-8 overflow-y-auto">
			<div className="mx-[10%]">
				<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">
					Submit your result to finish
				</h3>

				
				<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl"></h3>
				{/* <p className="mt-3 leading-6 first:mt-0">
					Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for the
					given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.
				</p>
				<p className="mt-3 leading-6 first:mt-0">
					Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for the
					given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.
				</p> */}
				<div className="mt-3 w-full mx-auto flex justify-center">
					<button
						type="submit"
						onClick={handleFinish}
						aria-disabled="false"
						className="cursor-pointer select-none flex gap-2 min-w-48 h-10 px-4 font-bold text-white leading-1 bg-primary-600 dark:border-neutral-800 items-center justify-center rounded-md border transition-all focus:outline-none"
					>
						{loadingFinish ? <CircleLoading className="w-5 h-5" /> : <></>}
						Finish
					</button>
				</div>
			</div>
		</div>
	)
}
