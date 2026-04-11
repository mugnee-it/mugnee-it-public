type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

function flattenClasses(input: ClassValue): string[] {
  if (!input) return [];
  if (typeof input === "string" || typeof input === "number") {
    return [String(input)];
  }
  if (Array.isArray(input)) {
    return input.flatMap(flattenClasses);
  }
  if (typeof input === "object") {
    return Object.entries(input)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([key]) => key);
  }
  return [];
}

export function cn(...inputs: ClassValue[]) {
  return inputs.flatMap(flattenClasses).join(" ");
}

export function withTrailingSlash(path: string) {
  if (!path) return path;
  if (path === "/") return path;
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

  const [pathname, hash = ""] = path.split("#");
  const [basePath, search = ""] = pathname.split("?");
  const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;

  return `${normalizedBase}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}
