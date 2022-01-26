function main(A) {
    let max_sum_subarr = [];
    let groups = [];
    let indexToSum = new Map();
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 0) {
            max_sum_subarr.push(A[i]);
            sum += A[i];
            console.log('in if' + A[i]);
        }
        if (max_sum_subarr.length > 0 && (A[i] < 0 || i === A.length - 1)) {
            groups.push(max_sum_subarr);
            indexToSum.set(groups.length, sum);
            max_sum_subarr = [];
            sum = 0;
            console.log('in else if' + A[i]);
        } else {
            console.log('in else' + A[i]);
        }
    }

    if (groups.length === 0) return;


    let max_sum = -1;
    let selected_key;
    console.log(groups, indexToSum);
    for (let key of indexToSum.keys()) {
        console.log(selected_key);
        if (indexToSum.get(key) > max_sum) {
            selected_key = key;
            max_sum = indexToSum.get(key);
        }
        else if (selected_key && indexToSum.get(key) === max_sum && groups[key - 1].length > groups[selected_key - 1].length) selected_key = key;
        else if (selected_key && indexToSum.get(key) === max_sum && key < selected_key) selected_key = key;

    }

    // console.log(indexToSum);
    console.log(groups[selected_key - 1]);


}
main([756898537, -1973594324, -2038664370, -184803526, 1424268980]);


