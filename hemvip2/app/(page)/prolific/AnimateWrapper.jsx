"use client"

import { AnimatePresence } from "framer-motion"

export default function AnimateWrapper({ children, currentPage }) {
	return (
		<AnimatePresence initial={false} custom={currentPage}>
			{children}
		</AnimatePresence>
	)
}
