// // Given a string of braces(brackets) - write a function to check if it is balanced 

// // for example
// // [{()}] -> true
// // [{}()] - > true
// // }[()] -> false
// // [{)(}] -> false
// // [{}() -> false
// // [()]{}{[()()]()} -> true



// function checkValidString(str) {
//  const stack = [];
//  const map = {
//    '}': '{',
//    ']': '[',
//    ')': '(',
//  }
//  for (let i = 0; i < str.length; i++) {
//    const c = str[i];
//    if (map[c]) {
//      if (stack.length === 0) return false;

//      const top = stack[stack.length - 1];
//      if (top === map[c]) stack.pop(); 
//    } else {
//      stack.push(c);
//    }
//  }

//  return stack.length === 0;
// }
// // [{()}] -> true
// // [{}()] - > true
// // }[()] -> false
// // [{)(}] -> false
// // [{}() -> false
// // [()]{}{[()()]()} -> true
// console.log(checkValidString("[{()}]"));
// console.log(checkValidString("[{}()]"));
// console.log(checkValidString("}[()]"));
// console.log(checkValidString("[{)(}]"));
// console.log(checkValidString("[{}()"));
// console.log(checkValidString("[()]{}{[()()]()}"));



//==========================

// From the given collection which represents the directory hierarchy, get folder/file paths from the passed file folder Name

// folder structure details - not arranged in any order
const hierarchy = [
    {
        name: 'services',
        id: 1,              // unique id
        parent: 0,          // reference to parent folder
    },
    {
        name: 'components',
        id: 2,
        parent: 0,
    },
    {
        name: 'root',
        id: 0,
    },
    {
        name: 'helpers',
        id: 5,
        parent: 1,
    },
    {
        name: 'init.service.js',
        id: 3,
        parent: 1,
    },
    {
        name: 'init.component.js',
        id: 4,
        parent: 2,
    },
    {
        name: 'strings.helper.js',
        id: 6,
        parent: 5,
    }
]

// folder path for strings.helper.js -> root/services/helpers/strings.helper.js
// folder path for services -> root/services/
// folder path for components -> root/components/

// {0: [{id: 1} , {id: 2}]}

function helper(node, hirarchy, currentPath) {
    console.log(currentPath);
    if (node.parent === undefined) {
        console.log("in root");
        return `${node.name}/${currentPath}`;
    }

    const parentId = node.parent;
    console.log(parentId);
    const parentNode = hirarchy.find(item => item.id === parentId);
    return helper(parentNode, hirarchy, `${node.name}/${currentPath}`);
}

function getFolderPath(fileName, hierarchy) {
    //should return path
    const startNode = hierarchy.find(node => node.name === fileName);
    console.log(startNode);
    return helper(startNode, hierarchy, `${fileName}`);
}






getFolderPath('strings.helper.js', hierarchy) // root/services/helpers/strings.helper.js
getFolderPath('services', hierarchy) // root/services/
getFolderPath('components', hierarchy) // root/components/



  // const map = {};

  //  for (let i = 0; i < hierarchy.length; i++) {
  //    const node = hierarchy[i];
  //    if (node.parent || node.parent === 0) {
  //     if (map[node.parent] || map[node.parent] === 0) {
  //       map[node.parent].push(node);
  //     } else {
  //       map[node.parent] = [node];
  //     }

  //    } 
  //  }