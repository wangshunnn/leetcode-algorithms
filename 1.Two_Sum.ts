/**
 * 哈希表
 * - 时间复杂度：O(N)，其中 N 是数组中的元素数量。
 * - 空间复杂度：O(N)，其中 N 是数组中的元素数量。主要为哈希表的开销。
 */

function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();
  for (let index in nums) {
    const item = nums[index];
    const rest = target - item;
    if (hashMap.has(rest)) return [hashMap.get(rest) as number, Number(index)];
    hashMap.set(item, Number(index));
  }
  return [];
}

// [0,1]
console.log(twoSum([2, 7, 11, 15], 9));
