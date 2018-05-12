
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


#  https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem 
#  Author: Shekhar Suman 
class IceCream:
    def __init__(self, id, cost):
        self.id = id
        self.cost = cost

def get_ice_cream_object_arr(costArr):
    costIdArr = list()
    i = 0
    for i in range(len(costArr)):
        costIdArr.append(IceCream(i + 1, costArr[i]))
    return costIdArr
def comparator(cost1, cost2):
    if cost1 > cost2:
        return 1
    elif cost1 < cost2:
        return -1
    else:
        return 0
def sort_ice_cream_obj_arr(costIdArr):
    sortedCostIdArr = sorted(costIdArr, key=lambda iceCream: iceCream.cost)
    print (sortedCostIdArr)
    return sortedCostIdArr

def print_result(sortedCostIdArr, i, j):
    if (sortedCostIdArr[i].id < sortedCostIdArr[j].id):
        print (sortedCostIdArr[i].id, sortedCostIdArr[j].id)
    else:
        print (sortedCostIdArr[j].id, sortedCostIdArr[i].id)


def binary_search(arr, num, left, right):
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid].cost == num:
        return mid
    elif arr[mid].cost > num:
        return binary_search(arr, num, left, mid - 1)
    else:
        return binary_search(arr, num, mid + 1, right)

def find_ice_creams(noOfFlavor, sortedCostIdArr, money):
    isMatchFound = False
    i = 0
    while (isMatchFound is False) & (i < noOfFlavor):
        cost1 = sortedCostIdArr[i].cost
        cost2 = money - cost1
        j = binary_search(sortedCostIdArr, cost2, i + 1, noOfFlavor - 1)
        if j != -1:
            print_result(sortedCostIdArr, i, j)
            isMatchFound = True
        i += 1

def main():
    money = 4
    noOfFlavor = 5
    costArr = [1,4,5,3,2]
    costIdArr = get_ice_cream_object_arr(costArr)
    sortedCostIdArr = sort_ice_cream_obj_arr(costIdArr)
    find_ice_creams(noOfFlavor, sortedCostIdArr, money)

main()

