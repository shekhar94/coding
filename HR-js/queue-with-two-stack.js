function main(input) {
  const ip_arr = input.split("\n");
  const q = Number(ip_arr[0]);
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i <= q; i++) {
    const query = ip_arr[i].split(" ").map(Number);
    switch (query[0]) {
      case 1:
        // enqueue
        enqueue(stack1, query[1]);
        break;
      case 2:
        // dequeue
        dequeue(stack1, stack2);
        break;
      case 3:
        // print
        print(stack1, stack2);
    }
  }
}

function enqueue(stack1, num) {
  stack1.push(num);
}

function dequeue(stack1, stack2) {
  // when stack2 is empty all elements from stack1
  // can be pushed on stack2
  // the last element on stack2 represents first element of queue
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}

function print(stack1, stack2) {
  const ele = dequeue(stack1, stack2);
  console.log(ele);
  stack2.push(ele);
}

main("10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2");
