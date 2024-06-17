import React from "react"
import Sidebar from "./sidebar"

export default function Body({ children }) {
  return (
    <div className="mx-auto flex max-w-[90rem]">
      <div className="motion-reduce:transition-none [transition:background-color1.5sease] bg-transparent"></div>
      <div id="reach-skip-nav"></div>
      <article className="w-full break-words nextra-content flex min-h-[calc(100vh-var(--nextra-navbar-height))] min-w-0 justify-center pb-8 pr-[calc(env(safe-area-inset-right)-1.5rem)]">
        <main className="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
          {children}
        </main>
      </article>
    </div>
  )
}
