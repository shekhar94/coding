// https://www.interviewbit.com/problems/disjoint-intervals/

function editorialSol(arr) {
    const sorted_arr = arr.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let endPos = sorted_arr[0][1];

    for (let i = 1; i < sorted_arr.length; i++) {
        if (endPos < sorted_arr[i][0]) {
            count++;
            console.log(sorted_arr[i]);
            endPos = sorted_arr[i][1];
        }
    }
    return count;
}

function maxDisjointIntervals(arr) {
    const sorted_arr = arr.sort((a, b) => a[1] - b[1]);

    // console.log(sorted_arr);
    if (arr.length === 1) return 1;

    let first = 0, second = 1;
    let selectedIndices = [];

    while (second < arr.length) {
        const [, end] = sorted_arr[first];
        const [startN, endN] = sorted_arr[second];
        const lastEntry = selectedIndices[selectedIndices.length - 1];

        if (end < startN) {
            if (lastEntry !== first && second === (arr.length - 1)) {
                // only two entry and both are disjoint intervals
                selectedIndices.push(first);
                selectedIndices.push(second);
            }
            else if (lastEntry === first) selectedIndices.push(second);
            else selectedIndices.push(first);

            // disjoint intervals
            first = second;
            second += 1;
        } else {
            // overlapping intervals
            // use greedy approach to select one which has lower end
            if (end < endN) {
                // select first
                if (lastEntry !== first)
                    selectedIndices.push(first);

                second += 1;
            } else if (end > endN) {
                // select second
                selectedIndices.push(second);
                first = second;
                second += 1;
            } else second += 1;
        }

    }
    selectedIndices.forEach(index => { console.log(sorted_arr[index]); })
    return selectedIndices.length;
}

function main() {
    // const arr = [
    //     [1, 4],
    //     [2, 3],
    //     [4, 6],
    //     [8, 9],
    // ];
    // const arr = [
    //     [1, 9],
    //     [2, 3],
    //     [5, 7],
    // ];
    // const arr = [
    //     [3, 5],
    //     [11, 15],
    // ];

    const arr = [
        [3, 13],
        [7, 7],
        [3, 10],
        [4, 8],
        [7, 8],
        [9, 12],
        [3, 6],
        [7, 12],
        [4, 10],
        [3, 8],
        [5, 11],
        [9, 10],
        [3, 7],
        [4, 4],
        [7, 15],
        [2, 9],
    ];
    // console.log(maxDisjointIntervals(arr));
    console.log(editorialSol(arr));
}

main();