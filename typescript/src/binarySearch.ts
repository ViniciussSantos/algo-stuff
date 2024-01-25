export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
  }

  return -1;
}
