import { describe, expect, it } from "vitest";
import { maxProfit } from "./buyStock";
describe("121. Best Time to Buy and Sell Stock", () => {
  it("case 1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
  it("case 2", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
  it("case 3", () => {
    expect(maxProfit([2, 4, 1])).toEqual(2);
  });
});
