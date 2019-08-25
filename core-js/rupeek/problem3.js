function printPairs(num, test_case_no) {
    let left = 0;
    let right = num - 1;
    while (left < right) {
        if (left + right === num) {
            console.log(`${left} + ${right} = ${num}`);
        } else if (left + right < num) {
            left++;
        } else {
            right--
        }
    }
}


function main(input) {
    const input_arr = input.split('\n');
    const test_cases_count = Number(input_arr[0]);
    for (let i = 1; i <= test_cases_count; i++) {
        printPairs(input_arr[i], i);
    }
}
main("2\n1002\n11");