# // https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

def findMinSwap(size, unsorted_arr):
    sorted_arr = sorted(unsorted_arr)
    sorted_index_dict = dict()

    for i in range (0, size):
        sorted_index_dict[sorted_arr[i]] = i

    visited_dict = [False]*size
    min_swap = 0
    for i in range (0, size):
        if (visited_dict[i] == True or sorted_index_dict[unsorted_arr[i]] == i):
            continue
        j = i
        circle_size = 0
        while not visited_dict[j]:
            visited_dict[j] = True
            j = sorted_index_dict[unsorted_arr[j]]
            circle_size += 1
        min_swap += (circle_size - 1)
    return min_swap

def main():
    size = 5
    unsorted_arr = [2, 3, 4, 1, 5]
    min_swap = findMinSwap(size, unsorted_arr)
    print(min_swap)

main()



    