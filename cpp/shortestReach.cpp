#include<bits/stdc++.h>
using namespace std;

class Graph {
    public: 
        vector<vector<int>> graph;
        int n = 0;

        Graph(int n) {
            this -> n = n;
            graph.resize(n);
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
                q.pop();
                noOfNodesAtThisLevel--;
                
                if (!visited[node]) {
                    for (int i = 0; i < graph[node].size(); i++) {
                        q.push(graph[node][i]);
                    }
                    visited[node] = true;
                    distance.insert(pair <int, int> (node, level));
                }
                if (!noOfNodesAtThisLevel) { // == 0 -> false
                    noOfNodesAtThisLevel = q.size();
                    level++;
                }
            }
            vector<int> distanceVector = get_distance_vector(distance, start);
            return distanceVector;
        }
        vector<int> get_distance_vector(map<int, int> &distance, int start) {
            vector<int> distanceVector;
            for (int i = 0; i < n; i++) {
                map<int, int>::iterator it = distance.find(i);
                if (i != start && it != distance.end()) {
                    int d = (distance.find(i) -> second) * 6;
                    distanceVector.push_back(d);
                } else if (i != start) {
                    distanceVector.push_back(-1);
                }
            }
            return distanceVector;
        }
};

int main() {
    int queries = 1;
        
    for (int t = 0; t < queries; t++) {
		int n = 4, m = 2;
        Graph graph(n);
        graph.add_edge(0, 1);
        graph.add_edge(0, 2);
		int startId = 0;
        vector<int> distances = graph.shortest_reach(startId);

        for (int i = 0; i < distances.size(); i++) {
            cout << distances[i] << " ";
        }
        cout << endl;
    }
    
    return 0;
}