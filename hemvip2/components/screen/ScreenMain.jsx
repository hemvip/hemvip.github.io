"use client"

import React from "react"
import cn from "clsx"
import { useCurrentPage } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING, DEFAULT_MISMATCH, DEFAULT_PAIRWISE } from "@/config/constants"
import { EvaluationBoard, JuiceBoard, ScreenMessage } from "."

export function ScreenMain({ currentPage, setNext, study }) {
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

	const determineIntroduction = () => {
		if (study.type === "pairwise-humanlikeness") {
			return DEFAULT_PAIRWISE.instruction
		} else {
			return DEFAULT_MISMATCH.instruction
		}
	}

	const determineQuestion = () => {
		if (study.type === "pairwise-humanlikeness") {
			return DEFAULT_PAIRWISE.question
		} else {
			return DEFAULT_MISMATCH.question
		}
	}

	return (
		<>
			<div className="w-full h-full flex flex-col gap-2 overflow-hidden">
				<ScreenMessage text={determineIntroduction()} className="text-xl"/>
				<div className=""><ScreenMessage text={determineQuestion()} className="text-3xl"/></div>
				<div className="w-full h-full flex justify-center align-middle gap-4 ">
					<div className="flex-1 h-full">
						<div className="h-full w-full relative flex items-center justify-center">
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
			<div className="mt-4">
				{(study.type === "pairwise-humanlikeness" || study.type === "mismatch-speech") && (
					<>
						<ScreenMessage text={"Which factors contributed most to your response? Please tick one or more options:"} className="text-xl" />
						<JuiceBoard currentPage={currentPage} study={study} />
					</>
				)}
			</div>
			{/* <ScreenMessage /> */}
		</>
	)
}
