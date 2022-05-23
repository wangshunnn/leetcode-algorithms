/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const sumList = new ListNode();
  let findLastSumList = sumList;
  let carry = 0;
  while (l1 || l2 || carry) {
    let val = 0;
    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }
    findLastSumList.val = (val + carry) % 10;
    carry = Math.floor((val + carry) / 10);
    if (!l1 && !l2 && !carry) break;
    findLastSumList.next = new ListNode();
    findLastSumList = findLastSumList.next;
  }
  return sumList;
};
