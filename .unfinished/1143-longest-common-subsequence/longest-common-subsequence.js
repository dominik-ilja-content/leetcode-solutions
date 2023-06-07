/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];

  for (let i = 0; i <= text1.length; i++) {
    const row = [];
    for (let j = 0; j <= text2.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // get top left diagonal
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // get max of previous row and previous column
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};

console.log(longestCommonSubsequence("truckersucker", "tukrukr")); // 7
console.log(longestCommonSubsequence("bl", "yby")); // 1
console.log(longestCommonSubsequence("psnw", "vozsh")); // 1

module.exports = longestCommonSubsequence;
