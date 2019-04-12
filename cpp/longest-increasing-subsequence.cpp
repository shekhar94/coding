// https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0
#include <iostream>
using namespace std;

int longest_increasing_subsequence(int arr[], int len)
{
    int seq_len_arr[len];
    for (int i = 0; i < len; i++)
    {
        seq_len_arr[i] = 1;
    }
    int i = 0;
    while (i < len)
    {
        i++;
        for (int j = 0; j < i; j++)
        {
            if (arr[j] < arr[i] && seq_len_arr[i] < seq_len_arr[j] + 1)
            {
                seq_len_arr[i] = seq_len_arr[j] + 1;
            }
        }
    }
    int longest_len = 0;
    for (int k = 0; k < len; k++)
    {
        if (longest_len < seq_len_arr[k])
        {
            // cout << seq_len_arr[k];
            longest_len = seq_len_arr[k];
        }
    }
    return longest_len;
}
int main()
{
    int t, n;
    cin >> t;
    for (int j = 0; j < t; j++)
    {
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }
        int longest_inc_sub = longest_increasing_subsequence(arr, n);
        cout << longest_inc_sub << '\n';
    }
}
