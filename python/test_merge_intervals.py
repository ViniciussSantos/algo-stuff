from merge_intervals import merge


def test_case_1():
    assert merge([[1, 3], [2, 6], [8, 10], [15, 18]]) == [[1, 6], [8, 10], [15, 18]]


def test_case_2():
    assert merge([[1, 4], [4, 5]]) == [[1, 5]]


def test_case_3():
    assert merge([[4, 7], [1, 4]]) == [[1, 7]]

def test_case_4():
    assert merge([[2,3],[4,5],[6,7],[8,9],[1,10]]) == [[1, 10]]

