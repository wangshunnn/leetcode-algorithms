/**
 * 中心扩展算法
 * 时间复杂度：O(n^2)，其中 n 是字符串的长度。长度为 1 和 2 的回文中心分别有 n 和 n-1 个，每个回文中心最多会向外扩展 O(n) 次。
 * 空间复杂度：O(1)O(1)
 */
function longestPalindrome(s: string): string {
  let _palindrome: string = "";
  const expandAroundCenter = (s: string, left: number, right: number) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    return s.slice(left + 1, right);
  };
  for (let i = 0; i < s.length; i++) {
    // 偶数回文串
    const _palindromeEven = expandAroundCenter(s, i, i);
    // 奇数回文串
    const _palindromeOdd = expandAroundCenter(s, i, i + 1);
    // 比较最大长度
    if (_palindromeEven.length > _palindrome.length) {
      _palindrome = _palindromeEven;
    }
    if (_palindromeOdd.length > _palindrome.length) {
      _palindrome = _palindromeOdd;
    }
  }
  return _palindrome;
}
