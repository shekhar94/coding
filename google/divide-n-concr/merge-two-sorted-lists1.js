var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode();
    let [l1, l2, tmp] = [list1, list2, dummy];
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tmp.next = l1;
            l1 = l1.next;
        } else {
            tmp.next = l2;
            l2 = l2.next;
        }
        tmp = tmp.next;
    }
    if (l1) tmp.next = l1;
    if (l2) tmp.next = l2;

    return dummy.next;
};