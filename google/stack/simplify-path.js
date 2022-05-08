var simplifyPath = function (path) {
    let stack = [];
    let curr = '';
    path = path + '/'

    for (let i = 0; i < path.length; i++) {
        const c = path[i];
        if (c === '/') {
            if (curr === '..') {
                if (stack.length) stack.pop();
            } else if (curr !== "" && curr !== '.') {
                stack.push(curr);
            }
            curr = "";
        } else curr += c;
    }
    return "/" + stack.join("/");
};

var simplifyPath = function (path) {
    const stack = [];
    const pathArr = path.split('/');
    for (let p of pathArr) {
        if (p === '..') {
            if (stack.length) stack.pop();
        } else if (p !== '' && p !== '.') {
            stack.push(p);
        }
    }
    if (!stack.length) return '/';
    else return '/' + stack.join('/');
}
// console.log(simplifyPath("/../"));
console.log(simplifyPath("/a//b////c/d//././/.."));