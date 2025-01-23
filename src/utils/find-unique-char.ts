export function findUniqueChar(str: string): number {
  if (!str.length) return -1;
  str = str.toLowerCase();
  const visited = new Set<string>();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char) {
      if (visited.has(char)) {
        continue;
      }
      visited.add(char);
      const slice = str.slice(i + 1);
      if (slice.length && slice.indexOf(char) === -1) {
        return i;
      }
    }
  }
  return -1;
}

findUniqueChar("hello worlds hipsters"); // 6

/**
 map = {
  char: string,
  index: number,
 }
 */
