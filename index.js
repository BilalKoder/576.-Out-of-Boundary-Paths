function findPaths(m, n, maxMove, startRow, startColumn) {
    const MOD = 10**9 + 7;
    const dp = new Array(maxMove + 1).fill(0).map(() =>
        new Array(m).fill(0).map(() => new Array(n).fill(0))
    );

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let move = 1; move <= maxMove; move++) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (const d of directions) {
                    const ni = i + d[0];
                    const nj = j + d[1];
                    if (ni < 0 || ni >= m || nj < 0 || nj >= n) {
                        dp[move][i][j] += 1;
                    } else {
                        dp[move][i][j] = (dp[move][i][j] + dp[move - 1][ni][nj]) % MOD;
                    }
                }
            }
        }
    }

    return dp[maxMove][startRow][startColumn];
}

// Example usage
const m = 2;
const n = 2;
const maxMove = 2;
const startRow = 0;
const startColumn = 0;

const result = findPaths(m, n, maxMove, startRow, startColumn);
console.log(result);