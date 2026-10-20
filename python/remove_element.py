def removeElement(nums: list[int], val: int) -> int:
    k = 0
    for i, n in enumerate(nums):
        if n == val:
            continue
        else:
            nums[k] = nums[i]
            k += 1

    return k
