# https://www.hackerrank.com/challenges/tree-top-view/copy-from/14110629

class Node:
    def __init__(self, val, level):
        self.right = None
        self.info = val
        self.left = None
        self.level = level

def top_view(root):
    queue = []
    node_distance_dict = dict()
    root.hd = 0
    queue.append(root)
    while queue:
        tmp = queue.pop(0)
        if not node_distance_dict.has_key(tmp.hd):
            node_distance_dict[tmp.hd] = tmp
        if tmp.left:
            tmp.left.hd = tmp.hd - 1
            queue.append(tmp.left)
        if tmp.right: 
            tmp.right.hd = tmp.hd + 1
            queue.append(tmp.right)
    return node_distance_dict
    

def main():
    root = Node(1, 0)
    root.left = Node(2, 1)
    root.right = Node(3, 1)
    root.left.left = Node(4, 2)
    root.left.right = Node(5, 2)
    root.right.right = Node(6, 2)
    root.left.right.right = Node(7, 3)
    root.left.right.right.right = Node(8, 4)
    root.left.right.right.right.right = Node(9, 5)
    # print(root.right.right.data)
    info_dict = top_view(root)
    arr = []
    for distance in info_dict:
        arr.append((info_dict[distance].info, distance))
    arr_sorted = sorted(arr, key=lambda n: n[1])
    for i in range(0, len(arr_sorted)):
        print arr_sorted[i][0],
    

main()

