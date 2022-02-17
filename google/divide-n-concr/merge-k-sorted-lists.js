function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// O(nlogk)
// https://www.youtube.com/watch?v=q5a5OiGbT6Q
function mergeKLists(lists) {
    if (!lists || lists.length == 0) return null;

    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null
            mergedList.push(mergeLists(l1, l2));
        }
        lists = mergedList;
    }

    return lists[0];
}

function mergeLists(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next
    }
    if (l1) tail.next = l1;
    if (l2) tail.next = l2;

    return dummy.next;
}

function main() {
    const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const list3 = new ListNode(2, new ListNode(6));

    const lists = [list1, list2, list3];
    console.log(JSON.stringify(mergeKLists(lists)));
}

main();