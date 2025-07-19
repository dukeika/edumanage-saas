// Parses various error shapes into a user‐friendly string
export function handleError(err: any): string {
  // 1) AppSync GraphQL errors come in an `errors` array
  if (Array.isArray(err?.errors) && err.errors.length) {
    return err.errors[0].message;
  }
  // 2) Standard JS Error
  if (typeof err.message === "string") {
    return err.message;
  }
  // 3) Fallback: serialize entire object
  try {
    return JSON.stringify(err, null, 2);
  } catch {
    return String(err);
  }
}
