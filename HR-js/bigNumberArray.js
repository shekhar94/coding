function main(input) {
    var iparr = input.split("\n"),
        t = Number(iparr[0]),
        pointer = 1;
    for (let i = 0; i < t; i++) {
        let nq = iparr[pointer].split(" ").map(Number);
        checkQueryResult(nq[0], nq[1], iparr.slice(pointer + 1, pointer + 1 + nq[1]));
        pointer = pointer + 1 + nq[1];
    }
}

function checkQueryResult(n, q, queryArr) {
    // console.log(n, q, queryArr);
    let arr = new Array(n).fill(new Number("0"));
    queryArr.forEach((query, index) => {
        let queryArr = query.split(" ").map(Number);
        if (queryArr[0] === 1) {
            flipBits(arr, ...queryArr.slice(1));
        } else {
            if (checkXthEdYth(arr, ...queryArr.slice(1))) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    });
}

function checkXthEdYth(arr, x, y) {
    if (arr[x] === arr[y]) return true;
    else return false;
}

function flipBits(arr, x, y, l, r) {
    for (let i = x; i <= y; i++) {
        arr[i] = flipLthtoRthBit(new Number(arr[i]), l, r);
    }
}

function flipLthtoRthBit(num, l, r) {
    for (let i = l; i <= r; i++) {
        num ^= (1 << i);
    }
    return num;
}
main("1\n2 4\n1 1 1 5 6\n2 1 2\n1 2 2 5 6\n2 1 2");