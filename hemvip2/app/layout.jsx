import ErrorBoundary from "@/components/ErrorBoundary"
import "./globals.css"
// import "../styles/custom.css"

export const metadata = {
	title: "HEMVIP2 - Pairwise Comparison of Gesture Generation Studies",
	description: "Pairwise Comparison of Gesture Generation Studies",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning dir="ltr">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico"></link>
				<meta name="description" content="Pairwise Comparison of Gesture Generation Studies" />
				<meta name="author" content="GENEA" />
				<title>HEMVIP2 - Pairwise Comparison of Gesture Generation Studies</title>
			</head>
			<body>
				<ErrorBoundary>{children}</ErrorBoundary>
			</body>
		</html>
	)
}
