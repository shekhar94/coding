#include<bits/stdc++.h>
using namespace std;

class Graph {
    public: 
        vector<vector<int>> graph;
        int n = 0;

        Graph(int n) {
            n = n;
        }

        void add_edge(int u, int v) {
            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        vector<int> shortest_reach(int start) {
            queue<int> q;
            q.push(start);
            int level = 0;
            int noOfNodesAtThisLevel = 1;
            vector<bool> visited(n, false);
            map<int, int> distance;

            while(!q.empty()) {
                int node = q.front();
                noOfNodesAtThisLevel--;
                
                if (!visited[node]) {
                    for (int i = 0; i < graph[node].size(); i++) {
                        q.push(graph[node][i]);
                    }
                    visited[node] = true;
                    map.insert(pair <int, int> (node, level));
                }
                if (!noOfNodesAtThisLevel) { // == 0 -> false
                    noOfNodesAtThisLevel = q.size();
                    level++;
                }
            }
            return get_distance_vector(distance, start);
        }
        vector<int> get_distance_vector(map<int, int> distance, int start) {
            vector<int> distanceVector;
            for (int i = 0; i < n; i++) {
                map<int, int> it = distance.find(i);
                if (i != start && it != map.end()) {
                    distanceVector.push_back(distance.find(i) * 6);
                } else if (i != start) {
                    distanceVector.push_back(-1);
                }
            }
            return distanceVector;
        }
};

int main() {
    int queries;
    cin >> queries;
        
    for (int t = 0; t < queries; t++) {
      
		int n, m;
        cin >> n;
        // Create a graph of size n where each edge weight is 6: 
        Graph graph(n);
        cin >> m;
        // read and set edges
        for (int i = 0; i < m; i++) {
            int u, v;
            cin >> u >> v;
            u--, v--;
            // add each edge to the graph
            graph.add_edge(u, v);
        }
		int startId;
        cin >> startId;
        startId--;
        // Find shortest reach from node s
        vector<int> distances = graph.shortest_reach(startId);

        for (int i = 0; i < distances.size(); i++) {
            if (i != startId) {
                cout << distances[i] << " ";
            }
        }
        cout << endl;
    }
    
    return 0;
}