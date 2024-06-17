import { useActionRecorder } from "@/contexts/action-recorder"
import { useStudy } from "@/contexts/study"
import React from "react"
import cn from "clsx"
import ScreenSelectedResult from "./ScreenSelectedResult"
import { usePages } from "@/contexts/experiment"

export default function FinishScreen({ handleFinish }) {
  const pages = usePages()

  const { options } = useStudy()

  return (
    <div className="px-8 overflow-y-auto">
      <div className="max-w-[52rem] mx-auto">
        <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">
          Your Selection Result
        </h2>
        {/* <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl"></h3>
        <p className="mt-3 leading-6 first:mt-0">Please submit to finish</p>

        <p className="mt-3 leading-6 first:mt-0">
          Gesture Generation is the process of generating gestures from speech
          or text. The goal of Gesture Generation is to generate gestures that
          are natural, realistic, and appropriate for the given context. The
          generated gestures can be used to animate virtual characters, robots,
          or embodied conversational agents.
        </p> */}
        <div
          className={cn(
            "-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ",
            "mask-gradient"
          )}
        >
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b py-4 text-left dark:border-neutral-700">
                <th className="px-6 py-2 font-semibold text-center "># Page</th>
                <th className="px-6 py-2 font-semibold">Question</th>
                <th className=" py-2 font-semibold">Your Selection</th>
              </tr>
            </thead>
            <tbody className="align-baseline text-gray-900 dark:text-gray-100">
              {Object.entries(options).map(([pageid, selected], index) => {
                return (
                  <tr
                    className="border-b border-gray-100 text-center dark:border-neutral-700/50"
                    key={index}
                  >
                    <td className=" py-2 ">{pageid}</td>
                    <td className=" py-2 ">
                      {JSON.stringify(pages[pageid].content)}
                    </td>
                    <td className="py-2">
                      <ScreenSelectedResult
                        selected={selected}
                        pageid={pageid}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {/* <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl"></h3> */}
        {/* <p className="mt-3 leading-6 first:mt-0">
          Gesture Generation is the process of generating gestures from speech
          or text. The goal of Gesture Generation is to generate gestures that
          are natural, realistic, and appropriate for the given context. The
          generated gestures can be used to animate virtual characters, robots,
          or embodied conversational agents.
        </p>
        <p className="mt-3 leading-6 first:mt-0">
          Gesture Generation is the process of generating gestures from speech
          or text. The goal of Gesture Generation is to generate gestures that
          are natural, realistic, and appropriate for the given context. The
          generated gestures can be used to animate virtual characters, robots,
          or embodied conversational agents.
        </p> */}
        <div className="mt-3 w-full mx-auto flex justify-center">
          <button
            type="submit"
            onClick={handleFinish}
            aria-disabled="false"
            className="flex min-w-48 h-10 px-4 font-bold text-white leading-1 bg-green-500 dark:border-neutral-800 items-center justify-center rounded-md border transition-all focus:outline-none"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  )
}
