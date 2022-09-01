/**
 * 栈
 * 时间复杂度: O(N)，遍历了一遍字符串。
 * 空间复杂度: O(N+∣Σ∣)，其中 Σ 表示字符集，本题中字符串只包含 6 种括号，∣Σ∣=6。
 * 栈中的字符数量为 O(N)，而哈希表使用的空间为 O(∣Σ∣)，相加即可得到总空间复杂度。
 * 空间复杂度在最坏情况下: O(N)，假如输入是 (((((((，栈的大小将是输入字符串的长度N。
 */
function isValid(s: string): boolean {
    const pairs = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])
    let res: string[] = []
    for (let i of s) {
        if (pairs.has(i)) {
            if (res.pop() !== pairs.get(i)) return false
        } else {
            res.push(i)
        }
    }
    return res.length === 0
}
