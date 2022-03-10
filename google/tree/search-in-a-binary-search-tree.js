var searchBST = function (root, val) {
    let tmp = root;
    while (tmp) {
        if (tmp.val == val) return tmp;
        if (tmp.val > val) {
            tmp = tmp.left;
        } else {
            tmp = tmp.right;
        }
    }
    return null;
};