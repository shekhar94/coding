// https://www.hackerrank.com/contests/justcode/challenges/lru-implementtion
// https://www.hackerrank.com/contests/justcode/challenges/lru-implementtion/submissions/code/1316358621

// N: no of elements
// S: max. capacity of cache
// a[i]: N no. of integers

// 1 _ _ _      1
// 2 1 _ _      2
// 3 2 1 _      3
// 2 3 1 _      3
// 5 2 3 1      4
// 3 5 2 1      4
// 4 3 5 2      5
// 5 4 3 2      5
// 8 5 4 3      6
// 9 8 5 4      7
class LRUCache {
    constructor(max_capacity) {
        this.max_capacity = max_capacity;
        this.map = new Map();
        this.queue = [];
    }
    refer(num) {
        let page_fault = 0;
        if (!this.map.has(num)) {
            page_fault = 1;
            if (this.queue.length === this.max_capacity) {
                // remove one from end
                const [del_num] = this.queue.splice(this.queue.length - 1, 1);
                this.map.delete(del_num);
            }
        } else {
            const index = this.queue.findIndex(ele => ele === num);
            this.queue.splice(index, 1);
        }
        this.map.set(num, true);
        this.queue.unshift(num);
        return page_fault;
    }
    display() {
        return this.queue;
    }
}


function main(input) {
    const ip_arr = input.split('\n');
    const [N, S] = ip_arr[0].split(' ').map(Number);
    let arr = ip_arr[1].split(' ').map(Number);
    if (ip_arr.length > 2) {
        // For handling different input formats
        arr = [];
        for (let i = 1; i < ip_arr.length; i++) {
            arr.push(Number(ip_arr[i]));
        }
    }
    const lruCache = new LRUCache(S);
    let page_faults = 0;
    for (let ele of arr) {
        page_faults += lruCache.refer(ele);
    }
    console.log(page_faults);
    console.log(lruCache.display().join(' '));
}

main("10 4\n1 2 3 2 5 3 4 5 8 9");