def two_sum(nums: list[int], target: int) -> list[int]:
    seen: dict[int, int] = {}
    for i, n in enumerate(nums):
        j = seen.get(target - n)
        if j is not None:
            return [j, i]
        seen[n] = i
    return [-1, -1]
