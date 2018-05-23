#  https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem
#  Author: Shekhar Suman 
def traverse_from(row, col, n, m, grid, visited):
    count = 0
    if (row < 0 or col < 0 or row >= n or col >= m or (not grid[row][col]) or visited[row][col]):
        return count
    count += 1
    visited[row][col] = True
    count += (
        traverse_from(row, col - 1, n, m, grid, visited) +
        traverse_from(row, col + 1, n, m, grid, visited) +
        traverse_from(row - 1, col, n, m, grid, visited) +
        traverse_from(row + 1, col, n, m, grid, visited) +
        traverse_from(row - 1, col - 1, n, m, grid, visited) +
        traverse_from(row - 1, col + 1, n, m, grid, visited) +
        traverse_from(row + 1, col - 1, n, m, grid, visited) +
        traverse_from(row + 1, col + 1, n, m, grid, visited)
    )
    return count
    
def find_largest_region(n, m, grid):
    visited = [[False for j in range(m)] for i in range(n)]
    count = 0
    result = 0
    for i in range(0, n):
        for j in range(0, m):
            if (not visited[i][j]):
                count = traverse_from(i, j, n, m, grid, visited)
                if (count > result):
                    result = count
    print(result)


def main():
    n = 5
    m = 6
    grid = [
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 0, 1],
        [0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0]
    ]
    find_largest_region(n, m, grid)

main()
