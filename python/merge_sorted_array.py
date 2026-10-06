def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    replacement_index = m + n - 1
    i = m - 1
    j = n - 1

    while i >= 0 and j >= 0:
        print(f'replacement_index:{replacement_index}\nj:{j}')
        if nums1[i] > nums2[j]:
            nums1[replacement_index] = nums1[i]
            i -= 1
        else:
            nums1[replacement_index] = nums2[j]
            j -= 1
        replacement_index -= 1


    while j >= 0:
        nums1[replacement_index] = nums2[j]
        j -= 1
        replacement_index -= 1
