import math
def find_no_of_odd_int(start, end):
    if end % 2 == 1: return (end - 1) / 2
    else: return (end / 2)

def get_old_arr(n, arr):
    old_arr = []
    old_count = 0
    for i in range(0, n):
        no_of_odd_ints = find_no_of_odd_int(1, arr[i]) 
        if(no_of_odd_ints is not 0 and arr[i] % no_of_odd_ints is 0):
            old_count += 1
        old_arr.append(old_count)
    return old_arr

def find_no_of_operations(n, arr, q):
    old_arr = get_old_arr(n, arr)
    for i in range(0, q):
        lr = list(map(int, input().split(' ')))
        old_count = old_arr[lr[1] - 1] - old_arr[lr[0] - 1] + 1
        # for j in range(lr[0] - 1, lr[1]):
        #     if (old_arr[j]):
        #         old_count += 1
        # print ('old:', old_count)
        required_old_count = math.ceil((lr[1] - lr[0] + 1) / 2.0)
        if (old_count < required_old_count):
            print(required_old_count - old_count)
        else: print(0)

t = int(input())
for i in range(0, t):
    find_no_of_operations(int(input()), list(map(int, input().split(' '))), int(input()))
    
