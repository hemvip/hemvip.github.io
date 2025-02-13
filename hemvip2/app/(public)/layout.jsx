"use client"

export default function Layout({ children }) {
	return (
		<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
			<div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">{children}</div>
		</div>
	)
}
