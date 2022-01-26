// https://www.interviewbit.com/problems/majority-element/

function majorityEle(A) {
    // const minCount = Math.floor(A.length / 2);
    const countMap = new Map();

    for (let i = 0; i < A.length; i++) {
        if (countMap.has(A[i])) countMap.set(A[i], countMap.get(A[i]) + 1);
        else countMap.set(A[i], 1);
    }

    let selectedKey;

    for (let key of countMap.keys()) {
        if (!selectedKey) selectedKey = key;
        if (countMap.get(key) > countMap.get(selectedKey)) selectedKey = key;
    }
    console.log(selectedKey);
}

// majorityEle([2, 1, 2]);
majorityEle([2, 1, 1]);