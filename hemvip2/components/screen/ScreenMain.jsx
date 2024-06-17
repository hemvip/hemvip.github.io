"use client"

import React from "react"
import cn from "clsx"
import { useCurrentPage } from "@/contexts/experiment"
import { useActionRecorder } from "@/contexts/action-recorder"
import { DEFAULT_ACTION_STRING } from "@/config/constants"
import { EvaluationBoard, ScreenMessage } from "."

export function ScreenMain({ currentPage }) {
  const page = useCurrentPage(currentPage)
  const video1URL =
    page.type == "video" ? page.videos[0].url : "/gesture_video.mp4"
  const video2URL =
    page.type == "video" ? page.videos[1].url : "/gesture_video.mp4"
  const { addAction } = useActionRecorder()
  // console.log(page)

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

  return (
    <>
      <div className="w-full h-full flex flex-col gap-2 overflow-hidden">
        <ScreenMessage text={page.question} />
        <div className="w-full h-full flex justify-center align-middle gap-2 ">
          <div className="flex-1 h-full">
            <div className="h-full w-full relative flex items-center justify-center">
              <video
                muted={false}
                autoPlay={false}
                onPlay={playLeft}
                onSeeked={seekedVideoLeft}
                onPause={pauseLeft}
                playsInline
                loop
                controls
                className={cn(
                  "absolute inset-0 h-full w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800"
                )}
              >
                <source src={video1URL} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="flex-1 h-full">
            <div className="h-full w-full relative flex items-center justify-center">
              <video
                muted={false}
                autoPlay={false}
                onPause={pauseRight}
                onPlay={playRight}
                onSeeked={seekedVideoRight}
                playsInline
                loop
                controls
                className={cn(
                  "absolute inset-0 h-full  w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800"
                )}
              >
                {/* <source src={"/gesture_video.mp4"} type="video/mp4" /> */}
                <source src={video2URL} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <EvaluationBoard currentPage={currentPage} />
      {/* <ScreenMessage /> */}
    </>
  )
}
