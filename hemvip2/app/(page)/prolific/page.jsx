"use client"

import { useRouter, useSearchParams } from "next/navigation"
import AnimateWrapper from "./AnimateWrapper"
import { Suspense } from "react"

export default function Page() {
	// const searchParams = useSearchParams()
	// const router = useRouter()

	// const id = searchParams.get("id") || "1" // Default to "1" if `id` is not provided
	// const param = searchParams.get("param") || "default" // Default to "default" if `param` is not provided

	// const handleNextPage = () => {
	// 	router.push(`/page?id=${Number(id) + 1}&param=${param}`)
	// }

	// const handlePreviousPage = () => {
	// 	router.push(`/page?id=${Number(id) - 1}&param=${param}`)
	// }

	return (
		<Suspense fallback={<div>Loading...</div>}>
			{/* <AnimateWrapper currentPage={id}>
				<Page key={id} id={id} param={param} className="w-full h-screen bg-gray-200 p-4" />
				<button onClick={handleNextPage}>Next Page</button>
				<button onClick={handlePreviousPage}>Previous Page</button>
			</AnimateWrapper> */}
			hello
		</Suspense>
	)
}
