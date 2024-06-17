import React from "react"

export function ScreenMessage({ text }) {
  return (
    <p className="font-semibold px-8 text-center tracking-tight text-slate-900 dark:text-slate-100 text-xl">
      {text}
    </p>
  )
}
