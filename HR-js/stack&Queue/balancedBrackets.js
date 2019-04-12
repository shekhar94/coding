// https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues
function main(input) {
    let ip_arr = input.split('\n');
    let n = Number(ip_arr[0]);
    for (let i = 0; i < n; i++) {
        if (isBalanced(ip_arr[i + 1])) console.log('YES');
        else console.log('NO');
    }
}

function isPair(left, right) {
    switch (left) {
        case '(':
            return right === ')';
        case '{':
            return right === '}';
        case '[':
            return right === ']';
    }
}

function isBalanced(sequence) {
    let len = sequence.length;
    if (!(len % 2)) { // even length
        let stack = [];
        for (let i = 0; i < len; i++) {
            if (stack.length && isPair(stack[stack.length - 1], sequence[i])) stack.pop();
            else stack.push(sequence[i]);
        }
        return !stack.length;
    } else {
        return false;
    }
}
main("3\n{[()]}\n{[(])}\n{{[[(())]]}}");