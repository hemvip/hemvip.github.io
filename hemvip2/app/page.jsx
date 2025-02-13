"use client"

import { Suspense } from "react"
import { HomePage } from "./HomePage"
// import AttentionCheck from "@/components/attentioncheck/AttentionCheck"

export default function Home() {
	// const [isOpenDialog, setIsOpenDialog] = useState(false)
	// const [state, setState] = useState("Attention Check")
	// const [state, setState] = useState("Start Study")

	return (
		<Suspense>
			<main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
				<div className="w-full px-[10%] gap-2 py-2 flex flex-col">
					<div className="lg:px-8 px-0 overflow-y-auto flex flex-col min-h-96">
						<h1 className="text-center mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
							Pairwise Comparison of Gesture Generation Studies
						</h1>

						<HomePage />
						{/* <AttentionCheck
          isOpenDialog={isOpenDialog}
          setIsOpenDialog={setIsOpenDialog}
          setState={setState}
          setLoadingAttentionCheck={setLoading}
        /> */}
						{/* {loading && <LoadingSpin />} */}
					</div>
				</div>
			</main>
		</Suspense>
	)
}
