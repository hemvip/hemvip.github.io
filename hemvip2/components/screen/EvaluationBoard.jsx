"use client"

import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useStudy } from "@/contexts/study"
import React, { useState } from "react"
import cn from "clsx"

export function EvaluationBoard({ currentPage }) {
  const { addAction } = useActionRecorder()
  const { options, selectStudy } = useStudy()

  const handleLeft = () => {
    addAction(DEFAULT_ACTION_STRING.clickLeft, currentPage)
    selectStudy(DEFAULT_OPTION.left, currentPage)
  }

  const handleEqual = () => {
    addAction(DEFAULT_ACTION_STRING.clickEqual, currentPage)
    selectStudy(DEFAULT_OPTION.equal, currentPage)
  }

  const handleRight = () => {
    addAction(DEFAULT_ACTION_STRING.clickRight, currentPage)
    selectStudy(DEFAULT_OPTION.right, currentPage)
  }

  return (
    <div className="flex-col justify-between items-center">
      <div className="w-full justify-evenly mx-auto flex flex-row">
        <div
          className={cn(
            "bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 ",
            options[currentPage] === DEFAULT_OPTION.left
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 hover:bg-neutral-200"
          )}
        >
          <button
            className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-zinc-800 text-base font-bold leading-tight"
            onClick={handleLeft}
          >
            Left Better
          </button>
        </div>
        <div
          className={cn(
            "bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
            options[currentPage] === DEFAULT_OPTION.equal
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 hover:bg-neutral-200"
          )}
        >
          <button
            className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-zinc-800 text-base font-bold leading-tight"
            onClick={handleEqual}
          >
            Equal
          </button>
        </div>
        <div
          className={cn(
            "bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
            options[currentPage] === DEFAULT_OPTION.right
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 hover:bg-neutral-200"
          )}
        >
          <button
            className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-zinc-800 text-base font-bold leading-tight"
            onClick={handleRight}
          >
            Right Better
          </button>
        </div>
      </div>
    </div>
  )
}

// <div id="tr_ConditionRatings">
//   <div id="refCanvas"></div>
//   <div id="spaceForScale"></div>
//   <div className="spaceForSlider">
//     <span>
//       <div className="ui-slider" style={{ marginBottom: '280px' }}>
//         <div
//           role="application"
//           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
//           style={{
//             width: '20px !important',
//             margin: '0px auto 20px !important',
//             height: '250px !important',
//             zIndex: 1,
//           }}
//           aria-disabled="true"
//         >
//           <div
//             className="ui-slider-bg ui-btn-active"
//             style={{ marginTop: '0px', height: '250px' }}
//           ></div>
//           <a
//             href="#"
//             className="ui-slider-handle ui-btn ui-shadow"
//             role="slider"
//             aria-valuemin="-100"
//             aria-valuemax="0"
//             aria-valuenow="100"
//             aria-valuetext="100"
//             title="100"
//             aria-labelledby="undefined-label"
//             style={{ top: '0%', marginLeft: '-5px' }}
//           ></a>
//         </div>
//         <input
//           type="number"
//           data-type="range"
//           name="reference"
//           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
//           value="100"
//           min="0"
//           max="100"
//           data-vertical="true"
//           data-highlight="true"
//           styles={{ display: 'inline-block', float: 'none' }}
//           disabled=""
//         />
//       </div>
//     </span>
//   </div>
//   <div className="spaceForSlider">
//     <span>
//       <div className="ui-slider" styles={{ marginBottom: '280px' }}>
//         <div
//           role="application"
//           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
//           styles={{
//             width: '20px !important',
//             margin: '0px auto 20px !important',
//             height: '250px !important',
//             zIndex: 1,
//           }}
//           aria-disabled="true"
//         >
//           <div
//             className="ui-slider-bg ui-btn-active"
//             styles={{ marginTop: '0px', height: '250px' }}
//           ></div>
//           <a
//             href="#"
//             className="ui-slider-handle ui-btn ui-shadow"
//             role="slider"
//             aria-valuemin="-100"
//             aria-valuemax="0"
//             aria-valuenow="100"
//             aria-valuetext="100"
//             title="100"
//             aria-labelledby="undefined-label"
//             styles={{ top: '0%', marginLeft: '-5px' }}
//           ></a>
//         </div>
//         <input
//           type="number"
//           data-type="range"
//           name="C1"
//           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
//           value="100"
//           min="0"
//           max="100"
//           data-vertical="true"
//           data-highlight="true"
//           styles={{ display: 'inline-block', float: 'none' }}
//           disabled=""
//         />
//       </div>
//     </span>
//   </div>
//   <div className="spaceForSlider">
//     <span>
//       <div className="ui-slider" styles={{ marginBottom: '280px' }}>
//         <div
//           role="application"
//           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
//           styles={{
//             width: '20px !important',
//             margin: '0px auto 20px !important',
//             height: '250px !important',
//             zIndex: 1,
//           }}
//           aria-disabled="true"
//         >
//           <div
//             className="ui-slider-bg ui-btn-active"
//             styles={{ marginTop: '0px', height: '250px' }}
//           ></div>
//           <a
//             href="#"
//             className="ui-slider-handle ui-btn ui-shadow"
//             role="slider"
//             aria-valuemin="-100"
//             aria-valuemax="0"
//             aria-valuenow="100"
//             aria-valuetext="100"
//             title="100"
//             aria-labelledby="undefined-label"
//             styles={{ top: '0%', marginLeft: '-5px' }}
//           ></a>
//         </div>
//         <input
//           type="number"
//           data-type="range"
//           name="C2"
//           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
//           value="100"
//           min="0"
//           max="100"
//           data-vertical="true"
//           data-highlight="true"
//           styles={{ display: 'inline-block', float: 'none' }}
//           disabled=""
//         />
//       </div>
//     </span>
//   </div>
//   <div className="spaceForSlider">
//     <span>
//       <div className="ui-slider" styles={{ marginBottom: '280px' }}>
//         <div
//           role="application"
//           className="ui-slider-track ui-shadow-inset ui-bar-inherit ui-corner-all ui-state-disabled"
//           styles={{
//             width: '20px !important',
//             margin: '0px auto 20px !important',
//             height: '250px !important',
//             zIndex: 1,
//           }}
//           aria-disabled="true"
//         >
//           <div
//             className="ui-slider-bg ui-btn-active"
//             styles={{ marginTop: '0px', height: '250px' }}
//           ></div>
//           <a
//             href="#"
//             className="ui-slider-handle ui-btn ui-shadow"
//             role="slider"
//             aria-valuemin="-100"
//             aria-valuemax="0"
//             aria-valuenow="100"
//             aria-valuetext="100"
//             title="100"
//             aria-labelledby="undefined-label"
//             styles={{ top: '0%', marginLeft: '-5px' }}
//           ></a>
//         </div>
//         <input
//           type="number"
//           data-type="range"
//           name="C3"
//           className="scales ui-shadow-inset ui-body-inherit ui-corner-all ui-slider-input ui-state-disabled mobile-slider-disabled"
//           value="100"
//           min="0"
//           max="100"
//           data-vertical="true"
//           data-highlight="true"
//           styles={{ display: 'inline-block', float: 'none' }}
//           disabled=""
//         />
//       </div>
//     </span>
//   </div>
// </div>
