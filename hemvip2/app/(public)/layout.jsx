"use client"

import { NavScreen } from "@/components/screen"
import { StudyConfig } from "./StudyConfig"

export default function Layout({ children }) {
	return (
		<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
			<div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
				<StudyConfig>
					<NavScreen />
					{children}
				</StudyConfig>
			</div>
		</div>
	)
}
