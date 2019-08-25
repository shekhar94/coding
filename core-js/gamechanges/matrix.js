/*Given a matrix

1 0 0 1 0
0 0 1 0 1
0 0 0 1 0
1 0 1 0 1

Format: ['10010','00101','00010','10101']
Print the largest rectangle in the matrix if any.

Output:

1 0 1
0 1 0
1 0 1
Format: ['101', '010', '101']

-----------------------------------------------------*/

function findLargestRect(m) {
    const rows = m.length;
    const columns = m[0].length;
    let biggest = -1;
    for (let y1 = 0; y1 < rows; y1++)
        for (let x1 = 0; x1 < columns; x1++) {
            if (m[y1][x1] == '1')
                for (let y2 = y1 + 1; y2 < rows; y2++) {
                    for (let x2 = x1 + 1; x2 < columns; x2++) {
                        if (m[y1][x2] == '1' &&
                            m[y2][x1] == '1' &&
                            m[y2][x2] == '1') {
                            if (biggest === -1) {
                                biggest = { x1, x2, y1, y2 };
                            } else if ((x2 - x1) * (y2 - y1) > (biggest.x2 - biggest.x1) * (biggest.y2 - biggest.y1)) {
                                biggest = { x1, x2, y1, y2 };
                            }
                        }
                    }

                }
        }

    return biggest;
}
function printMatrix(m, x1, x2, y1, y2) {
    for (let i = y1; i <= y2; i++) {
        console.log(m[i].substring(x1, x2 + 1));
    }
}

function main() {
    const m = ['10010', '00101', '00010', '10101'];
    const largest = findLargestRect(m);
    if (largest !== -1) {
        printMatrix(m, largest.x1, largest.x2, largest.y1, largest.y2);
    } else {
        console.log(largest);
    }
}
main();
