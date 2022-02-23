// https://leetcode.com/problems/generate-parentheses/submissions/

let arr = []; // to store the result

function gp(str, openCount, closeCount) {
    if (openCount < 0 || closeCount < 0) return;
    if (openCount === 0 && closeCount === 0) {
        arr.push(str); return; // add string to result
    }
    if (openCount < closeCount) {
        // Two possible scenario as per the choice diagram
        // Either we can select "(" or ")"
        gp(`${str})`, openCount, closeCount - 1); // selecting closing bracket
    }
    gp(`${str}(`, openCount - 1, closeCount); // selecting opening bracket
}

function generateParenthesis(n) {
    let str = "";
    let openCount = n, closeCount = n;
    arr = []; // reset the array to empty for each run
    gp(str, openCount, closeCount);
    return arr;
}

function main() {
    const n = 1;
    generateParenthesis(n);
    console.log(arr);
}

main();