"use client"

import { Suspense, useState } from "react"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { HomePage } from "./HomePage"
// import AttentionCheck from "./AttentionCheck"
import Alert from "@/components/alert/Alert"
import { PopupDialog } from "@/components/screen"
import AttentionCheck from "@/components/attentioncheck/AttentionCheck"

export default function Home() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [state, setState] = useState("Attention Check")
  // const searchParams = useSearchParams();
  // const PROLIFIC_PID = searchParams.get('PROLIFIC_PID');
  // const STUDY_ID = searchParams.get('STUDY_ID');
  // const SESSION_ID = searchParams.get('SESSION_ID');

  function closeDialog() {
    setIsOpenDialog(false)
  }

  function handleAttentionCheck() {
    setIsOpenDialog(true)
  }

  function finishAttentionCheck() {
    setState("Start Study")
    setIsOpenDialog(false)
  }

  return (
    <Suspense fallback={<div></div>}>
      <main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
        <HomePage handleAttentionCheck={handleAttentionCheck} state={state} />
        <AttentionCheck
          isOpen={isOpenDialog}
          onClose={closeDialog}
          onFinish={finishAttentionCheck}
        />
        {/* <PopupDialog
          isOpen={isOpenDialog}
          onClose={closeDialog}
          autoCloseTime={50000}
        /> */}
        {/* {loading && <LoadingSpin />} */}

      </main>
    </Suspense>
  )
}

// export const runtime = 'edge';
