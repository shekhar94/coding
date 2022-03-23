var hasCycle = function (head) {
    let ptr1 = head, ptr2 = head;

    while (ptr1 && ptr2 && ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
        if (ptr1 === ptr2) return true;
    }
    return false
};