class MyCalendar:
    def __init__(self) -> None:
        self.bookings: list[tuple] = []

    def book(self, startTime: int, endTime: int) -> bool:

        for start, end in self.bookings:
            if start < endTime and startTime < end:
                return False

        self.bookings.append((startTime, endTime))
        return True
