def main():
    n = 7
    arr = [2, 1, 3, 1, 2, 5, 0]
    tmp = list(range(n))
    merge_sort(arr, tmp, 0, n - 1)
    print(arr)

def merge_sort(arr, tmp, left_start, right_end):
    if left_start >= right_end:
        return
    middle = (left_start + right_end) / 2
    merge_sort(arr, tmp, left_start, middle)
    merge_sort(arr, tmp, middle + 1, right_end)
    merge_halves(arr, tmp, left_start, right_end)

def merge_halves(arr, tmp, left_start, right_end):
    left = left_start
    index = left_start
    left_end = (left_start + right_end) / 2
    right = left_end + 1
    size = right_end - left_start + 1
    while (left <= left_end) & (right <= right_end):
        if arr[left] <= arr[right]:
            tmp[index] = arr[left]
            left += 1
        else:
            tmp[index] = arr[right]
            right += 1
        index += 1
    copy_arr(arr, left, tmp, index, left_end - left + 1)
    copy_arr(arr, right, tmp, index, right_end - right + 1)
    copy_arr(tmp, left_start, arr, left_start, size)

def copy_arr(src_arr, src_start, dest_arr, dest_start, no_of_ele):
    for i in range(0, no_of_ele):
        dest_arr[dest_start] = src_arr[src_start]
        dest_start += 1
        src_start += 1

main()