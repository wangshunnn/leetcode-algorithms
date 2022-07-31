/**
 * 正则，困难。。。
 * @param {string} s 
 * @param {string} p 
 * @returns {boolean}
 */
function isMatch(s: string, p: string): boolean {
    s = ' ' + s;
    p = ' ' + p;
    // dp[i][j] 表示 s[1...i] 和 p[1...j] 是否匹配
    const dp: boolean[][] = new Array(s.length).fill(false).map(() => new Array(p.length).fill(false));
    dp[0][0] = true;
    for (let i = 1; i < p.length; i++) {
        if (p[i] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
    }
    for (let i = 1; i < s.length; i++) {
        for (let j = 1; j < p.length; j++) {
            if (p[j] === '.' || s[i] === p[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else if (p[j] === '*') {
                if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
                    dp[i][j] = dp[i][j - 2];
                }
                else {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
                }
            }
        }
    }
    return dp[s.length - 1][p.length - 1] as boolean;
};
