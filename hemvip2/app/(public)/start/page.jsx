"use client"

import { Suspense } from "react"
import { StartPage } from "./StartPage"

export default function Page() {
	return (
		<Suspense>
			<StartPage />
		</Suspense>
	)
}
