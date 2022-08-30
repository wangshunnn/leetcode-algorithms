/**
 * 双指针，快慢指针
 * 快指针比慢指针先夺走n步
 * 时间复杂度：O(L), 链表长度
 * 空间复杂度：O(1)
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head)
    let slow = dummy
    let fast = slow
    while (n--) fast = fast.next!
    while (fast.next) {
        slow = slow.next!
        fast = fast.next
    }
    slow.next = slow.next!.next
    return dummy.next
}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
