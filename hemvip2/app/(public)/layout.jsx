"use client"

import { NavScreen } from "@/components/screen"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
	// config.name

	return (
		<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
			<div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
				{/* {overlay ? <LoadingSpin /> : <></>} */}
				<NavScreen name={"Pairwise Comparison of Gesture Generation Studies"} />
				{children}
			</div>
		</div>
	)
}
