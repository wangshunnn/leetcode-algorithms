/**
 * 回溯递归算法
 * 时间复杂度：时间复杂度：O(3^m x 4^n)
 * 空间复杂度：O(m+n)
 * 其中 m 是输入中对应 3 个字母的数字个数（包括数字 2、3、4、5、6、8），n 是输入中对应 4 个字母的数字个数（包括数字 7、9）
 */
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []
    const hashMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const allCombination: string[] = []
    let combination: string[] = []
    const backtrack = (str: string, index: number) => {
        if (index === digits.length) {
            // 终止条件
            return allCombination.push(str)
        }
        // 横向遍历，这里不需要剪枝优化
        for (let letter of hashMap[digits[index]]) {
            combination = combination.concat(letter)
            // 纵向递归，根据字符串长度长度决定递归深度
            backtrack(combination.join(''), index + 1)
            // 回溯
            combination.pop()
        }
    }
    backtrack(digits, 0)
    return allCombination
};
