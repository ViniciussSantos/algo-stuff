//TODO: complexity 0(n^2), find out a way of solving in a faster way and without using division
export function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(
      Math.abs(
        nums.reduce(
          (acc, curr, index) => (index === i ? acc * 1 : acc * curr),
          1,
        ),
      ),
    );
  }

  return res;
}
