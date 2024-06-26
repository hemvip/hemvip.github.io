"use client"

import { Suspense, useState } from "react"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { HomePage } from "./HomePage"
import AttentionCheck from "./AttentionCheck2"

export default function Home() {
  // const searchParams = useSearchParams();
  // const PROLIFIC_PID = searchParams.get('PROLIFIC_PID');
  // const STUDY_ID = searchParams.get('STUDY_ID');
  // const SESSION_ID = searchParams.get('SESSION_ID');

  return (
    <Suspense fallback={<div></div>}>
      <main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
        {/* <HomePage /> */}
        <AttentionCheck />
        {/* {loading && <LoadingSpin />} */}

      </main>
    </Suspense>
  )
}

// export const runtime = 'edge';
