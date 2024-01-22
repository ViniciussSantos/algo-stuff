import { describe, expect, it } from "vitest";
import { isValid } from "./validParans";

describe("20. Valid Parentheses", () => {
  it("case 1", () => {
    expect(isValid("()")).toEqual(true);
  });
  it("case 2", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });
  it("case 3", () => {
    expect(isValid("(]")).toEqual(false);
  });
  it("case 4", () => {
    expect(isValid("((")).toEqual(false);
  });
});
