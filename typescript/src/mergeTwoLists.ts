class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//TODO: find a more efficient way of solving this problem
//maybe there is a way of doing this where I don't need to transform linked lists into arrays and vice versa
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
  const list1AsArray = linkedListToArray(list1);
  const list2AsArray = linkedListToArray(list2);

  list1AsArray.push(...list2AsArray);

  return arrayToLinkedList(
    list1AsArray.sort((a, b) => {
      return a - b;
    }),
  );
}

export function linkedListToArray(list1: ListNode | null): number[] {
  if (list1 === null) return [];

  let arr = [list1!.val];
  let pointerToNextListNode = list1!.next;

  while (pointerToNextListNode !== null) {
    arr.push(pointerToNextListNode.val);

    pointerToNextListNode = pointerToNextListNode.next;
  }

  return arr;
}

export function arrayToLinkedList(nums: number[]): ListNode | null {
  if (nums.length === 0) {
    return null;
  }

  const head = new ListNode(nums[0]);
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }

  return head;
}
