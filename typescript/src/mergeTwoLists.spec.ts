import { describe, expect, it } from "vitest";
import { arrayToLinkedList, mergeTwoLists } from "./mergeTwoLists";

describe("21. Merge Two Sorted Lists", () => {
  it("case 1", () => {
    expect(
      mergeTwoLists(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 4])),
    ).toEqual(arrayToLinkedList([1, 1, 2, 3, 4, 4]));
  });
  it("case 2", () => {
    expect(mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([]))).toEqual(
      null,
    );
  });
  it("case 3", () => {
    expect(
      mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([0])),
    ).toEqual(arrayToLinkedList([0]));
  });
});
