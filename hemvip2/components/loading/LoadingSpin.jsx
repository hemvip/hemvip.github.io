import React from "react"

export default function LoadingSpin() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			{/* <div className="w-16 h-16 border-4 border-white border-solid rounded-full animate-spin"> */}
			<svg className="animate-spin -ml-1 mr-3 w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
			{/* </div> */}
		</div>
	)
}
