var minCameraCover = function (root) {
    let res = 0;
    function dfs(root) {
        if (!root) return 0;
        let c = dfs(root.left) + dfs(root.right);
        if (root.val === 0) return 1;
        if (c === 2) {
            res++;
        }
    }

};