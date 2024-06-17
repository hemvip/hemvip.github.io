import "./globals.css"
import "../styles/custom.css"
import { Router } from "next/navigation"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "HEMVIP2 - Pairwise Comparison of Gesture Generation AI Model Studies",
  description: "Pairwise Comparison of Gesture Generation AI Model Studies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Pairwise Comparison of Gesture Generation AI Model Studies"
        />
        <meta name="author" content="GENEA" />
        <title>
          HEMVIP2 - Pairwise Comparison of Gesture Generation AI Model Studies
        </title>
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
