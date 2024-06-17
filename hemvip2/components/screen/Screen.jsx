"use client"

import React, { useEffect, useState } from "react"
import { ScreenHeader } from "./ScreenHeader"
import { ScreenMain } from "./ScreenMain"
import { AnimatePresence, motion } from "framer-motion"
import { NavScreen, PopupDialog, PopupError, Progressbar } from "."
import { useExperimentConfig } from "@/contexts/experiment"
import { useScreenControl } from "@/contexts/screencontroll"
import StartupScreen from "./StartupScreen"
import FinishScreen from "./FinishScreen"
import useDebouncedCallback from "@/utils/hooks/use-bounded-callback"
import LoadingSpin from "../loading/LoadingSpin"
import { useStudy } from "@/contexts/study"
import { useActionRecorder } from "@/contexts/action-recorder"
import { finishStudy } from "@/app/prolific/actions"
import { useRouter } from "next/navigation"

export function Screen({ prolificid, studyid, sessionid }) {
  const router = useRouter()
  const config = useExperimentConfig()
  const { currentPage, isStartPage, isEndPage, setPrev, setNext } =
    useScreenControl()
  const { options, selectStudy } = useStudy()
  const { actions, screenActions } = useActionRecorder()

  const [overlay, setOverlay] = useState(false)
  const debouncedPrevPage = useDebouncedCallback(setPrev, 500, {
    leading: true,
  })
  const debouncedNextPage = useDebouncedCallback(setNext, 500, {
    leading: true,
  })

  let [isOpenDialog, setIsOpenDialog] = useState(false)
  function closeDialog() {
    setIsOpenDialog(false)
  }

  function openDialog() {
    setIsOpenDialog(true)
  }

  const handleFinish = async () => {
    setOverlay(true)
    // console.log("go handleFinish")
    const result = await finishStudy({
      prolificid: prolificid,
      studyid: studyid,
      sessionid: sessionid,
      actions: actions,
      screenActions: screenActions,
      studySelections: options,
      code: "CMTN9LUK",
    })
    setOverlay(false)
    if (result.success) {
      router.push("https://app.prolific.com/submissions/complete?cc=CMTN9LUK")
    } else {
      router.push("https://app.prolific.com/submissions/complete?cc=CPKBIM6L")
      console.log(result)
    }
  }

  // console.log(options)

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key)
      if (event.key === "ArrowLeft") {
        if (!isStartPage) {
          // setTimeout(() => {
          //   setPrev()
          // }, 500)
          debouncedPrevPage()
        }
      } else if (event.key === "ArrowRight") {
        if (!isEndPage) {
          debouncedNextPage()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [setPrev, setNext])

  if (!config) {
    return <></>
  }

  return (
    <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
      {overlay ? <LoadingSpin /> : <></>}
      <NavScreen name={config.name} />
      <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
        <Progressbar value={process} />
        <div className="flex flex-col w-full h-full gap-2">
          <ScreenHeader
            currentPage={currentPage}
            setPrev={setPrev}
            setNext={setNext}
          />

          <div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
            <div className="relative h-full w-full  flex justify-center align-middle">
              <AnimatePresence initial={false} custom={currentPage}>
                <motion.div
                  key={currentPage}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={currentPage}
                  variants={{
                    enter: (direction) => {
                      return {
                        x: direction > 0 ? "100%" : "-100%",
                        opacity: 0,
                      }
                    },
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (direction) => {
                      return {
                        x: direction > 0 ? "-100%" : "100%",
                        opacity: 0,
                      }
                    },
                  }}
                  transition={{
                    ease: "linear",
                    x: { type: "linear", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle"
                >
                  {isStartPage ? (
                    <StartupScreen />
                  ) : isEndPage ? (
                    <FinishScreen handleFinish={handleFinish} />
                  ) : (
                    <ScreenMain currentPage={currentPage} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <PopupDialog
          isOpen={isOpenDialog}
          onClose={closeDialog}
          autoCloseTime={50000}
        />
        <PopupError />
      </div>
    </div>
  )
}
