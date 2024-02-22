import { describe, expect, it } from "vitest";
import { canConstruct } from "./ransomNote";

describe("383. Ransom Note", () => {
  it("case 1", () => {
    expect(canConstruct("a", "b")).toEqual(false);
  });

  it("case 2", () => {
    expect(canConstruct("aa", "ab")).toEqual(false);
  });

  it("case 3", () => {
    expect(canConstruct("aa", "aab")).toEqual(true);
  });
});
