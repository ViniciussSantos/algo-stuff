from collections import defaultdict


def add_tuples(a, b):
    return tuple(x + y for x, y in zip(a, b, strict=False))


class UndergroundSystem:
    def __init__(self) -> None:
        self.checkinDict: dict = defaultdict(tuple)
        self.averages: dict = defaultdict(tuple)

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkinDict[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        if (self.checkinDict[id][0], stationName) in self.averages:
            self.averages[(self.checkinDict[id][0], stationName)] = add_tuples(
                (t - self.checkinDict[id][1], 1),
                self.averages[(self.checkinDict[id][0], stationName)],
            )
        else:
            self.averages[(self.checkinDict[id][0], stationName)] = (
                t - self.checkinDict[id][1],
                1,
            )
        self.checkinDict.pop(id, None)

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return (
            self.averages[(startStation, endStation)][0]
            / self.averages[(startStation, endStation)][1]
        )
