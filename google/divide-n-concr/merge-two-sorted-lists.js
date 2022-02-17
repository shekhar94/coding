

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1) tail.next = list1;
    if (list2) tail.next = list2;
    return dummy.next;
};

function main() {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    console.log(JSON.stringify(mergeTwoLists(list1, list2)));
}

main();