export function isValid(s: string): boolean {
  const stack: string[] = [];

  const chars = s.split("");

  for (const char of chars) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}") {
      const top = stack.pop();
      if (top !== "{") return false;
    } else if (char === "]") {
      const top = stack.pop();
      if (top !== "[") return false;
    } else if (char === ")") {
      const top = stack.pop();
      if (top !== "(") return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
}
