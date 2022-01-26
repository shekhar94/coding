function isOperator(str) {
    return ['+', '-', '*', '/'].includes(str);
}
function calculate(operator, val1, val2) {
    switch (operator) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
    }
}

function main() {
    const stack = [];
    const A = ["2", "1", "+", "3", "*"];

    for (let i = 0; i < A.length; i++) {
        if (isOperator(A[i])) {
            const val2 = stack.pop();
            const val1 = stack.pop();
            const res = calculate(A[i], parseInt(val1), parseInt(val2));
            if (res == 0) res = 0;
            stack.push(res);
            console.log('res', res);
        } else {
            stack.push(A[i]);
        }
    }
    console.log(stack.pop());
}

main();