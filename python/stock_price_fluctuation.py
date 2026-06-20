import heapq
from collections import defaultdict


class StockPrice:
    def __init__(self) -> None:
        self.prices: dict = defaultdict(int)
        self.latest_timestamp = float('-inf')
        self.min_prices: list[tuple[int, int]] = []
        self.max_prices: list[tuple[int, int]] = []

    def update(self, timestamp: int, price: int) -> None:
        self.latest_timestamp = (
            timestamp if timestamp > self.latest_timestamp else self.latest_timestamp
        )
        self.prices[timestamp] = price

        heapq.heappush(self.min_prices, (price, timestamp))
        heapq.heappush(self.max_prices, (-price, timestamp))

    def current(self) -> int:
        return self.prices[int(self.latest_timestamp)]

    def maximum(self) -> int:
        while self.prices[self.max_prices[0][1]] != abs(self.max_prices[0][0]):
            heapq.heappop(self.max_prices)

        return abs(self.max_prices[0][0])

    def minimum(self) -> int:
        while self.prices[self.min_prices[0][1]] != self.min_prices[0][0]:
            heapq.heappop(self.min_prices)

        return self.min_prices[0][0]
