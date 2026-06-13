class MinStack:
    def __init__(self) -> None:
        self.stack: list[int] = []
        self.min_stack: list[int] = []

    def push(self, value: int) -> None:
        self.stack.append(value)
        if len(self.min_stack) != 0:
            if self.min_stack[-1] >= value:
                self.min_stack.append(value)
        else:
            self.min_stack.append(value)

    def pop(self) -> None:
        v = self.stack.pop()
        if self.min_stack[-1] == v:
            self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]
