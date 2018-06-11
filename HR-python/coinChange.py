
def findNoOfWays(s, m, n, count_dict):
    count_val = 0
    if n == 0: return 1
    elif n < 0: return 0
    if m < 0: return 0
    if (m, n) in count_dict:
        return count_dict[(m, n)]
    count_val += findNoOfWays(s, m - 1, n, count_dict) + findNoOfWays(s, m, n - s[m], count_dict)
    count_dict[(m, n)] = count_val
    return count_val

def main():
    n = 4
    m = 3
    s = [1, 2, 3]
    count_dict = dict()
    print(findNoOfWays(s, m - 1, n, count_dict))

main()