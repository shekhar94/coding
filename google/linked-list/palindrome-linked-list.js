var isPalindrome = function (head) {
    let tmp = head;
    const list = [];
    while (tmp) {
        list.push(tmp.val);
        tmp = tmp.next;
    }
    function isPalindrome(arr) {
        let [l, r] = [0, arr.length - 1]
        while (l < r) {
            if (arr[l] !== arr[r]) return false;
            l++; r--;
        }
        return true;
    }
    return isPalindrome(list);
};

var isPalindrome = function (head) {
    let [fast, slow] = [head, head];
    // To find middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the 2nd half of the linked list to get a new reversed list
    let [curr, prev] = [slow, null];
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let [left, right] = [head, prev];
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};