from merge_sorted_array import merge 


def test_case_1():
    nums1= [1,2,3,0,0,0]
    merge(nums1, 3, [2,5,6], 3)
    assert nums1 == [1,2,2,3,5,6]

def test_case_2():
    nums1= [1]
    merge(nums1, 1, [], 0)
    assert nums1 == [1]

def test_case_3():
    nums1= [0]
    merge(nums1, 0, [1], 1)
    assert nums1 == [1]
