#include <iostream>
using namespace std;

void knapsack_0_1(int N, int W, int val[], int weight[])
{
    cout<< val[0];
    int arr[N + 1][W + 1];
    for (int i = 0; i < N + 1; i++)
    {
        arr[i][0] = 0;
    }
    for (int i = 0; i < W + 1; i++)
    {
        arr[0][i] = 0;
    }
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < W + 1; j++)
        {
            if (weight[i] <= W)
            {
                arr[i][j] = max((val[i] + arr[i - 1][W - weight[i]]), arr[i - 1][j]);
            }
            else
            {
                arr[i][j] = arr[i - 1][j];
            }
            cout << arr[i][j] << endl;
        }
    }
    cout << arr[N - 1][W] << endl;
}
int main()
{
    int t;
    cin >> t;
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
        knapsack_0_1(N, W, val, weight);
    }
}