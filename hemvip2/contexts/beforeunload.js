// context/UnloadContext.js
import { createContext, useState, useEffect, useContext } from "react"

// Create a context
const PreventUnloadContext = createContext({ canUnload: false, setCanUnload: () => {} })

// Create a provider component
export const PreventUnloadProvider = ({ children }) => {
	const [canUnload, setCanUnload] = useState(true)

	useEffect(() => {
		const handleBeforeUnload = (e) => {
			if (!canUnload) {
				const message = "Are you sure you want to leave?"
				e.returnValue = message // Standard for most browsers
				return message // For some older browsers
			}
		}

		window.addEventListener("beforeunload", handleBeforeUnload)

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload)
		}
	}, [canUnload])

	return <PreventUnloadContext.Provider value={{ canUnload, setCanUnload }}>{children}</PreventUnloadContext.Provider>
}

// Custom hook for using the context
export const usePreventUnload = () => useContext(PreventUnloadContext)
