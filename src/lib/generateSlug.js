export function generateSlug(item) {
  if (!item || typeof item !== "string") {
    return "";
  }
  return item
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // verwijder speciale tekens
    .replace(/\s+/g, '-')     // vervang spaties met streepjes
}
