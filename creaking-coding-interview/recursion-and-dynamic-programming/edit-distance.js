// https://www.hackerrank.com/challenges/abbr/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
// function abbreviation(a, b) {
//     if (a.length < b.length) return 'NO';
//     else {
//         let a_pointer = 0;
//         let b_pointer = 0;
//         while (a_pointer < a.length) {
//             if (checkEqual(a[a_pointer], b[b_pointer])) {
//                 a_pointer++;
//                 b_pointer++;
//             } else {
//                 if (checkUpperCase(a[a_pointer])) {
//                     return 'NO';
//                 }
//                 a_pointer++; // delete that char
//             }
//         }
//         if (a_pointer < a.length) {
//             while (a_pointer < a.length) {
//                 if (checkUpperCase(a[a_pointer])) {
//                     return 'NO';
//                 }
//                 a_pointer++;
//             }
//         }
//         if (a_pointer === a.length && b_pointer === b.length) return 'YES';
//         return 'NO';
//     }
// }
// function abbreviation(a, b, table) {
//     if (a.length > 0 && b.length === 0) {
//         // true if all chars in a are lowercase
//         for (let i = 0; i < a.length; i++) {
//             if (checkUpperCase(a[i])) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     if (a.length === 0 && b.length > 0) {
//         return false;
//     }
//     if (a.length === 0 && b.length === 0) {
//         return true;
//     }

//     if (a[a.length - 1] === b[b.length - 1]) {
//         return abbreviation(a.substring(0, a.length - 1), b.substring(0, b.length - 1), table);
//     }
//     if (a[a.length - 1].toUpperCase() === b[b.length - 1]) {
//         return (abbreviation(a.substring(0, a.length - 1), b.substring(0, b.length - 1), table) ||
//             abbreviation(a.substring(0, a.length - 1), b.substring(0, b.length), table))
//     }
//     return checkUpperCase(a[a.length - 1]) ? false : abbreviation(a.substring(0, a.length - 1), b.substring(0, b.length), table)
// }


function abbreviation(a, b, table, a_len, b_len) {
    if (table[a_len][b_len]) return table[a_len][b_len];
    if (a_len > 0 && b_len === 0) {
        // true if all chars in a are lowercase
        for (let i = 0; i < a_len; i++) {
            if (checkUpperCase(a[i])) {
                table[a_len][b_len] = false;
                return table[a_len][b_len];
            }
        }
        table[a_len][b_len] = true;
        return table[a_len][b_len];
    }
    if (a_len === 0 && b_len > 0) {
        table[a_len][b_len] = false;
        return table[a_len][b_len];
    }
    if (a_len === 0 && b_len === 0) {
        table[a_len][b_len] = true;
        return table[a_len][b_len];
    }

    if (a[a_len - 1] === b[b_len - 1]) {
        table[a_len - 1][b_len - 1] = abbreviation(a, b, table, a_len - 1, b_len - 1);
        return table[a_len - 1][b_len - 1];
    }
    if (a[a_len - 1].toUpperCase() === b[b_len - 1]) {
        table[a_len - 1][b_len - 1] = abbreviation(a, b, table, a_len - 1, b_len - 1);
        table[a_len - 1][b_len] = abbreviation(a, b, table, a_len - 1, b_len)
        return (table[a_len - 1][b_len - 1] ||
            table[a_len - 1][b_len]);
    }
    table[a_len - 1][b_len] = abbreviation(a, b, table, a_len - 1, b_len);
    return checkUpperCase(a[a_len - 1]) ? false : table[a_len - 1][b_len];
}

function checkUpperCase(char) {
    if (char === char.toUpperCase()) return true;
    return false;
}
function checkEqual(str1, str2) {
    if ((str1 === str2) ||
        (str1.toUpperCase() === str2)) return true;
    return false;
}
function main() {
    const table = [];
    for (let i = 0; i <= 5; i++) {
        table.push([]);
    }
    console.log(abbreviation('daBcd', 'ABC', table, 5, 3));
    // console.log(abbreviation('KXzQ', 'K'));
}
main();



