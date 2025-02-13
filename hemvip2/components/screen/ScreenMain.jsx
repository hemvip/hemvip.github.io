"use client"

import React from "react"
import cn from "clsx"
import { useCurrentPage } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING } from "@/config/constants"
import { EvaluationBoard, ScreenMessage } from "."
import { SkipIcon } from "@/icons/skip"

export function ScreenMain({ currentPage, setNext }) {
	const page = useCurrentPage(currentPage)
	const { addAction } = useActionRecorder()

	// Play
	const playLeft = () => {
		addAction(DEFAULT_ACTION_STRING.playVideoLeft, currentPage)
	}

	const playRight = () => {
		addAction(DEFAULT_ACTION_STRING.playVideoRight, currentPage)
	}

	// Pause
	const pauseLeft = () => {
		addAction(DEFAULT_ACTION_STRING.pauseVideoLeft, currentPage)
	}
	const pauseRight = () => {
		addAction(DEFAULT_ACTION_STRING.pauseVideoRight, currentPage)
	}

	// Scroll video change
	const seekedVideoLeft = () => {
		addAction(DEFAULT_ACTION_STRING.seekedVideoLeft, currentPage)
	}
	const seekedVideoRight = () => {
		addAction(DEFAULT_ACTION_STRING.seekedVideoRight, currentPage)
	}

	const finishVideoLeft = () => {
		addAction(DEFAULT_ACTION_STRING.finishVideoLeft, currentPage)
	}

	const finishVideoRight = () => {
		addAction(DEFAULT_ACTION_STRING.finishVideoRight, currentPage)
	}

	// const handleSkipLeft = () => {
	// 	addAction(DEFAULT_ACTION_STRING.skipLeft, currentPage)
	// 	setNext()
	// }

	// const handleSkipRight = () => {
	// 	addAction(DEFAULT_ACTION_STRING.skipRight, currentPage)
	// 	setNext()
	// }

	return (
		<>
			<div className="w-full h-full flex flex-col gap-2 overflow-hidden">
				<ScreenMessage text={page.question} />
				<div className="w-full h-full flex justify-center align-middle gap-2 ">
					<div className="flex-1 h-full">
						<div className="h-full w-full relative flex items-center justify-center">
							{/* <button
								onClick={handleSkipLeft}
								className="z-2 flex flex-row justify-center items-center gap-1 right-4 top-4 absolute button rounded-md bg-white px-2 py-1"
								title="Skip Video"
							>
								<span className="w-5 h-5">
									<SkipIcon className="bg-red-500"></SkipIcon>
								</span>
								<span className="font-semibold flex-grow text-sm cursor-pointer">Skip</span>
							</button> */}
							{page.video1 && page.video1.url && (
								<video
									muted={false}
									autoPlay={false}
									onPlay={playLeft}
									onSeeked={seekedVideoLeft}
									onPause={pauseLeft}
									onEnded={finishVideoLeft}
									playsInline
									loop={false}
									controls
									className={cn(
										"absolute inset-0 h-full w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800"
									)}
								>
									<source src={page.video1.url} type="video/mp4" />
								</video>
							)}
						</div>
					</div>

					<div className="flex-1 h-full">
						<div className="h-full w-full relative flex items-center justify-center">
							{/* <button
								onClick={handleSkipRight}
								className="z-2 flex flex-row justify-center items-center gap-1 right-4 top-4 absolute button rounded-md bg-white px-2 py-1"
								title="Skip Video"
							>
								<span className="w-5 h-5">
									<SkipIcon className="bg-red-500"></SkipIcon>
								</span>
								<span className="font-semibold flex-grow text-sm cursor-pointer">Skip</span>
							</button> */}
							{page.video2 && page.video2.url && (
								<video
									muted={false}
									autoPlay={false}
									onPause={pauseRight}
									onPlay={playRight}
									onSeeked={seekedVideoRight}
									onEnded={finishVideoRight}
									playsInline
									loop={false}
									controls
									className={cn(
										"absolute inset-0 h-full  w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800"
									)}
								>
									{/* <source src={"/gesture_video.mp4"} type="video/mp4" /> */}
									<source src={page.video2.url} type="video/mp4" />
								</video>
							)}
						</div>
					</div>
				</div>
			</div>
			<EvaluationBoard currentPage={currentPage} />
			{/* <ScreenMessage /> */}
		</>
	)
}
