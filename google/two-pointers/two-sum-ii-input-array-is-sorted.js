var twoSum = function (numbers, target) {
    const l = numbers.length;
    let [left, right] = [0, l - 1];

    while (true) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        if (sum > target) right--;
        else left++;
    }
};