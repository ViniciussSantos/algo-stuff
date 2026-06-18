from time_based_key_value_store import TimeMap


def test_case_0():
    timeMap = TimeMap()
    timeMap.set("foo", "bar", 1)
    assert timeMap.get("foo", 1) == "bar"
    assert timeMap.get("foo", 3) == "bar"
    timeMap.set("foo", "bar2", 4)
    assert timeMap.get("foo", 4) == "bar2"
    assert timeMap.get("foo", 5) == "bar2"

def test_case_2():
    timeMap = TimeMap()
    timeMap.set("love","high",10)
    timeMap.set("love","low",20)
    assert timeMap.get("love", 5) == ""
    assert timeMap.get("love", 10) == "high"
    assert timeMap.get("love", 15) == "high"
    assert timeMap.get("love", 20) == "low"
    assert timeMap.get("love", 25) == "low"
