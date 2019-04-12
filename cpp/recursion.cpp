/* 
    Author: shekhar suman
    https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
*/
#include<bits/stdc++.h>
using namespace std;

int find_number_of_ways(int n, map<int, int> &count_map) {
    int count = 0;
    if (n == 0) return 1;
    else if (n < 0) return 0;
    map<int, int>::iterator it = count_map.find(n);
    if (it != count_map.end()) {
        return it->second;
    }
    int c_1, c_2, c_3;
    c_1 = find_number_of_ways(n - 1, count_map);
    c_2 = find_number_of_ways(n - 2, count_map);
    c_3 = find_number_of_ways(n - 3, count_map);
    count += c_1 + c_2 + c_3;
    count_map.insert(pair<int, int>(n, count));
    return count;
}
int main() {
    map<int, int> count_map;
    int count = find_number_of_ways(3, count_map);
    cout << count << "\n";
    return 0;
}