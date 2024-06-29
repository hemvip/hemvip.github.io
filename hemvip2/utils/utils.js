export function generateSessionId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  let sessionId = ""
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    sessionId += chars[randomIndex]
  }
  return sessionId
}

// "Hello, World! 123" -> "Hello World"
export function normalizeCharacters(input) {
  // Define the regular expression to match all non-alphabetic characters except spaces
  const regex = /[^a-zA-Z\s]/g;

  // Replace all non-alphabetic characters except spaces with an empty string
  const result = input.replace(regex, '');

  return result;
}