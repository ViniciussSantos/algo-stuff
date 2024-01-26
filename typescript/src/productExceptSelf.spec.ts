import { describe, it, expect } from "vitest";
import { productExceptSelf } from "./productExceptSelf";

describe("productExceptSelf", () => {
  it("case 1", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
  it("case 2", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0]);
  });
  it("case 3", () => {
    expect(productExceptSelf([1, -1])).toStrictEqual([-1, 1]);
  });
});
