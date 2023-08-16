export function objectValidate(value: unknown): Record<string, any> {
  if (typeof value !== "object" || value === null) {
    throw new Error(`Not an object: ${value}`);
  }
  return value;
}
