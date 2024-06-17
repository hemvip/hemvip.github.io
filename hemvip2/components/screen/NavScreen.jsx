import React from "react"

export function NavScreen({ name = "webMUSHRA Example" }) {
  return (
    // <div className="header" id="header" >
    //     webMUSHRA Example
    // </div>
    <div className="w-full p-3 bg-gradient-to-b from-neutral-700 to-neutral-900 border border-zinc-800">
      <h1 className="w-full justify-center text-center text-white text-xl font-bold leading-6">
        {name}
      </h1>
    </div>
  )
}
