def main():
    find_lonely_integer([1, 1, 2])
def find_lonely_integer(a):
    occurrence_dict = dict()
    for i in range(len(a)):
        if (a[i] in occurrence_dict):
            occurrence_dict[a[i]] = 2
        else:
            occurrence_dict[a[i]] = 1
    for key, value in occurrence_dict.items():
        if (value == 1):
            print(key)
            return
main()