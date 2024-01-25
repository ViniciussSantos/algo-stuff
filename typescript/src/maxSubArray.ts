export function maxSubArray(nums: number[]): number {
  let sumSoFar = nums[0];
  let finalSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sumSoFar += nums[i];

    if (sumSoFar < nums[i]) {
      sumSoFar = nums[i];
    }

    if (sumSoFar > finalSum) {
      finalSum = sumSoFar;
    }
  }

  return finalSum;
}
