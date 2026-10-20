from remove_element import removeElement


def assert_remove_element(nums, val, expected):
    k = removeElement(nums, val)

    assert k == len(expected)
    assert sorted(nums[:k]) == sorted(expected)


def test_case_1():
    nums = [3, 2, 2, 3]
    assert_remove_element(nums, 3, [2, 2])


def test_case_2():
    nums = [0, 1, 2, 2, 3, 0, 4, 2]
    assert_remove_element(nums, 2, [0, 1, 3, 0, 4])


def test_empty_array():
    nums = []
    assert_remove_element(nums, 1, [])


def test_no_occurrences():
    nums = [1, 2, 3]
    assert_remove_element(nums, 4, [1, 2, 3])


def test_all_elements_removed():
    nums = [5, 5, 5]
    assert_remove_element(nums, 5, [])


def test_single_element_kept():
    nums = [7]
    assert_remove_element(nums, 3, [7])


def test_single_element_removed():
    nums = [7]
    assert_remove_element(nums, 7, [])


def test_consecutive_matches():
    nums = [1, 2, 2, 2, 3]
    assert_remove_element(nums, 2, [1, 3])


def test_matches_at_both_ends():
    nums = [4, 1, 2, 4]
    assert_remove_element(nums, 4, [1, 2])


def test_all_kept():
    nums = [1, 2, 3, 4, 5]
    assert_remove_element(nums, 6, [1, 2, 3, 4, 5])


def test_many_matches():
    nums = [5, 5, 5, 1, 2, 3, 4, 5]
    assert_remove_element(nums, 5, [1, 2, 3, 4])
