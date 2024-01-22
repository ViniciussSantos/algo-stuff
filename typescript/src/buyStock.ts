export function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;

  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
    }

    if (prices[right] - prices[left] > profit) {
      profit = prices[right] - prices[left];
    }

    right += 1;
  }

  return profit;
}
