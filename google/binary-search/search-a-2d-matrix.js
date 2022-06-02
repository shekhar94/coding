var searchMatrix = function (matrix, target) {
    const [m, n] = [matrix.length, matrix[0].length];

    // Find the row where target could exist
    function findRow() {
        let [l, r] = [0, m - 1];
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target >= matrix[mid][0] && target <= matrix[mid][n - 1]) return mid;
            if (target > matrix[mid][n - 1]) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
    const row = findRow();

    // Run binary search on the selected row to find if target exists
    function findTarget() {
        if (row === -1) return false;

        let [l, r] = [0, n - 1];
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (matrix[row][mid] === target) return true;
            if (matrix[row][mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }
    return findTarget();
};