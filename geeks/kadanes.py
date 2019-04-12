# https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0
# def get_max_sum(arr):
#     max_ending_here = max_so_far = arr[0]
#     for i in range(1, len(arr)):
#         max_ending_here = max(arr[i], arr[i] + max_ending_here)
#         max_so_far = max(max_so_far, max_ending_here)
#     return max_so_far

# def main():
#     result = list()
#     t = int(input())
#     for i in range(t):
#         n = int(raw_input())
#         li_str = raw_input()
#         print(li_str)
#         li = list(map(int, li_str.strip().split(' ')))
#         print(li)
#         max_sum = get_max_sum(li)
#         result.append(max_sum)
#     for i in range(len(result)):
#         print(result[i])
#     # arr = [-1, 2, 3, 4, -5, 9]

# main()

def get_max_sum(arr):
    max_ending_here = max_so_far = arr[0]
    for i in range(1, len(arr)):
        max_ending_here = max(arr[i], arr[i] + max_ending_here)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
def main():
    result = list()
    t = int(input())
    for i in range(t):
        n = int(input())
        li_str = input()
        li = list(map(int, li_str.strip().split(' ')))
        max_sum = get_max_sum(li)
        result.append(max_sum)
    for i in range(len(result)):
        print(result[i])

main()