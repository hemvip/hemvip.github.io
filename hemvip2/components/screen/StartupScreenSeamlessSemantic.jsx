import React, { memo } from "react"
import { StartBoostIcon } from "@/icons/startboost"
import { useScreenControl } from "@/contexts/screencontroll"
import { usePreventUnload } from "@/contexts/beforeunload"

// TODO: final wording for Seamless Semantic Mismatch startup screen.
const StartupScreenSeamlessSemantic = memo(function StartupScreenSeamlessSemantic() {
	const { setNext } = useScreenControl()
	const { setCanUnload } = usePreventUnload()
	const startPage = () => {
		setNext()
		setCanUnload(false)
	}

	return (
		<>
			<h2 className="mx-[10%] border-b mb-3">
				<div className="flex justify-center mb-2 gap-2 text-center font-semibold tracking-tight text-slate-900 text-2xl ">
					<div>📢</div> Seamless Semantic Mismatch — User study guide <div className="-scale-x-90">📢</div>
				</div>
			</h2>
			<div className="overflow-y-auto">
				<div className="mx-[10%] overflow-y-visible">
					<div className="mt-3 leading-6 first:mt-0">
						{/* TODO: instructions copy */}
					</div>
				</div>
			</div>

			<div className="my-4 w-full mx-auto flex justify-center">
				<button
					type="submit"
					onClick={startPage}
					aria-disabled="false"
					className="flex cursor-pointer select-none gap-2 min-w-48 h-10 px-4 font-bold text-white leading-1 bg-green-600 dark:border-neutral-800 items-center justify-center rounded-md border transition-all focus:outline-none"
				>
					<StartBoostIcon className="w-5 h-5 fill-current" />
					Start Study
				</button>
			</div>
		</>
	)
})

export default StartupScreenSeamlessSemantic
