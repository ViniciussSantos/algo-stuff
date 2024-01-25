import { describe, expect, it } from "vitest";
import { isPalindrome } from "./validPalindrome";

describe("validPanlindrome", async () => {
  it("case 1", async () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  it("case 2", async () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  it("case 3", async () => {
    expect(isPalindrome(" ")).toBe(true);
  });
});
