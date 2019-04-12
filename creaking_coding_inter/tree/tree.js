/* 
Binary search tree: A binary search tree is a binary tree in which every node 
fits a specific ordering property: all left descendents <= n < all right descendents.
This must be true for each node n.

The definition of BST can vary slightly with respect to equality. Under some definitions
, the tree can not have duplicate values. In others, the duplicate values will be on the 
right or can be on either side. All are valid definitions.

Balanced vs. Unbalanced:
One way to think about it is that a balanced tree really means something more like
not terribly imbalanced. It's balanced enough to ensure O(logn n) times for insert 
and find, but it's not necessarily as balanced as it could be.
Two common types of balanced trees are red-black trees and AVL trees. 

*/