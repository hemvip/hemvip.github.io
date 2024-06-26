"use client"

import axios from "axios"
import { z } from "zod"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"
import Loading from "@/components/loading/loading"
import { Callout } from "@/components/core"
import LoadingSpin from "@/components/loading/LoadingSpin"
import { API_ENDPOINT } from "@/utils/urlEndpoint"
import { HomePage } from "./HomePage"



export default function Home() {
  // const searchParams = useSearchParams();
  // const PROLIFIC_PID = searchParams.get('PROLIFIC_PID');
  // const STUDY_ID = searchParams.get('STUDY_ID');
  // const SESSION_ID = searchParams.get('SESSION_ID');

  return (
    <Suspense fallback={<div></div>}>
      <main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
        <HomePage />
        {/* {loading && <LoadingSpin />} */}

      </main>
    </Suspense>
  )
}

// export const runtime = 'edge';
