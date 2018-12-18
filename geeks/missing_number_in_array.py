# https://practice.geeksforgeeks.org/problems/missing-number-in-array/0/?ref=self
import math
def main():
    # arr = [1, 2, 3, 5]
    # arr = [1, 3]
    arr = [1]
    # arr = [1, 2, 3, 4, 5, 6, 7, 9]
    # arr = [1, 3, 4, 5, 6, 7, 8, 9]
    # arr = [1, 2, 3, 4, 5, 6, 8, 9]
    # arr = [2, 3, 4, 5, 6]
    # arr = [1, 2, 3, 4, 5, 7]
    missing_number = find_missing_number(arr, 0, len(arr) - 1)
    print(missing_number)
    # t = int(raw_input())
    # for i in range(t):
    #     n = raw_input()
    #     arr_str = raw_input()
    #     arr = list(map(int, arr_str.strip().split(' ')))
    #     missing_number = find_missing_number(arr, 0, len(arr) - 1)
    #     print(missing_number)

def find_missing_number(arr, start_index, end_index):
    if (start_index > end_index):
        return start_index + 1
    elif (end_index < start_index):
        return 1
    mid_index = int((start_index + end_index) / 2)
    expected_value = mid_index + 1
    if (((mid_index - 1 < 0) & (expected_value != arr[mid_index])) | ((mid_index - 1 >= 0) & (arr[mid_index] - arr[mid_index - 1] > 1))):
        return expected_value    
    if (arr[mid_index] == expected_value):
        return find_missing_number(arr, mid_index + 1, end_index)    
    else:
        return find_missing_number(arr, start_index, mid_index - 1)   

main()