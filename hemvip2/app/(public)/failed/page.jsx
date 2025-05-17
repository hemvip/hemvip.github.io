"use client"

import { Callout } from "@/components/core"
import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

function FailedContent() {
	const [reason, setReason] = useState("unknown_reason")
	const searchParams = useSearchParams()

	useEffect(() => {
		setReason(searchParams?.get("reason") || "unknown_reason")
		localStorage.removeItem("hemvip-pages")
		localStorage.removeItem("hemvip-study")
	}, [searchParams])

	// Add spaces and capitalize first letter
	const formatReason = (reasonCode) => {
		const withSpaces = reasonCode.replace(/_/g, ' ')
		const formatted = withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1)
		return `${formatted}.`
	}

	return (
		<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<div className="h-screen inset-0 flex items-center justify-center z-50">
					<Callout type="warning" className="min-w-96">
						<div className="flex gap-2 flex-col ">
							<h2 className="text-xl font-semibold">Study Failed</h2>
							<p className="leading-7 first:mt-0">Your study is incomplete because of: {formatReason(reason)}</p>
							<div className="">
								Visit{" "}
								<a
									className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
									href="https://www.prolific.com/"
								>
									Prolific
								</a>{" "}
								to start new study.
							</div>
						</div>
					</Callout>
				</div>
			</div>
		</div>
	)
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FailedContent />
    </Suspense>
  )
}