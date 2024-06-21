"use server"

import { studySchema } from "@/types/schema"
import { NextResponse } from "next/server"

export async function POST(request) {
  let serverErrors
  try {
    // Retrieve the JSON data from the request body
    const body = await request.json()

    // Use Zod to validate the received data against the UserSchema
    const result = studySchema.safeParse(body)

    // Check if the validation is successful
    if (result.success) {
      return NextResponse.json({ errors: null, success: true })
    }

    // If validation errors, map them into an object
    serverErrors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    )
  } catch (error) {}

  // Respond with a JSON object containing the validation errors
  return NextResponse.json({ errors: serverErrors, success: false })
}

export async function GET(request, response) {
  try {
    const client = await clientPromise
    const db = client.db("hemvip")

    const posts = await db.collection("config").find({}).toArray()

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "sapplication/json" },
    })
  }
}
