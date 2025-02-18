"use client"

import { usePreventUnload } from "@/contexts/beforeunload"
import { useEffect } from "react"

const useBeforeUnload = (message) => {
	const { canUnload } = usePreventUnload()

	useEffect(() => {
		console.log("canUnload", canUnload)
		if (canUnload) return // Allow navigation if unloading is allowed

		const handleBeforeUnload = (event) => {
			event.preventDefault()
			event.returnValue = message // Required for some browsers
			return message
		}

		window.addEventListener("beforeunload", handleBeforeUnload)
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload)
		}
	}, [canUnload, message]) // Re-run effect when `canUnload` changes
}

export { useBeforeUnload }
