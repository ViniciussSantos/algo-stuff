from collections import defaultdict


class TimeMap:
    def __init__(self) -> None:
        self.map: dict = defaultdict(list[tuple])

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.map[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        arr = self.map[key]
        low = 0
        high = len(arr) - 1
        mid = 0

        while low <= high:
            mid = low + (high - low) // 2
            if arr[mid][0] == timestamp:
                return arr[mid][1]
            elif arr[mid][0] < timestamp:
                low = mid + 1
            else:
                high = mid - 1

        if high >= 0:
            return arr[high][1]

        return ''
