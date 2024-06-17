import React from "react"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"

export default function Alert() {
  return (
    <Popover className="relative">
      <PopoverButton>Solutions</PopoverButton>

      <PopoverPanel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
