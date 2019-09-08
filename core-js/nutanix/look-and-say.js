/* 
Look-and-say sequence
Write function to generate nth number of look-and-say sequence
*/
// 1, 11, 21, 1211, 111221, 312211, 13112221
function look_and_say(n) {
    const arr = ['1'];
    for (let i = 1; i < n; i++) {
        const prev = arr[i - 1];
        const current = generateNum(prev);
        arr.push(current);
    }
    console.log(arr);
}
function generateNum(prevNo) {
    let i = 0;
    let current_char = prevNo[0];
    let count = 0;
    let num = '';
    while (i < prevNo.length) {
        i++;
        if (prevNo[i] === current_char) {
            count++;
        } else {
            num = `${num}${count + 1}${current_char}`;
            current_char = prevNo[i];
            count = 0;
        }
    }
    return num;
}

look_and_say(7);
// 1, 11, 21, 1211, 111221, 312211, 13112221