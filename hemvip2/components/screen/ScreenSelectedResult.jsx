import { DEFAULT_OPTION } from "@/config/constants"
import React from "react"

const { unselect, ...selectedOptions } = DEFAULT_OPTION
// DEFAULT_OPTION.left
export default function ScreenSelectedResult({ selected, pageid }) {
  console.log(selected)
  // console.log(selectedOptions)
  return (
    <div className="flex flex-row gap-4 mt-3 w-full">
      {Object.entries(selectedOptions).map(([key, option]) => {
        return (
          <div className="flex items-center" key={key}>
            <input
              checked={selected === option}
              disabled={selected !== option}
              id={key}
              onChange={() => {}}
              type="radio"
              value=""
              name={key + "_" + pageid}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={key}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {option}
            </label>
          </div>
        )
      })}
    </div>
  )
}
