/**
 * 合并排序，一次遍历迭代
 * 时间复杂度：O(n + m)，两个链表长度
 * 空间复杂度：O(1)
 */
function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    // 在对链表进行操作时，一种常用的技巧是添加一个
    // 哑节点（dummy node，也叫哨兵节点）
    // 它的 next 指针指向链表的头节点
    let dummy = new ListNode()
    let pre = dummy
    while (list1 && list2) {
        if (list1.val < list2.val) {
            pre.next = list1
            list1 = list1.next
        } else {
            pre.next = list2
            list2 = list2.next
        }
        pre = pre.next
    }
    if (list1) pre.next = list1
    if (list2) pre.next = list2
    return dummy.next
}

/** Definition for singly-linked list. */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
