"use client"

import { useUnload } from "@/contexts/beforeunload"
import { useEffect } from "react"

const useBeforeUnload = (message) => {
  const { canUnload } = useUnload()
  console.log("Go useBeforeUnload", message)
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      console.log("handleBeforeUnload.useBeforeUnload")
      event.returnValue = message
      return message
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [message])
}

export { useBeforeUnload }
