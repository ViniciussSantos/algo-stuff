import { describe, it, expect } from "vitest";
import { majorityElement } from "./majorityElement";

describe("Majority Element", () => {
  it("case 1", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });
  it("case 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
