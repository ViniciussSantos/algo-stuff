import { describe, it, expect } from "vitest";
import { maxSubArray } from "./maxSubArray";

describe("maxSubArray", () => {
  it("case 1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  it("case 2", () => {
    expect(maxSubArray([1])).toBe(1);
  });
  it("case 3", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });
  it("case 4", () => {
    expect(maxSubArray([-1])).toBe(-1);
  });
  it("case 5", () => {
    expect(maxSubArray([-2, -1])).toBe(-1);
  });
});
