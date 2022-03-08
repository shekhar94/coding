var deleteDuplicates = function (head) {
    let curr = head;
    while (curr && curr.next) {
        let next = curr.next;
        if (next.val === curr.val) {
            curr.next = next.next;
        } else curr = curr.next;
    }
    return head;
};