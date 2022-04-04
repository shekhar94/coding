/**
 * 
 * catsanddogs
 * 
 * catscats -> valid
 * 
 * ['cats', 'dogs', 'and']
 */

function recursive(str, map) {
    if (str.length === 0) return true;

    let partialSol = false;
    for (let key of [...map.keys()]) {
        partialSol = partialSol || recursive(str.substring(0, str.length - key.length + 1), map);
    }
    return partialSol;
}


function memoized(str, map, dp) {
    if (str.length === 0) return true;
    if (dp.has(str)) return dp.get(str);

    let partialSol = false;
    for (let key of [...map.keys()]) {
        partialSol = partialSol || memoized(str.substring(0, str.length - key.length + 1), map);
        dp.set(str, partialSol);
    }
    return partialSol;
}

function validString(str, arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], true);
    }

    let start = 0;
    for (let i = 1; i < str.length; i++) {
        if (checkWord(start, i, str, map)) {
            start = i;
            if (i === str.length - 1) start = str.length;
        }
    }

    return start === str.length;
}

function checkWord(start, end, str, map) {
    return map.has(str.substring(start, end));
}



fun();

var fun = function () {
    console.log('dfd');
}

fun();
function fun() {
    console.log('dfs');
}

fun();
