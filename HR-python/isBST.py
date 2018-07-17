# https://www.hackerrank.com/challenges/is-binary-search-tree/problem


class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
  
#      3
#     / \
#    2   5
#   /   / \
#  1   4   6

def generate_tree():
    tree = node(3)
    tree.left = node(2)
    tree.right = node(5)
    tree.left.left = node(1)
    tree.right.left = node(4)
    tree.right.right = node(6)
    return tree

arr = list()
def in_order(root):
    if root == None: return
    in_order(root.left)
    # print (root.data)
    arr.append(root.data)
    in_order(root.right)
def main():
    tree = generate_tree()
    in_order(tree)
    if sorted(arr) == arr: print('Yes')   
    else: print('No')
    # print(arr)

main()
