"use client"

import { Suspense, useEffect, useState } from "react"
import { Prolific } from "./Prolific";

export default function Page() {




  return (
    <Suspense fallback={<div></div>}>
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <Callout type='error'>
              <p className="leading-7 first:mt-0">
                Your account prolific, study or session is not exist or expired.
              </p>
              Please visit{" "}
              <a
                className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
                href="https://www.prolific.com/"
              >
                Prolific
              </a>{" "}
              to get access again
            </Callout>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
