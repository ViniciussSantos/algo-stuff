import { describe, expect, it } from "vitest";
import { isAnagram } from "./validAnagram";

describe("valid anagram", async () => {
  it("case 1", async () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });
  it("case 2", async () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
  it("case 3", async () => {
    expect(isAnagram("aacc", "ccac")).toBe(false);
  });
});
