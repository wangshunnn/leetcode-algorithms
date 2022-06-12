/**
 * 方法一：二分查找
 * 时间复杂度：O(log(m+n))
 * 空间复杂度：O(1)O(1)。
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;
  while (low <= high) {
    const i = low + Math.floor((high - low) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
    const minRightA = i === m ? Infinity : nums1[i];
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
    const minRightB = j === n ? Infinity : nums2[j];

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
      return (m + n) % 2 === 1
        ? Math.max(maxLeftA, maxLeftB)
        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
    } else if (maxLeftA > minRightB) {
      high = i - 1;
    } else {
      low = low + 1;
    }
  }
}
