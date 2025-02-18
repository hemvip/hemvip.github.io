"use client"

import React, { Component, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Callout } from "./core"

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false, errorMessage: "" }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught an error:", error.message)
		console.log("errorInfo", errorInfo)
		this.setState({ errorMessage: error.message })
	}

	render() {
		if (this.state.hasError) {
			return <ErrorFallback errorMessage={this.state.errorMessage} />
		}
		return this.props.children
	}
}

function ErrorFallback({ errorMessage }) {
	const router = useRouter()

	useEffect(() => {
		const timeout = setTimeout(() => {
			router.push("/")
		}, 5000)

		// Cleanup the timeout to avoid memory leaks
		return () => clearTimeout(timeout)
	}, [router])

	return (
		<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
			<div className="inset-0 h-screen flex items-center justify-center mx-auto">
				<Callout type="error" className="min-w-[500px]">
					<h2 className="text-xl font-bold">Unknown Error</h2>
					<div className="container py-2">
						<p className="mb-4">
							Redirecting to the{" "}
							<a className="text-blue-500 underline" href="/">
								homepage
							</a>{" "}
							in 5 seconds...
						</p>
						<p className="text-sm">{errorMessage}</p>
					</div>
				</Callout>
			</div>
		</div>
	)
}

export default ErrorBoundary
