// problem statement
// Given two dom trees A and B where B is clone 
// of A. You have reference of a node C which is 
// somewhere in tree A. Find same node C in tree B
// Hint: Use dom api (node.parentNode, node.childNodes)

(function() {
  const treeA = document.getElementById("a");
  const treeB = document.getElementById("b");
  const treeC = document.getElementById("C");

  function findIndex(nodeList, node) {
      for (let i = 0; i < nodeList.length; i++) {
          if (nodeList[i] === node) {
              return i;
          }
      }
      return -1;
  }
  function findCinB(A, B, C) {
    let tmp = C;
    const path = [];
    while (tmp.parentNode && tmp !== A) {
      let childNodes = tmp.parentNode.childNodes;
      path.push(findIndex(childNodes, tmp));
      tmp = tmp.parentNode;
    }
    console.log(path);
    printCinB(B, path.reverse());
  }

  function printCinB(B, path) {
    let tmp = B;
    for (let i = 0; i < path.length; i++) {
      const childNodes = tmp.childNodes;
      tmp = childNodes[path[i]];
    }
    console.log(tmp);
  }

  findCinB(treeA, treeB, treeC);
})();
