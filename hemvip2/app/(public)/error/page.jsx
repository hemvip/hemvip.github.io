"use client"

import { Callout } from "@/components/core"
import { Suspense } from "react"

export default function Page() {
	return (
		<Suspense fallback={<div></div>}>
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
					<div className="h-screen inset-0 flex items-center justify-center z-50">
						<Callout type="error" className="min-w-96">
							<p className="leading-7 first:mt-0">Your study have failed,</p>
							Please visit{" "}
							<a
								className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
								href="https://www.prolific.com/"
							>
								Prolific
							</a>{" "}
							to start study again.
						</Callout>
					</div>
				</div>
			</div>
		</Suspense>
	)
}
