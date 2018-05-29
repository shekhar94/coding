# def find_no_of_ways(n):
#     count = 0
#     if n == 0: return 1
#     elif n < 0: return 0
#     count += find_no_of_ways(n-1)
#     count += find_no_of_ways(n-2)
#     count += find_no_of_ways(n-3)
#     return count
    
# DP approach
def find_no_of_ways(n, count_dict, count_jump_dict):
    count = 0
    if n == 0: return 1
    elif n < 0: return 0
    if n in count_dict: return count_dict[n]
    if ((n, 1) in count_jump_dict): return count_jump_dict[(n, 1)]
    else: c_1 = find_no_of_ways(n-1, count_dict, count_jump_dict)
    if ((n, 2) in count_jump_dict): return count_jump_dict[(n, 2)]
    else: c_2 = find_no_of_ways(n-2, count_dict, count_jump_dict)
    if ((n, 3) in count_jump_dict): return count_jump_dict[(n, 3)]
    else: c_3 = find_no_of_ways(n-3, count_dict, count_jump_dict)
    count += c_1 + c_2 + c_3
    count_dict[n] = count
    return count
def main():
    count_dict = dict()
    count_jump_dict = dict()
    print(find_no_of_ways(3, count_dict, count_jump_dict))

main()