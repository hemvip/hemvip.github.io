"use client"

import { Suspense, useState } from "react"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { HomePage } from "./HomePage"
import AttentionCheck from "@/components/attentioncheck/AttentionCheck"

export default function Home() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [state, setState] = useState("Attention Check")
  // const [state, setState] = useState("Start Study")
  const [loading, setLoading] = useState(false)

  function handleAttentionCheck() {
    setIsOpenDialog(true)
  }

  return (
    <Suspense fallback={<div></div>}>
      <main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
        <HomePage handleAttentionCheck={handleAttentionCheck} state={state} />
        <AttentionCheck
          isOpenDialog={isOpenDialog}
          setIsOpenDialog={setIsOpenDialog}
          setState={setState}
          setLoadingAttentionCheck={setLoading}
        />
        {loading && <LoadingSpin />}

      </main>
    </Suspense>
  )
}

// export const runtime = 'edge';
