#include<bits/stdc++.h>
using namespace std;

void findLonelyInteger(vector<int> &arr) {
    map<int, int> occurrence_map; 
    for (int i = 0; i < arr.size(); i++) {
        map<int, int>::iterator it = occurrence_map.find(arr[i]);
        if (it != occurrence_map.end()) {
            it -> second = 2;
        } else {
            occurrence_map.insert(pair<int, int>(arr[i], 1));
        }
    }
    map<int, int>::iterator it = occurrence_map.begin();
    while(it != occurrence_map.end()) {
        if (it->second == 1) {
            cout << it->first;
            break;
        }
        it++;
    }
}
int main() {
    vector<int> arr = {1, 1, 2};
    findLonelyInteger(arr);
    return 0;
}