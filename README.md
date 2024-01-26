576. Out of Boundary Paths
There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

![image](https://github.com/BilalKoder/576.-Out-of-Boundary-Paths/assets/107485396/ebde1449-b831-4920-93c5-b43c4cc08a34)

This JavaScript code mirrors the logic of the Python solution. It uses a 3D array (dp) to store the number of paths for each move at each cell. The final result is obtained from dp[maxMove][startRow][startColumn]. The modulo operation is applied to avoid integer overflow.
