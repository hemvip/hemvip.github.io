import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React from "react"
import cn from "clsx"
import ScreenSelectedResult from "./ScreenSelectedResult"
import { usePages } from "@/contexts/experiment"
import { CheckIcon } from "@/icons"
import { CheckMarkIcon, FinishIcon } from "@/icons/finish"

export default function FinishScreen({ handleFinish }) {
	const pages = usePages()
	const { options } = useSelected()

	return (
		<div className="px-8 overflow-y-auto">
			<div className="mx-[10%]">
				<h2 className="text-center font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl">🏁 Your Selection Result 🏁</h2>
				<h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">Submit your result to finish</h3>

				<p className="mt-3 leading-6 first:mt-0 text-sm">
					You cannot edit on selected option here. To make changes, please click the &apos;Previous&apos; button to reselect your option.
				</p>
				<div className={cn("-mx-6 mb-4 overflow-x-auto overscroll-x-contain px-6 pb-4", "mask-gradient")}>
					<div className="w-full border-collapse text-base block">
						<div className="block">
							<div className="w-full px-4 flex border-b pt-2 text-left dark:border-neutral-700">
								<div className="py-2 min-w-14 text-center font-semibold">#Page</div>
								<div className="flex-grow text-center py-2 font-semibold">Your Selection</div>
							</div>
						</div>
						<div className="flex flex-col align-baseline text-gray-900 dark:text-gray-100 h-80 overflow-y-auto">
							{Object.entries(options).map(([pageid, selected], index) => {
								return (
									<div
										className="flex w-full border-b border-t border-t-white border-gray-100 text-center dark:border-neutral-700/50 px-4"
										key={index}
									>
										<div className="py-2 min-w-14 items-center flex justify-center text-center">{pageid}</div>
										{/* <div className=' py-2 '>{JSON.stringify(pages[pageid].content)}</div> */}
										<div className="py-2 flex-grow">
											<ScreenSelectedResult selected={selected} pageid={pageid} />
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
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
						className="cursor-pointer select-none flex gap-2 min-w-48 h-10 px-4 font-bold text-white leading-1 bg-green-500 dark:border-neutral-800 items-center justify-center rounded-md border transition-all focus:outline-none"
					>
						<FinishIcon className="w-5 h-5 fill-current" />
						Finish
					</button>
				</div>
			</div>
		</div>
	)
}
