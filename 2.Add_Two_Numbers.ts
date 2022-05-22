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
  let lastJinwei = 0;
  while (l1 || l2 || lastJinwei) {
    let val = 0;
    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }
    findLastSumList.val = (val + lastJinwei) % 10;
    lastJinwei = Math.floor((val + lastJinwei) / 10);
    if (!l1 && !l2 && !lastJinwei) break;
    findLastSumList.next = new ListNode();
    findLastSumList = findLastSumList.next;
  }
  return sumList;
};
