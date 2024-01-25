export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = getCharMap(s);
  const tMap = getCharMap(t);

  for (const char of s) {
    if (sMap.get(char) !== tMap.get(char)) {
      return false;
    }
  }

  return true;
}

function getCharMap(str: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const char of str) {
    if (map.has(char)) {
      const value = map.get(char)! + 1;
      map.set(char, value!);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}
