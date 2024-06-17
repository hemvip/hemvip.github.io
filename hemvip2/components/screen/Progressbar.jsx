"use client"

import { useExperimentConfig } from "@/contexts/experiment"
import { useScreenControl } from "@/contexts/screencontroll"
import React from "react"

export function Progressbar({ value = 0 }) {
  const config = useExperimentConfig()
  // const totalPages = config.pages.length
  // const { currentPage, setNext, setPrev } = useScreenControl()
  const { progress } = useScreenControl()
  // console.log("currentPage", currentPage)

  // const process = (currentPage / config.pages.length) * 100

  return (
    <>
      {/* <div
        id="page_progressbar"
        className="ui-tolito-progressbar ui-tolito-progressbar-outer-a ui-tolito-progressbar-corner-all ui-tolito-progressbar-mini"
        role="progressbar"
        style={{
          minValue: 0,
          maxValue: 100,
          contentValue: '33.33333333333333',
        }}
      >
        <div
          className="ui-tolito-progressbar-bg ui-tolito-progressbar-active-b ui-tolito-progressbar-corner-all"
          style={{ width: '33.3333%' }}
        ></div>
      </div>

      */}
      <div className="h-2 sm:h-3 md:w-1/3 w-1/2 flex flex-start bg-blue-gray-50 overflow-hidden mx-auto border border-black font-sans rounded-full text-xs font-medium">
        <div
          className="flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gray-900 "
          style={{ width: progress + "%" }}
        ></div>
      </div>
      {/* <div className="w-[32em] h-[1em]  mx-auto bg-white rounded-2xl border border-black" /> */}
    </>
  )
}
