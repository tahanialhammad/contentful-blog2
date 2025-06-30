export function generateSlug(item) {
  return item
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // verwijder speciale tekens
    .replace(/\s+/g, '-')     // vervang spaties met streepjes
}
