// context/UnloadContext.js
import { createContext, useState, useEffect, useContext } from "react"

// Create a context
const UnloadContext = createContext({ canUnload: false, setCanUnload: () => {} })

// Create a provider component
export const UnloadProvider = ({ children }) => {
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

	return <UnloadContext.Provider value={{ canUnload, setCanUnload }}>{children}</UnloadContext.Provider>
}

// Custom hook for using the context
export const useUnload = () => useContext(UnloadContext)
