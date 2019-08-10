class Node:
    def __init__(self, val, level):
        self.right = None
        self.info = val
        self.left = None
        self.level = level

def in_order_traversal(root, distance_from_root, info_dict):
    if root is None:
        return
    if not info_dict.has_key(distance_from_root):
        info_dict[distance_from_root] = root
    elif info_dict[distance_from_root].level > root.level:
        info_dict[distance_from_root] = root
    in_order_traversal(root.left, distance_from_root - 1, info_dict)
    in_order_traversal(root.right, distance_from_root + 1, info_dict)

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
    info_dict = dict()
    in_order_traversal(root, 0, info_dict)
    arr = []
    for distance in info_dict:
        arr.append((info_dict[distance].info, distance))
    arr_sorted = sorted(arr, key=lambda n: n[1])
    for i in range(0, len(arr_sorted)):
        print arr_sorted[i][0],
    # print arr_sorted
    

main()

