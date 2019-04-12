/* 
    Author: shekhar Suman 21/05/2018
 */

#include<bits/stdc++.h>
using namespace std;
 
// directed graph
void addEdge(vector<int> adj[], int s, int d) {
    adj[s].push_back(d);
}
void DFSUtil(vector<int> adj[], vector<bool> &visited, int s) {
    visited[s] = true;
    cout << s << " ";
    for (int i = 0; i < adj[s].size(); i++) {
        if (!visited[adj[s][i]]) {
            DFSUtil(adj, visited, adj[s][i]);
        }
    }
}
void DFS(vector<int> adj[], int V, int s) {
    vector<bool> visited(V, false);
    DFSUtil(adj, visited, s);    
}
void BFS(vector<int> adj[], int V, int s) {
    queue<int> q;
    vector<bool> visited(V, false);
    int node;
    q.push(s);
    while(!q.empty()) {
        node = q.front();
        q.pop();
        if (visited[node]) continue;
        for (int i = 0; i < adj[node].size(); i++) {
            if (!visited[adj[node][i]]) {
                q.push(adj[node][i]);
            }
        }
        cout << node << " ";
        visited[node] = true;
    }
}
int main() {
    int V = 5; 
    vector<int> adj[V];
    addEdge(adj, 0, 1);
    addEdge(adj, 0, 2);
    addEdge(adj, 1, 3);
    addEdge(adj, 2, 3);
    addEdge(adj, 2, 4);
    addEdge(adj, 3, 4);
    DFS(adj, V, 0);
    cout << "\n";
    BFS(adj, V, 0);
    return 0;
}