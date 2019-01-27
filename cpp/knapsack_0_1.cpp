#include <iostream>
using namespace std;

int knapsack_0_1(int N, int W, int val[], int weight[])
{
    int arr[N + 1][W + 1];
    for (int i = 0; i < N + 1; i++)
    {
        arr[i][0] = 0;
    }
    for (int i = 1; )
}
int main()
{
    int t;
    for (int i = 0; i < t; i++)
    {
        int N, W;
        cin >> N >> W;
        int val[N], weight[N];
        for (int j = 0; j < N; j++)
        {
            cin >> val[j];
        }
        for (int j = 0; j < N; j++)
        {
            cin >> weight[j];
        }
    }
}