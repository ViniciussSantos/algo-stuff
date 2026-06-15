def merge(intervals: list[list[int]]) -> list[list[int]]:
    if len(intervals) == 1:
        return intervals

    intervals.sort()

    res: list[list[int]] = []
    current_res = intervals[0]

    for interval in intervals[1:]:
        if current_res[1] >= interval[0]:
            current_res[1] = max(current_res[1], interval[1])
        else:
            res.append(current_res)
            current_res = interval

    res.append(current_res)
    return res
