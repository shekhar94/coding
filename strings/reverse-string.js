function reverseString(str) {
    const stack = [];
    let pointer = 0;
    let start = 0;
    while (pointer <= str.length) {
        if (str[pointer] === ' ' || pointer === str.length) {
            stack.push(str.substring(start, pointer));
            start = pointer + 1;
        }
        pointer++;
    }
    while (stack.length) {
        process.stdout.write(`${stack.pop()}${stack.length > 0 ? ' ' : ''}`);
    }
    process.stdout.write('\n');
}
function main(input) {
    const input_arr = input.split('\n');
    const t = Number(input_arr[0]);
    for (let i = 1; i <= t; i++) {
        reverseString(input_arr[i]);
    }
}
main("1\nAt coding blocks, you get well structured syllabus that helps to build your logic and improve programming quotient.");