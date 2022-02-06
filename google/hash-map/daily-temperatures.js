// https://leetcode.com/problems/daily-temperatures/submissions/

// There are multiple approaches

// Map based approach
function getTempratureMap(temperatures) {
    const map = [];
    for (let i = 0; i < temperatures.length; i++) {
        const temperature = temperatures[i];
        if (!map[temperature]) {
            map[temperature] = [];
        }
        map[temperature].push(i);
    }
    return map;
}

function dailyTemperatures(temperatures) {
    // using temprature as index
    const map = getTempratureMap(temperatures);

    console.log('map: ', map);

    const result = [];
    for (let i = 0; i < temperatures.length; i++) {
        const temperature = temperatures[i];
        console.log('temperature: ', temperature);
        let nextWarmDay;

        for (let j = temperature + 1; j < map.length; j++) {
            if (map[j]) {
                nextWarmDay = map[j].find(index => index > i);

                if (nextWarmDay && result[i]) {
                    result[i] = Math.min(result[i], nextWarmDay - i);
                } else if (nextWarmDay) {
                    result[i] = nextWarmDay - i;
                }
            }
        }
        if (!result[i]) result[i] = 0;
        nextWarmDay = false;
    }
    return result;
}


// stack based simple approach
function dailyTemperatures1(temperatures) {
    let stack = [];
    const nextWarmDay = [];
    for (let i = 0; i < temperatures.length; i++) {
        const currE = temperatures[i];
        let j = i + 1;
        while (j < temperatures.length && temperatures[j] <= currE) {
            stack.push(temperatures[j]); j++;
        }
        if (j < temperatures.length) nextWarmDay[i] = stack.length + 1;
        else nextWarmDay[i] = 0;
        stack = [];
    }
    return nextWarmDay;
}


// stack based efficient approach
function isEmpty(stack) {
    return stack.length === 0;
}

function top(stack) {
    return stack[stack.length - 1];
}

function dailyTemperatures2(temperatures) {
    const stack = [];
    const len = temperatures.length;
    const nextWarmDay = temperatures.map(() => 0);

    for (let i = 0; i < len; i++) {
        while (!isEmpty(stack) && temperatures[top(stack)] < temperatures[i]) {
            const stackTop = top(stack);
            nextWarmDay[stackTop] = i - stackTop;
            stack.pop();
        }
        stack.push(i);
    }

    return nextWarmDay;
}


function main() {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    // const temperatures = [30, 60, 90];
    // const temperatures = [30, 40, 50, 60];
    // const temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78]; // [3,1,1,2,1,1,0,1,1,0]
    console.log(dailyTemperatures2(temperatures));
}

main();