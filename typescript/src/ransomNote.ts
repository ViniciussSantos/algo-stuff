export function canConstruct(ransomNote: string, magazine: string): boolean {
  const numOfLetterInMagazine = countLettersInMagazine(magazine);

  for (let c of ransomNote) {
    if (!numOfLetterInMagazine.has(c)) {
      return false;
    }

    const count = numOfLetterInMagazine.get(c)!;

    if (count === 0) {
      return false;
    }

    numOfLetterInMagazine.set(c, count - 1);
  }

  return true;
}

function countLettersInMagazine(magazine: string): Map<string, number> {
  const map = new Map<string, number>();

  for (let c of magazine) {
    if (!map.has(c)) {
      map.set(c, 1);
      continue;
    }

    const count = map.get(c)! + 1;
    map.set(c, count);
  }

  return map;
}
