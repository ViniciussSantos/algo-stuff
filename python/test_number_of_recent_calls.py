from number_of_recent_calls import RecentCounter



def test_case_1():
    recentCounter =  RecentCounter()
    assert recentCounter.ping(1) == 1
    assert recentCounter.ping(100) == 2
    assert recentCounter.ping(3001) == 3
    assert recentCounter.ping(3002) == 3
