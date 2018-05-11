
# def binary_search(arr, num, left, right): #recursive implementation
#     if left > right:
#         return -1
#     mid = (left + right) // 2
#     if arr[mid] == num:
#         return mid
#     elif arr[mid] > num:
#         return binary_search(arr, num, left, mid - 1)
#     else:
#         return binary_search(arr, num, mid + 1, right)

# def binary_search(arr, num, left, right): #iterative implementation
#     while left <= right:
#         mid = (left + right) // 2
#         if arr[mid] == num:
#             return mid
#         elif arr[mid] > num:
#             right = mid - 1
#         else:
#             left = mid + 1
#     return -1

# def main():
#     arr = [1, 4, 7, 9, 44, 49, 56]
#     num = 44
#     index = binary_search(arr, num, 0, 6)
#     print(index)

# main()

class IceCream:
    def __init__(self, id, cost):
        self.id = id
        self.cost = cost

def get_ice_cream_object_arr(costArr):
    costIdArr = list()
    i = 0
    for i in range(len(costArr))
        costIdArr.append(IceCream(i + 1, costArr[i]))
    return costIdArr
def make_comparator()
def sort_ice_cream_obj_arr(costIdArr):
    sortedCostIdArr = sorted(costIdArr, cmp=make_comparator(cmpVal))
