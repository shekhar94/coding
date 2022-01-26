

function maxLength(s) {
    const stack = [-1];
    const len = s.length;

    let i = 0;
    let maxLen = 0;
    while (i < len) {
        if (s[i] === ')') {
            const poppedEle = stack.pop();
            if (poppedEle === -1 || stack.length === 0) {
                // if the stack is empty push the current
                // index as a base for the next valid substring
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1])
            }
        } else if (s[i] === '(') {
            stack.push(i);
        }
        i++;
    }
    return maxLen;
}

console.log(maxLength(')()())'));