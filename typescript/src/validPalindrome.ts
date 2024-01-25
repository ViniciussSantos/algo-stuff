export function isPalindrome(s: string): boolean {
  const cleanString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  if (cleanString === "") return true;

  if (cleanString === cleanString.split("").reverse().join("")) return true;

  return false;
}
