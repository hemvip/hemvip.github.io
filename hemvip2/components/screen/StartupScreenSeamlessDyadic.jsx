import React, { memo } from "react"
import { StartBoostIcon } from "@/icons/startboost"
import { useScreenControl } from "@/contexts/screencontroll"
import { usePreventUnload } from "@/contexts/beforeunload"
import Video from "@/components/core/video"

const R2_BASE_URL = "https://pub-fbeaf7896b6e4c9c9bb55fd70512c2e8.r2.dev"
const EXAMPLE_MATCHED_VIDEO = `${R2_BASE_URL}/videos/seamless-dyadic-mismatch/matched/SeamlessMocap/public_023_agent_V03_S1930_I00000114_P5055--96_interlocutor_V03_S1930_I00000114_P5054--96_sample_5.mp4`
const EXAMPLE_MISMATCHED_VIDEO = `${R2_BASE_URL}/videos/seamless-dyadic-mismatch/mismatched/SeamlessMocap/public_047_agent_V03_S1930_I00000114_P5055--96_interlocutor_V00_S2047_I00001050_P1305A--212_sample_1_M.mp4`

// TODO: final wording for Seamless Dyadic Mismatch startup screen.
const StartupScreenSeamlessDyadic = memo(function StartupScreenSeamlessDyadic() {
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
					<div>📢</div> User study guide <div className="-scale-x-90">📢</div>
				</div>
			</h2>
			<div className="overflow-y-auto">
				<div className="mx-[10%] overflow-y-visible space-y-6">
					<section>
						<p className="leading-6 text-slate-700">
							<strong className="text-slate-900">Please use Chrome, Edge, Safari, or Firefox for this study.</strong>
						</p>
						<p className="mt-2 leading-6 text-slate-700">
							In this study, you will watch pairs of videos showing two animated characters talking to each other.
							The only difference between the two videos is the motion of the left character &mdash; the conversation
							you hear, and the right (blue T-shirt) character&apos;s motion, will be the same. Here is an example
							video pair:
						</p>

						<div className="mb-4 mt-3 flex justify-center gap-4">
							<div className="flex-1 max-w-[30%] flex flex-col items-center gap-1">
								<Video src={EXAMPLE_MATCHED_VIDEO} className="w-full" />
								<span className="text-sm text-slate-500">First video</span>
							</div>
							<div className="flex-1 max-w-[30%] flex flex-col items-center gap-1">
								<Video src={EXAMPLE_MISMATCHED_VIDEO} className="w-full" />
								<span className="text-sm text-slate-500">Second video with alternate motion for the character in red</span>
							</div>
						</div>
					</section>

					<section>
						<h3 className="border-l-4 border-slate-300 pl-3 text-lg font-semibold tracking-tight text-slate-900">
							Your task
						</h3>
						<p className="mt-2 leading-6 text-slate-700">
							Choose in which video the left-side (red T-shirt) character listens and reacts more naturally and
							expressively to the other character. Your answer should not be based on which gesture simply looks
							visually better &mdash; instead, evaluate which gestures pay attention to and respond to the other
							person in the interaction.
						</p>
						<p className="mt-2 leading-6 text-slate-700">
							You will click one of five buttons below the videos to make your choice. If you do not choose
							&ldquo;They are equal&rdquo;, you will also need to select one or more reasons from the list below
							the videos. You can also write your own reason if none of the options fit.
						</p>

						<div className="mb-2 mt-3 flex justify-center overflow-hidden rounded-xl bg-zinc-100">
							<img
								alt="Title suffix"
								loading="lazy"
								decoding="async"
								style={{ border: '4px solid #ccc' }}
								className="w-[60%] select-none bg-white border border-black"
								src="/screen_preview_dyadic_mismatch.png"
							/>
						</div>
					</section>

					<section>
						<h3 className="border-l-4 border-amber-400 pl-3 text-lg font-semibold tracking-tight text-slate-900">
							Important notes
						</h3>
						<ul className="mt-2 list-none space-y-1.5 leading-6 text-slate-700">
							<li>⚠️ Make sure to watch each video all the way through.</li>
							<li>⚠️ The Next button is in the top right corner of the screen.</li>
							<li>⚠️ You will encounter attention check questions. Please follow their instructions carefully. Failing them may disqualify you and you will not be paid.</li>
							<li>⚠️ Only use the “Skip screen” button if there is a technical issue (like a video not loading).</li>
							<li>🚫 <strong className="text-slate-900">Do NOT refresh, reload, or close this page at any point during the study.</strong> Refreshing the page will <strong className="text-slate-900">restart the study from the very beginning, and you will lose all of your progress.</strong></li>
							<li>⚠️ If you have any questions, please contact us by sending a message on Prolific!</li>
						</ul>
					</section>
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
					<StartBoostIcon className="w-5 h-5 fill-current" />
					Start Study
				</button>
			</div>
		</>
	)
})

export default StartupScreenSeamlessDyadic
