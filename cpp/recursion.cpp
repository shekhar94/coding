/* 
    Author: shekhar suman
    https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
*/
#include<bits/stdc++.h>
using namespace std;

int find_number_of_ways(int n, map<int, int> &count_map, map<pair<int, int>, int> &count_jump_map) {
    int count;
    if (n == 0) return 1;
    else if (n < 0) return 0;
    map<int, int>::iterator it = count_map.find(n);
    if (it != count_map.end()) {
        return it->second;
    }
    int c_1, c_2, c_3;
    map<pair<int, int>, int>::iterator it_j = count_jump_map.find(pair<int, int> (n, 1));
    if (it_j != count_jump_map.end()) {
        c_1 = it_j->second;
    } else {
        c_1 = find_number_of_ways(n - 1, count_map, count_jump_map);
        count_jump_map.insert(make_pair<make_pair<int, int>, int> ((n, 1), c_1);
    }
    it_j = count_jump_map.find(pair<int, int> (n, 2));
    if (it_j != count_jump_map.end()) {
        c_2 = it_j->second;
    } else {
        c_2 = find_number_of_ways(n - 2, count_map, count_jump_map);
        count_jump_map.insert(make_pair<make_pair<int, int>, int> ((n, 2), c_2);
    }
    it_j = count_jump_map.find(pair<int, int> (n, 3));
    if (it_j != count_jump_map.end()) {
        c_3 = it_j->second;
    } else {
        c_3 = find_number_of_ways(n - 3, count_map, count_jump_map);
        count_jump_map.insert(make_pair<make_pair<int, int>, int> ((n, 3), c_3);
    }
    count += c_1 + c_2 + c_3;
    return count;
}
int main() {
    map<int, int> count_map;
    map<pair<int, int>, int> count_jump_map;
    int count = find_number_of_ways(3, count_map, count_jump_map);
    cout << count;
    return 0;
}