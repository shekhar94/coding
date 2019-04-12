# from functools import cmp_to_key
# class Player:
#     def __init__(self, name, score):
#         self.name = name
#         self.score = score    
        
#     def comparator(a, b):
#         if (a.score < b.score):
#             return 1
#         if ((a.score == b.score) & (a.name > b.name)):
#             return 1
#         return -1

# n = int(input())
# data = []
# for i in range(n):
#     name, score = input().split()
#     score = int(score)
#     player = Player(name, score)
#     data.append(player)
    
# data = sorted(data, key=cmp_to_key(Player.comparator))
# for i in data:
#     print(i.name, i.score)


def quick_sort(arr, left, right):
    if left >= right:
        return
    pivot = arr[(left + right) / 2]
    index = partition(arr, left, right, pivot)
    quick_sort(arr, left, index - 1)
    quick_sort(arr, index, right)
    print(arr)

def partition(arr, left, right, pivot):
    while left < right:
        while arr[left] < pivot:
            left += 1
        while arr[right] > pivot:
            right -= 1
        if left <= right:
            swap(arr, left, right)
            left += 1
            right -= 1
    return left

def swap(arr, left, right):
    tmp = arr[left]
    arr[left] = arr[right]
    arr[right] = tmp

quick_sort([4,5,6,1,2,3], 0, 5)

