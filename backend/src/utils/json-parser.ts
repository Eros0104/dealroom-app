function toCamelCase(str: string) {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

const parseKeys = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map((item: any) => parseKeys(item));
  } else if (value !== null && typeof value === "object") {
    return Object.keys(value).reduce(
      (acc, key) => {
        acc[toCamelCase(key)] = parseKeys(
          (value as Record<string, unknown>)[key],
        );
        return acc;
      },
      {} as Record<string, unknown>,
    );
  }

  return value;
};

/**
 * Parse a JSON string and convert all keys to camelCase
 */
const parse = <T>(value: string): T => {
  const parsedValue = JSON.parse(value);
  return parseKeys(parsedValue) as T;
};

export default {
  parse,
};
