#include<bits/stdc++.h>
using namespace std;

int traverse_from(int i, int j, int row_len, int col_len, vector<vector<int>> &grid, vector<vector<bool>> &visited) {
    int count = 0;
    if (i < 0 || j < 0 || i >= row_len || j >= col_len ||
        !grid[i][j] || visited[i][j]) {
            return count;
        }
    count++;
    visited[i][j] = true;
    count += (
        traverse_from(i, j + 1, row_len, col_len, grid, visited) +
        traverse_from(i, j - 1, row_len, col_len, grid, visited) +
        traverse_from(i - 1, j + 1, row_len, col_len, grid, visited) +
        traverse_from(i - 1, j - 1, row_len, col_len, grid, visited) +
        traverse_from(i + 1, j + 1, row_len, col_len, grid, visited) +
        traverse_from(i + 1, j - 1, row_len, col_len, grid, visited) +
        traverse_from(i - 1, j, row_len, col_len, grid, visited) +
        traverse_from(i + 1, j, row_len, col_len, grid, visited)
    );
    return count;
}
void find_largest_region(int row_len, int col_len, vector<vector<int>> grid) {
    int count = 0;
    int result = 0;
    vector<vector<bool>> visited(row_len, vector<bool>(col_len, false));
    for (int i = 0; i < row_len; i++) {
        for(int j = 0; j < col_len; j++) {
            if (!visited[i][j]) {
                count = traverse_from(i, j, row_len, col_len, grid, visited);
                if (count > result) {
                    result = count;
                }
            }
        }
    }
    cout<<result;
}
int main() {

    int n = 5;
    int m = 6;
    vector<vector<int>> grid(n, vector<int>(6, 0));
    grid[0][0] = 1;
    grid[0][1] = 1;
    grid[0][2] = 1;
    grid[0][3] = 1;
    grid[1][4] = 1;
    grid[1][5] = 1;
    grid[2][0] = 1;
    grid[2][2] = 1;
    grid[2][5] = 1;
    grid[3][3] = 1;
    grid[3][4] = 1;
    grid[4][0] = 1;
    grid[4][1] = 1;

    find_largest_region(n, m, grid);
    return 0;
}