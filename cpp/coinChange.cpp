#include<bits/stdc++.h>
using namespace std;

int long count(vector<int> s, int m, int n, vector<vector<long int>> &count_arr) {
    long int count_val = 0;
    if (n == 0) return 1;
    else if (n < 0) return 0;
    if (m < 0) return 0;
    if (count_arr[m][n] != -1) return count_arr[m][n];
    count_val += count(s, m - 1, n, count_arr) + count(s, m, n - s[m], count_arr);
    count_arr[m][n] = count_val;
    return count_val;
}
int main() {
    int n = 4;
    int m = 3;
    vector<int> s = {1, 2, 3};
    vector<vector<long int>> count_vec(m, vector<long int>(n + 1, -1));
    cout << count(s, m - 1, n, count_vec);  
};