def insert_interval(
    intervals: list[list[int]], newInterval: list[int]
) -> list[list[int]]:
    intervals.append(newInterval)

    output = []

    intervals.sort()
    res = intervals[0]

    for interval in intervals[1:]:
        if res[1] >= interval[0]:
            res[1] = max(res[1], interval[1])
        else:
            output.append(res)
            res = interval

    output.append(res)
    return output
