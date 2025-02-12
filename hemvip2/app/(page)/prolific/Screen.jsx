"use client"

export default function Screen() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			transition={{ duration: 0.5 }}
			style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}
		>
			<h1>Page {id}</h1>
			<p>This is page {id}.</p>
			<p>Param: {param}</p>
			<p>Current Theme: {theme}</p>
		</motion.div>
	)
}
