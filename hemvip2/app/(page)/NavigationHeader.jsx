"use client"

import { useRouter } from "next/navigation"

export default function NavigationHeader() {
	const router = useRouter()

	return (
		<nav>
			<button onClick={() => router.push("/page?id=1&param=abc")}>Page 1</button>
			<button onClick={() => router.push("/page?id=2&param=abc")}>Page 2</button>
		</nav>
	)
}
