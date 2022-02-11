// https://leetcode.com/problems/meeting-rooms-ii/submissions/
// Prefix sum approach
function minMeetingRooms(intervals) {
    // to keep the array size minimum (not necessary)
    const arrSize = intervals.reduce((acc, item) => {
        const [s, e] = item;
        if (acc < Math.max(s, e)) acc = Math.max(s, e);
        return acc;
    }, 0)

    const prefixSum = Array(arrSize + 1).fill(0);

    for (let i = 0; i < intervals.length; i++) {
        prefixSum[intervals[i][0]]++;
        prefixSum[intervals[i][1]]--;
    }

    let max = prefixSum[0];
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] += prefixSum[i - 1];
        max = Math.max(max, prefixSum[i]);
    }
    return max;
}

function main() {
    // const intervals = [[0, 30], [5, 10], [15, 20]];
    // const intervals = [[13, 15], [1, 13]];
    const intervals = [[9, 10], [4, 9], [4, 17]];
    console.log(minMeetingRooms(intervals));

}

main();