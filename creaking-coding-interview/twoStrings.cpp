//
//  main.cpp
//  hello_world
//
//  Created by Shekhar Suman on 06/01/20.
//  Copyright © 2020 Shekhar Suman. All rights reserved.
//

#include <iostream>
#include <map>
using namespace std;

string twoStrings(string s1, string s2) {
    map<char, bool> map1;
    map<char, bool> map2;
    for(int i = 0; i < s1.length(); i++) {
        map1.insert(pair<char, bool>(s1.at(i), true));
    }
    for(int i = 0; i < s2.length(); i++) {
        map2.insert(pair<char, bool>(s2.at(i), true));
    }
    map<char, bool>::iterator it = map1.begin();
    for(pair<char, bool> element: map1) {
        if(map2.count(element.first)){
            return "YES";
        }
    }
    return "NO";
}

int main(int argc, const char * argv[]) {
    // insert code here...
    string result = twoStrings("hello", "ol");
    cout<<result;
    return 0;
}
