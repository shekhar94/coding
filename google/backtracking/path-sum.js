var hasPathSum = function (root, targetSum) {

    function dfs(root, sumTill) {
        if (!root) return false;

        const val = root.val;
        const currSum = sumTill + val;

        if (!root.left && !root.right && currSum === targetSum) return true;

        return dfs(root.left, currSum) || dfs(root.right, currSum);
    }

    return dfs(root, 0);
};