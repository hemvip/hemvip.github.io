"use client"

import { DEFAULT_ACTION_STRING, DEFAULT_OPTION } from "@/config/constants"
import { useActionRecorder } from "@/contexts/action-recorder"
import { useSelected } from "@/contexts/selected"
import React, { useState } from "react"
import cn from "clsx"

export function EvaluationBoard({ currentPage }) {
	const { addAction } = useActionRecorder()
	const { options, selectStudy } = useSelected()

	const handleClearlyLeft = () => {
		addAction(DEFAULT_ACTION_STRING.clickClearlyLeft, currentPage)
		selectStudy(DEFAULT_OPTION.clearlyLeft, currentPage)
	}

	const handleSlightlyLeft = () => {
		addAction(DEFAULT_ACTION_STRING.clickSlightlyLeft, currentPage)
		selectStudy(DEFAULT_OPTION.slightlyLeft, currentPage)
	}

	const handleEqual = () => {
		addAction(DEFAULT_ACTION_STRING.clickEqual, currentPage)
		selectStudy(DEFAULT_OPTION.equal, currentPage)
	}

	const handleSlightlyRight = () => {
		addAction(DEFAULT_ACTION_STRING.clickSlightlyRight, currentPage)
		selectStudy(DEFAULT_OPTION.slightlyRight, currentPage)
	}

	const handleClearlyRight = () => {
		addAction(DEFAULT_ACTION_STRING.clickClearlyRight, currentPage)
		selectStudy(DEFAULT_OPTION.clearlyRight, currentPage)
	}

	return (
		<div className="flex-col justify-between items-center">
			<div className="w-full justify-evenly mx-auto flex flex-row">
				<button
					className={cn(
						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 ",
						options[currentPage] === DEFAULT_OPTION.clearlyLeft ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
					)}
				>
					<div className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight" onClick={handleClearlyLeft}>
						Left clearly better
					</div>
				</button>

				<button
					className={cn(
						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300 ",
						options[currentPage] === DEFAULT_OPTION.slightlyLeft ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 hover:bg-neutral-200"
					)}
				>
					<div className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight" onClick={handleSlightlyLeft}>
						Left slightly better
					</div>
				</button>

				<button
					className={cn(
						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
						options[currentPage] === DEFAULT_OPTION.equal ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 hover:bg-neutral-200"
					)}
				>
					<div className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight" onClick={handleEqual}>
						They are equal
					</div>
				</button>

				<button
					className={cn(
						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
						options[currentPage] === DEFAULT_OPTION.slightlyRight ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 hover:bg-neutral-200"
					)}
				>
					<div className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight" onClick={handleSlightlyRight}>
						Right slightly better
					</div>
				</button>

				<button
					className={cn(
						"cursor-pointer select-none bg-neutral-100 rounded-lg min-w-[15%] flex justify-center align-middle shadow border border-zinc-300",
						options[currentPage] === DEFAULT_OPTION.clearlyRight ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 hover:bg-neutral-200"
					)}
				>
					<div className="sm:px-4 px-2 py-2 w-full justify-center items-center text-center text-current text-base font-bold leading-tight" onClick={handleClearlyRight}>
						Right clearly better
					</div>
				</button>
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
