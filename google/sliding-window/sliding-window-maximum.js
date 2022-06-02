// Monotonically Decreasing queue
// O(n) time using dequeue
var maxSlidingWindow = function (nums, k) {
    const res = [];
    const queue = [];
    let [l, r] = [0, 0];

    while (r < nums.length) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
            queue.pop();
        }
        queue.push(r);
        if (l > queue[0]) queue.shift();

        if (r + 1 >= k) {
            res.push(nums[queue[0]]);
            l += 1;
        }
        r += 1;
    }
    return res;
}