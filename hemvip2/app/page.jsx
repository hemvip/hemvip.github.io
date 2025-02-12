"use client"

import { HomePage } from "./HomePage"
import { useSearchParams } from "next/navigation"
// import AttentionCheck from "@/components/attentioncheck/AttentionCheck"

export default function Home() {
	// const [isOpenDialog, setIsOpenDialog] = useState(false)
	// const [state, setState] = useState("Attention Check")
	// const [state, setState] = useState("Start Study")
	const searchParams = useSearchParams()
	const prolificid = searchParams.get("PROLIFIC_PID")
	const studyid = searchParams.get("STUDY_ID")
	const sessionid = searchParams.get("SESSION_ID")

	return (
		<main className="flex w-full flex-col items-center justify-between p-2 md:px-24">
			<div className="w-full px-[7%] gap-2 py-2 flex flex-col">
				<div className="flex flex-col w-full h-full gap-2">
					<div className="lg:px-8 px-0 overflow-y-auto">
						<h1 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Pairwise Comparison of Gesture Generation AI Model Studies</h1>

						<HomePage prolificid={prolificid} studyid={studyid} sessionid={sessionid} />
						{/* <AttentionCheck
          isOpenDialog={isOpenDialog}
          setIsOpenDialog={setIsOpenDialog}
          setState={setState}
          setLoadingAttentionCheck={setLoading}
        /> */}
						{/* {loading && <LoadingSpin />} */}
					</div>
				</div>
			</div>
		</main>
	)
}
