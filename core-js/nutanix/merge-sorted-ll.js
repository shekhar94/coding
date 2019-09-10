function merge(ll1, ll2) {
    // merge ll2 into ll1 and finally return ll1 
    let ptr1 = ll1.head;
    let ptr2 = ll2.head;
    let tmp, prev = null; // for keeping the node to be added
    while (ptr1 || ptr2) {
        if (ptr1 && ptr2) {
            // compare data from both lists to fix position of a node
            if (ptr1.data >= ptr2.data) {
                // keep reference of next node of ll1
                tmp = ptr1;
                ptr1 = ptr1.next;
                tmp.next = prev;
                prev = tmp;
                // console.log(`tmp:: ${JSON.stringify(tmp)}, ptr1:: ${JSON.stringify(ptr1)}, prev:: ${JSON.stringify(prev)}`)
            } else {
                tmp = ptr2;
                ptr2 = ptr2.next;
                tmp.next = prev;
                prev = tmp;
                // console.log(`tmp:: ${JSON.stringify(tmp)}, ptr1:: ${JSON.stringify(ptr2)}, prev:: ${JSON.stringify(prev)}`)
            }
        } else {
            if (ptr1) {
                // process next node from ll1 as ll2 is already processed
                tmp = ptr1;
                ptr1 = ptr1.next;
                tmp.next = prev;
                prev = tmp;
                // console.log(`tmp:: ${JSON.stringify(tmp)}, ptr1:: ${JSON.stringify(ptr1)}, prev:: ${JSON.stringify(prev)}`)
            } else {
                // process next node from ll2 as ll1 is already processed
                tmp = ptr2;
                ptr2 = ptr2.next;
                tmp.next = prev;
                prev = tmp;
                // console.log(`tmp:: ${JSON.stringify(tmp)}, ptr2:: ${JSON.stringify(ptr2)}, prev:: ${JSON.stringify(prev)}`)
            }
        }
    }
    ll1.head = prev;
    return ll1;
}

function main() {
    // ll1: 30->25->20->18->14
    // ll2: 22->19->15->10->7

    // final value of 
    // ll1: 7->10->14->15->18->19->20->22->25->30
    const ll1 = {
        head: {
            data: 30,
            next: {
                data: 25,
                next: {
                    data: 20,
                    next: {
                        data: 18,
                        next: {
                            data: 14,
                            next: null
                        }
                    }
                }
            }
        }
    }
    const ll2 = {
        head: {
            data: 35,
            next: {
                data: 19,
                next: {
                    data: 15,
                    next: {
                        data: 10,
                        next: {
                            data: 7,
                            next: {
                                data: 1,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
    merge(ll1, ll2);
    console.log(JSON.stringify(ll1));
}


main();