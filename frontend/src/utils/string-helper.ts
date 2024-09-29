/**
 * Capitalize the first letter of each word in a string
 */
const capitalizeWords = (str: string): string => {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

export { capitalizeWords };
