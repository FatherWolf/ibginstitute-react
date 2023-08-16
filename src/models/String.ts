export function stringValidate(value: unknown): string {
  if (typeof value !== "string") {
    throw new Error(`Not a string: ${value}`);
  }
  return value;
}
