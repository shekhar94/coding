var strStr = function (haystack, needle) {
    let i, j;
    for (i = 0; i <= haystack.length - needle.length; i++) {
        for (j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) break;
        }
        if (j === needle.length) return i;
    }
    return -1;
};