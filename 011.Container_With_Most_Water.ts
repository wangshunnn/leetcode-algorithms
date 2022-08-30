/**
 * 双指针。空间:O(1),时间O(N),只遍历一次。
 */
function maxArea(height: number[]): number {
    // 左右指针
    let left: number = 0;
    let right: number = height.length - 1;
    let volum: number = 0;
    while (left < right) {
        const _volum: number = (right - left) * Math.min(height[left], height[right])
        volum = Math.max(volum, _volum);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return volum;
};
