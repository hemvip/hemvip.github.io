// app/api/experiment/route.js

import clientPromise from "@/server/mongodb"

export async function GET() {
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
      headers: { "Content-Type": "application/json" },
    })
  }
}
