// #include<bits/stdc++.h>
#include<iostream>
#include<vector>
using namespace std;

// directed graph
// void addEdge(vector<int> adj, int s, int d) {
//     adj[s].push_back(d);
// }

// bool DFSUtil(int s, int d, vector<int> adj, vector<bool> &visited) {
//     if (visited[s] == true) {
//         return false;
//     }
//     if (s == d) {
//         return true;
//     }
//     visited[s] = true;
//     for (int i = 0; i < adj[s].size(); i++) {
//         if (visited[adj[s][i]] == false) {
//             DFSUtil(adj[s][i], d, adj, &visited);
//         }
//     }
// }
// void DFS(int s, int d, vector<int> adj) {
//     vector<bool> visited;
//     cout<< DFSUtil(s, d, adj, visited) << endl;
// }
int main() {
    int V = 5;
    // int arr[3];
    vector<int> adj;
    adj.push_back(3);
    for (int i = 0; i < adj.size(); i++) {
        cout<<adj[0]<<endl;
    }
    cout<<10;
    // addEdge(adj, 0, 1);
    // addEdge(adj, 0, 4);
    // addEdge(adj, 1, 2);
    // addEdge(adj, 1, 3);
    // addEdge(adj, 1, 4);
    // addEdge(adj, 2, 3);
    // addEdge(adj, 3, 4);
    // DFS(adj, V);
    return 0;
}