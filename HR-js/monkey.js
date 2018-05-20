/* 
    Author: Shekhar Suman 20/05/2018
*/
/* 
    Driver function
*/
// test cases 
main("3 100.0\n1 10 5 5\n5 10 5 1\n8 10 5 4");
// main("3 100.0\n1 10 5 20\n5 10 5 20\n8 10 5 20");


function main(input) {
    let ip_arr = input.split("\n");
    let nc_arr = ip_arr[0].split(" ").map(Number);
    let no_of_trees = nc_arr[0];
    let jumping_capacity = nc_arr[1];
    let tree_node_arr = [];
    class Tree {
        constructor(x, y, no_of_monkeys, max_no_of_monkeys_that_can_jump) {
            this.x = x;
            this.y = y;
            this.no_of_monkeys = no_of_monkeys;
            this.max_no_of_monkeys_that_can_jump = max_no_of_monkeys_that_can_jump;
        }
    }
    for (let i = 1; i < ip_arr.length; i++) {
        xymt_arr = ip_arr[i].split(' ').map(Number);
        tree_node_arr.push(new Tree(xymt_arr[0], xymt_arr[1], xymt_arr[2], xymt_arr[3]));
    }

    findTrees(tree_node_arr, jumping_capacity);

}

function findTrees(tree_node_arr, jumping_capacity) {
    let index_arr = []; // where no_of_monkeys > max_no_of_monkeys_that_can_jump
    for (let i = 0; i < tree_node_arr.length; i++) {
        if (tree_node_arr[i].no_of_monkeys > tree_node_arr[i].max_no_of_monkeys_that_can_jump) {
            index_arr.push(i); // if more than one tree has this situation then meeting no possible
            if (index_arr.length > 1) {
                console.log(-1);
                break;
            }
        }
    }
    if (index_arr.length === 1) {
        // all monkeys has to gather at index_arr[0] tree
        // check for euclidean distance
        let index = index_arr[0]; // tree where all monkeys will gather
        for (let i = 0; i < tree_node_arr.length; i++) {
            if (i !== index && euclideanDistance(tree_node_arr[index], tree_node_arr[i]) > jumping_capacity) {
                console.log(-1);
                return;
            }
        }
        console.log(index);
    }
    let distance_matrix = [];
    for (let i = 0; i < tree_node_arr.length; i++) {
        if (!distance_matrix[i]) {
            distance_matrix[i] = [];
        }
        for (let j = i; j < tree_node_arr.length; j++) {
            let distance = euclideanDistance(tree_node_arr[i], tree_node_arr[j]);
            distance_matrix[i][j] = distance;
            if (!distance_matrix[j]) { // if distance_matrix[j] is undefined not yet initialized
                distance_matrix[j] = [];
            }
            distance_matrix[j][i] = distance;
        }
    }
    let tree_on_which_gathering_possible = [];
    let possible;
    for (let i = 0; i < tree_node_arr.length; i++) {
        possible = true;
        for (let j = 0; j < tree_node_arr.length; j++) {
            if (distance_matrix[i][j] > jumping_capacity) {
                possible = false;
                break;
            }
        }
        if (possible) {
            tree_on_which_gathering_possible.push(i);
        }
    }
    console.log(tree_on_which_gathering_possible.join(' '));
}

/* 
    Get the quclidean distance between two points in 2d plane
*/
function euclideanDistance(point1, point2) {
    return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
}