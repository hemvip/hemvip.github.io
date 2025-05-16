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
					<div className="mt-3 leading-6 first:mt-0">
						<strong>Please use Chrome, Edge, Safari, or Firefox for this study.</strong>
						<br/>
						In this study, you'll watch pairs of videos showing animated characters talking and moving their bodies.
						The faces are covered and there's no sound, because we're only interested in the body movement.
					</div>
					<div className="mt-3 leading-6 first:mt-0">
						<br/><strong>Your task</strong><br/>
						For each video pair, choose which character moves more like a real person. You'll click one of five buttons below the videos to make your choice:
						<br/>
						<div className="mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
								<Image
									alt="Title suffix"
									loading="lazy"
									decoding="async"
									data-nimg="1"
									style="border: 4px solid #ccc"
									className="w-[60%] select-none bg-white border border-black"
									width="70%"
									height="70%"
									src="/screen_preview.png"
								/>
						</div>
			
						<br/><strong>After choosing a video</strong><br/>
						If you don’t choose “They are equal,” you’ll also need to select one or more reasons from the list below the videos. 
						You can also write your own reason if none of the options fit.

						<div className="mb-4 mt-3 flex justify-center overflow-hidden rounded-xl  bg-zinc-100">
							<Image
								alt="Title suffix"
								loading="lazy"
								decoding="async"
								data-nimg="1"
								style="border: 4px solid #ccc"
								className="w-[80%] select-none bg-white ring-1 ring-gray-200"
								width="70%"
								height="100%"
								src="/juice_preview.png"
							/>
						</div>
					</div>

					<div className="mt-3 leading-6 first:mt-0">
						<br/>
						<strong>Important notes</strong>
						<br/>
						<ul className="list-disc list-inside">
							<li>⚠️ Make sure to watch each video all the way through.</li>
							<li>⚠️ Only use the “Skip screen” button if there’s a technical issue (like a video not loading). Don’t refresh the page — this will restart the experiment.</li>
							<li>⚠️ You will encounter attention check questions. Please follow their instructions carefully — failing them may disqualify you and you won’t be paid.</li>
						</ul>
					</div>
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
