#include<bits/stdc++.h>
using namespace std;


int findMinSwap(int len, vector<int> unsorted_vec) {
    vector<int> sorted_vec = unsorted_vec;
    sort(sorted_vec.begin(), sorted_vec.end());
    map<int, int> sorted_index_map;
    for(int i = 0; i < len; i++)
        sorted_index_map.insert(pair<int, int> (sorted_vec[i], i));
    int min_swap = 0;
    vector<bool> visited(len, false);
    for (int i = 0; i < len; i++) {
        if (visited[i] || sorted_index_map.find(unsorted_vec[i]) -> second == i) 
            continue;
        int j = i;
        int circle_size = 0;
        while (!visited[j]) {
            visited[j] = true;
            circle_size++;
            j = sorted_index_map.find(unsorted_vec[j]) -> second;
        }
        min_swap += (circle_size - 1);
    }
    return min_swap;
    // for(vector<int>::iterator it=sorted_vec.begin(); it!=sorted_vec.end(); ++it)
    //     cout<<' '<<*it;
    // cout<<'\n';
    // for(vector<int>::iterator it=unsorted_vec.begin(); it!=unsorted_vec.end(); ++it)
    //     cout<<' '<<*it;
}

int main() {
    int len = 5;
    vector<int> unsorted_vec{2, 3, 4, 1, 5};
    int min_swap = findMinSwap(len, unsorted_vec);
    cout<<min_swap;
}
