"use server"

import { createClient } from "@/utils/supabase/server"
// import { redirect } from "next/router";
import { redirect } from "next/navigation"

export const signOut = async (e) => {
  const supabase = createClient()
  await supabase.auth.signOut()
  return redirect("/login")
}
