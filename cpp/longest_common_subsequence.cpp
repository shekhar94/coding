// https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0
#include <iostream>
#include <algorithm>
using namespace std;

int longest_common_subsequence(string str1, string str2, int str1_len, int str2_len)
{
    int arr[str1_len + 1][str2_len + 1];
    for (int j = 0; j < str2_len + 1; j++)
    { // initialize first row with default value
        arr[0][j] = 0;
    }
    for (int i = 0; i < str1_len + 1; i++)
    { // initialize first col with default value
        arr[i][0] = 0;
    }
    for (int i = 1; i < str1_len + 1; i++)
    {
        for (int j = 1; j < str2_len + 1; j++)
        {
            // as i and j are one index ahead take i - 1, j - 1
            // last char is the null character \0
            if (str1[i - 1] == str2[j - 1])
            {
                arr[i][j] = arr[i - 1][j - 1] + 1;
            }
            else
            {
                arr[i][j] = max(arr[i - 1][j], arr[i][j - 1]);
            }
        }
    }
    return arr[str1_len][str2_len];
}

int main()
{
    int t;
    cin >> t;
    for (int i = 0; i < t; i++)
    {
        int str1_len, str2_len;
        cin >> str1_len >> str2_len;
        string str1, str2;
        cin >> str1 >> str2;
        int len = longest_common_subsequence(str1, str2, str1_len, str2_len);
        cout << len << endl;
    }
}