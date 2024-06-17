export function generateSessionId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  let sessionId = ""
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    sessionId += chars[randomIndex]
  }
  return sessionId
}
