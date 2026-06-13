from min_stack import MinStack


def test_case_1():
    test_min_stack = MinStack()
    test_min_stack.push(-2)
    test_min_stack.push(0)
    test_min_stack.push(-3)
    assert test_min_stack.getMin() == -3
    test_min_stack.pop()
    assert test_min_stack.top() == 0
    assert test_min_stack.getMin() == -2
