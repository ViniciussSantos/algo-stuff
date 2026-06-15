class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def add_two_numbers(l1: ListNode | None, l2: ListNode | None):
    if l1 is None and l2 is None:
        return ListNode()

    dummy = ListNode()
    curr = dummy
    currValList1 = l1
    currValList2 = l2
    carry = 0

    while currValList1 is not None or currValList2 is not None or carry > 0:
        val1 = 0 if currValList1 is None else currValList1.val
        val2 = 0 if currValList2 is None else currValList2.val

        sum_val = val1 + val2 + carry
        total = sum_val % 10
        carry = sum_val // 10

        currValList1 = currValList1.next if currValList1 is not None else None
        currValList2 = currValList2.next if currValList2 is not None else None
        curr.next = ListNode(total)
        curr = curr.next

    return dummy.next
