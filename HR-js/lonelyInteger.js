main("3\n1 1 2");

function main(input) {
    let ip_arr = input.split('\n');
    let n = Number(ip_arr[0]);
    let A = ip_arr[1].split(' ').map(Number);
    findLonelyInteger(A);
}

function findLonelyInteger(A) {
    let map = new Map();
    for (var i = 0; i < A.length; i++) {
        if (map.has(A[i]) && map.get(A[i]) === 1) {
            map.set(A[i], 2);
        } else {
            map.set(A[i], 1);
        }
    }
    map.forEach(function(value, key) {
        if (value === 1) {
            console.log(key);
            return;
        }
    });
}