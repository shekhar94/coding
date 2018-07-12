/*jshint esversion:6*/
main("4 8 2\n4 5 7\n6 1 6");


function main(input) {
    const ip_arr = input.split("\n");
    const given_square = ip_arr.map(row => {
        return row.split(" ").map(Number);
    });
    // console.log(given_square);
    console.log(findOptimizatedCost(given_square));
}

function findOptimizatedCost(given_square) {

    const possible_squares = [
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8]
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4]
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2]
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6]
        ],
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2]
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4]
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8]
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6]
        ]

    ];
    let optimized_cost = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < possible_squares.length; k++) {
        let temp_cost = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let val = possible_squares[k][i][j];
                if (val !== given_square[i][j]) {
                    temp_cost = temp_cost + Math.abs(val - given_square[i][j]);
                }
            }
        }
        if (optimized_cost > temp_cost) optimized_cost = temp_cost;
    }
    return optimized_cost;
}