function bfs({ start, x }) {
    const queue = [start];
    let largestJumpingNum = start;

    while (queue.length) {
        const num = queue.shift();

        if (num <= x) {
            if (num > largestJumpingNum) largestJumpingNum = num;

            const lastDigit = num % 10;

            if (lastDigit === 0) {
                queue.push(num * 10 + (lastDigit + 1));
            } else if (lastDigit === 9) {
                queue.push(num * 10 + (lastDigit - 1));
            } else {
                queue.push(num * 10 + (lastDigit + 1));
                queue.push(num * 10 + (lastDigit - 1));
            }
        }
    }
    return largestJumpingNum;
}

function printJumpingNumbers() {
    let largestJumpingNum = 0;
    for (let i = 1; i <= 9; i++) {
        const res = bfs({ start: i, x: 343 });
        if (res > largestJumpingNum) largestJumpingNum = res;
    }
    console.log(largestJumpingNum);
}

printJumpingNumbers();