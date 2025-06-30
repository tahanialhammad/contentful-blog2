export function generateSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // verwijder speciale tekens
    .replace(/\s+/g, '-')     // vervang spaties met streepjes
}
