"use client"
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  TransitionChild,
  Transition,
} from "@headlessui/react"
import React, { Fragment, useEffect, useState } from "react"
import cn from "clsx"


export function PopupDialog({ isOpen, message, closePopup, autoCloseTime }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closePopup()
      }, autoCloseTime)

      return () => clearTimeout(timer)
    }
  }, [isOpen, closePopup, autoCloseTime])

  if (!isOpen) return null

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closePopup}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className={cn(
                    "w-full max-w-md transform overflow-hidden rounded-md p-3 text-left align-middle shadow-xl transition-all",
                    // "border-red-200 bg-red-100 text-red-900 border-red-200/30 shadow-lg",
                    "bg-[rgb(255,247,204)]",
                    // "dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200",
                    "fixed right-6 top-6",
                    "select-none"
                  )}
                >

                  <div className="text-sm overflow-x-auto flex justify-center items-center gap-2 py-2 ltr:pr-4 rtl:pl-4">
                    <div className="select-none text-base">
                      {/* 🚫 */}
                      <span className="bg-[rgb(158,79,0)] p-1 flex rounded-full select-none justify-center">
                        {/* <svg viewBox="172 171 683 683" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 text-white">
                          <path fill="currentColor" d="M512.5,587.5L262.5,838C252.167,848.333 239.5,853.5 224.5,853.5C209.5,853.5 196.917,848.417 186.75,838.25C176.583,828.083 171.5,815.5 171.5,800.5C171.5,785.5 176.667,772.833 187,762.5L437,512L187,262C176.667,251.667 171.5,239.167 171.5,224.5C171.5,217.167 172.833,210.167 175.5,203.5C178.167,196.833 181.917,191.167 186.75,186.5C191.583,181.833 197.167,178.083 203.5,175.25C209.833,172.417 216.833,171 224.5,171C239.167,171 251.667,176.167 262,186.5L512.5,437L762.5,186.5C773.167,175.833 785.833,170.5 800.5,170.5C807.833,170.5 814.75,171.917 821.25,174.75C827.75,177.583 833.417,181.417 838.25,186.25C843.083,191.083 846.833,196.75 849.5,203.25C852.167,209.75 853.5,216.667 853.5,224C853.5,238.667 848.333,251.167 838,261.5L587.5,512L838,762.5C848.667,773.167 854,785.833 854,800.5C854,807.833 852.583,814.667 849.75,821C846.917,827.333 843.083,832.917 838.25,837.75C833.417,842.583 827.75,846.417 821.25,849.25C814.75,852.083 807.833,853.5 800.5,853.5C785.5,853.5 772.833,848.333 762.5,838Z">
                          </path>
                        </svg> */}
                        <svg viewBox="406 86 213 875" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 text-white">
                          <path fill="currentColor"
                            d="M426.5,512L426.5,170.5C426.5,158.833 428.75,147.833 433.25,137.5C437.75,127.167 443.917,118.167 451.75,110.5C459.583,102.833 468.667,96.75 479,92.25C489.333,87.75 500.333,85.5 512,85.5C523.667,85.5 534.667,87.75 545,92.25C555.333,96.75 564.417,102.833 572.25,110.5C580.083,118.167 586.25,127.167 590.75,137.5C595.25,147.833 597.5,158.833 597.5,170.5L597.5,512C597.5,523.667 595.25,534.667 590.75,545C586.25,555.333 580.083,564.417 572.25,572.25C564.417,580.083 555.333,586.25 545,590.75C534.667,595.25 523.667,597.5 512,597.5C500.333,597.5 489.333,595.25 479,590.75C468.667,586.25 459.583,580.083 451.75,572.25C443.917,564.417 437.75,555.333 433.25,545C428.75,534.667 426.5,523.667 426.5,512ZM405.5,853.5C405.5,838.833 408.333,825 414,812C419.667,799 427.333,787.667 437,778C446.667,768.333 457.917,760.667 470.75,755C483.583,749.333 497.333,746.5 512,746.5C526.667,746.5 540.417,749.333 553.25,755C566.083,760.667 577.333,768.333 587,778C596.667,787.667 604.333,799 610,812C615.667,825 618.5,838.833 618.5,853.5C618.5,868.167 615.667,881.917 610,894.75C604.333,907.583 596.667,918.833 587,928.5C577.333,938.167 566,945.833 553,951.5C540,957.167 526.333,960 512,960C497.333,960 483.583,957.167 470.75,951.5C457.917,945.833 446.667,938.167 437,928.5C427.333,918.833 419.667,907.583 414,894.75C408.333,881.917 405.5,868.167 405.5,853.5Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="">
                      <span className="font-bold">Warning:</span>
                    </div>
                    <div className="w-full min-w-0 leading-7">
                      <p className="">
                        {message}
                      </p>
                    </div>
                    <div className="cursor-pointer p-2 pr-0" onClick={closePopup}>
                      <span className="">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1024 1024" className="h-3 w-3"><path fill="currentColor" d="M512,584.5L87.5,1009C77.5,1019 65.5,1024 51.5,1024C36.8333,1024 24.5833,1019.08 14.75,1009.25C4.91667,999.417 0,987.167 0,972.5C0,958.5 5,946.5 15,936.5L439.5,512L15,87.5C5,77.5 0,65.3334 0,51C0,44 1.33333,37.3334 4,31C6.66667,24.6667 10.3333,19.25 15,14.75C19.6667,10.25 25.1667,6.66669 31.5,4C37.8333,1.33337 44.5,0 51.5,0C65.5,0 77.5,5 87.5,15L512,439.5L936.5,15C946.5,5 958.667,0 973,0C980,0 986.583,1.33337 992.75,4C998.917,6.66669 1004.33,10.3334 1009,15C1013.67,19.6667 1017.33,25.0834 1020,31.25C1022.67,37.4167 1024,44 1024,51C1024,65.3334 1019,77.5 1009,87.5L584.5,512L1009,936.5C1019,946.5 1024,958.5 1024,972.5C1024,979.5 1022.67,986.167 1020,992.5C1017.33,998.833 1013.75,1004.33 1009.25,1009C1004.75,1013.67 999.333,1017.33 993,1020C986.667,1022.67 980,1024 973,1024C958.667,1024 946.5,1019 936.5,1009Z"></path></svg>
                      </span>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 animate-loading"
                    style={{ animationDuration: "1s" }} // Adjust animation duration here
                  />


                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
