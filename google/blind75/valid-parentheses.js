var isValid = function (s) {
    const stack = [], opening = ['(', '{', '['], closing = [')', '}', ']'];
    for (let c of s) {
        if (opening.indexOf(c) !== -1) stack.push(c);
        else {
            const idx = closing.indexOf(c);
            if (stack[stack.length - 1] === opening[idx]) stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
};