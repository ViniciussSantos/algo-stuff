//I use the prefix and postfix technique here
export function productExceptSelf(nums: number[]): number[] {
  const res: number[] = [1];

  //in this case, the prefix is always the last element of the array
  //at a given iteration
  for (let i = 0; i < nums.length - 1; i++) {
    res.push(res[res.length - 1] * nums[i]);
  }

  //When walking backwards, I have to use the ptr variable to offset the position of nums array
  //from the postfix
  let postfix = 1;
  let ptr = nums.length - 2;

  for (let i = nums.length - 1; i >= 0; i--) {
    postfix *= nums[i];
    res[ptr] *= postfix;
    ptr--;
  }

  // I do this because the leetcode tester uses loosely equal (I think) while I use strictly equal in my tests
  return res.map((v) => (v === -0 ? Math.abs(v) : v));
}
