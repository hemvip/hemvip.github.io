import React from "react"
import { AttentionCheckBoard } from "./AttentionCheckBoard"
import { useCurrentPage } from "@/contexts/experiment"

export default function ScreenAttentionCheck() {
  const page = useCurrentPage(1)
  // console.log(page)
  return (
    <>
      <div className="w-full h-full flex flex-col gap-2 overflow-hidden">
        <p className="font-semibold px-8 text-center tracking-tight text-slate-900 dark:text-slate-100 text-xl">
        </p>
        <div className="w-full h-full flex justify-center align-middle gap-2 ">
          <div className="flex-1 h-full">
            <div className="h-full w-full relative flex items-center justify-center">
              <video muted={false} playsInline loop autoPlay={true} className="absolute inset-0 h-full w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800">
                <source src="https://f005.backblazeb2.com/file/gesture/attentioncheck/attetioncheck_rightbetter.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex-1 h-full">
            <div className="h-full w-full relative flex items-center justify-center">
              <video muted={false} playsInline loop autoPlay={true} className="absolute inset-0 h-full  w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800">
                <source src="https://f005.backblazeb2.com/file/gesture/attentioncheck/attetioncheck_rightbetter.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <AttentionCheckBoard />
    </>
  )
}
