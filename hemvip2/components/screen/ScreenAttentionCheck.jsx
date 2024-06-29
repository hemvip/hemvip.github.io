import React from "react"

export default function ScreenAttentionCheck() {
  return (
    <>
    <div className="w-full h-full flex flex-col gap-2 overflow-hidden">
      <p className="font-semibold px-8 text-center tracking-tight text-slate-900 dark:text-slate-100 text-xl">
      </p>
    <div className="w-full h-full flex justify-center align-middle gap-2 ">
      <div className="flex-1 h-full">
      <div className="h-full w-full relative flex items-center justify-center">
      <video playsinline="" loop="" controls="" className="absolute inset-0 h-full w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800">
      <source src="https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4" type="video/mp4"/>
    </video>
    </div>
    </div>
    <div className="flex-1 h-full">
      <div className="h-full w-full relative flex items-center justify-center">
      <video playsinline="" loop="" controls="" className="absolute inset-0 h-full  w-full object-contain sm:rounded-xl sm:border dark:border-zinc-800">
      <source src="https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4" type="video/mp4"/>
    </video>
    </div>
    </div>
    </div>
    </div>
    <div className="flex-col justify-between items-center">
      <div className="w-full justify-evenly mx-auto flex flex-row">
      <div className="rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300  bg-neutral-100 hover:bg-neutral-200">
      <button className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-zinc-800 text-base font-bold leading-tight">Left Better</button>
    </div>
    <div className="rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 bg-neutral-100 hover:bg-neutral-200">
      <button className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-zinc-800 text-base font-bold leading-tight">Equal</button>
    </div>
    <div className="rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 bg-neutral-100 hover:bg-neutral-200">
      <button className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-zinc-800 text-base font-bold leading-tight">Right Better</button>
    </div>
    </div>
    </div>
    </>
  )
}
