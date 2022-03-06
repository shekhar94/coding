function evaluateExp(o1, o2, operator) {
    let res;
    switch (operator) {
        case "+":
            res = o1 + o2;
            break;
        case "-":
            res = o1 - o2;
            break;
        case "*":
            res = o1 * o2;
            break;
        case "/":
            const tmp = o2 / o1;
            res = tmp > 0 ? Math.floor(o2 / o1) : Math.ceil(o2 / o1);
            break;
    }
    return res;
}
function evalRPN(tokens) {
    const stack = [];
    const set = new Set(["+", "-", "*", "/"]);

    for (let i = 0; i < tokens.length; i++) {
        if (set.has(tokens[i])) {
            const o1 = stack.pop();
            const o2 = stack.pop();
            const res = evaluateExp(o1, o2, tokens[i]);
            stack.push(res);
        } else stack.push(parseInt(tokens[i]))
    }
    return stack.pop();
}

function main() {
    // const tokens = ["2", "1", "+", "3", "*"];
    // const tokens = ["4", "13", "5", "/", "+"];
    const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
    console.log(evalRPN(tokens));
}

main()