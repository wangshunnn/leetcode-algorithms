/**
 * 排序O(NlogN)+遍历一次O(N)*双指针O(N)
 * 空间O(N), 时间O(N2)
 */
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    let result: number[][] = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break
        }
        if (nums[i] === nums[i - 1]) {
            // 防止重复
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            // 双指针
            const sum = nums[i] + nums[left] + nums[right]
            if (sum < 0) {
                left++
            } else if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (nums[left + 1] === nums[left]) {
                    // 防止重复
                    left++
                }
                left++
            } else {
                right--
            }
        }
    }
    return result
}
