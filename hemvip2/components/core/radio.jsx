import React from "react"

export default function RadioButton({ value = "1", option = "Option 1" }) {
  return (
    // <label class="inline-flex items-center text-primary font-text text-body font-normal leading-5 min-h-8 select-none">
    //   <input
    //     type="radio"
    //     class="peer-checked:bg-fds-accent-default peer-checked:border-none inline-flex items-center appearance-none bg-secondary h-5 w-5 border border-strong rounded-full font-text text-body font-normal justify-center leading-5 m-0 outline-none relative select-none"
    //     value={value}
    //   />{" "}
    //   <span class="pl-2">{option}</span>
    // </label>
    <>
      <div class="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-radio-1"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Default radio
        </label>
      </div>
      <div class="flex items-center">
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-radio-2"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
    </>
  )
}
