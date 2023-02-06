/**
 * 双链表遍历
 * - 时间复杂度：O(max(m,n))，其中 m 和 n 分别为两个链表的长度。
 * - 空间复杂度：O(1)。
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode();
  const head = result;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;
    l1 && ((sum += l1.val), (l1 = l1.next));
    l2 && ((sum += l2.val), (l2 = l2.next));
    carry = sum - 9 > 0 ? 1 : 0;
    result = result.next = new ListNode(sum % 10);
  }
  return head.next;
}
