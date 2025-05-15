import React from "react"
import clsx from 'clsx'; // If you're using Tailwind with clsx or classnames

export function ScreenMessage({ text, className = "" }) {
	return <p className={clsx("font-bold px-8 text-center tracking-tight", className)}>{text}</p>
}