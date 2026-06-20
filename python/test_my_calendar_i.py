from my_calendar_i import MyCalendar


def test_case_1():
    myCalendar = MyCalendar()
    assert myCalendar.book(10, 20)
    assert not myCalendar.book(15, 25)
    assert myCalendar.book(20, 30)
