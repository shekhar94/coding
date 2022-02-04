function trap(height) {
    const maxLtoR = [];
    const maxRtoL = [];
    const len = height.length;

    if (len < 3) return 0;
    let maxTillLtoR = height[0];
    let maxTillRtoL = height[len - 1];

    for (let i = 0; i < len; i++) {
        if (height[i] > maxTillLtoR) maxTillLtoR = height[i];
        maxLtoR.push(maxTillLtoR);

        if (height[len - 1 - i] > maxTillRtoL) maxTillRtoL = height[len - 1 - i];
        maxRtoL[len - 1 - i] = maxTillRtoL;
    }

    let trappedWater = 0;
    for (let i = 1; i < len - 1; i++) {
        const min = Math.min(maxLtoR[i], maxRtoL[i]);
        if (min > height[i])
            trappedWater += min - height[i];
    }

    return trappedWater;
}

function main() {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    // const height = [4, 2, 0, 3, 2, 5];
    // const height = [2, 0, 2];
    // const height = [3, 0, 2, 0, 4];
    console.log(trap(height));
}

main();