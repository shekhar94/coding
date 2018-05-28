/* 
    Author: shekhar suman 28/05/2018
    https://www.hackerrank.com/challenges/ctci-big-o/problem
*/
#include<bits/stdc++.h>
using namespace std;

bool checkPrime(int num) {
    bool isPrime = true;
    for (int i = 2; i <= sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return num != 1 ? isPrime : false;
}
void helper(int num) {
    bool isPrime = checkPrime(num);
    if (isPrime) {
        cout << "Prime";
    } else {
        cout << "Not prime";
    }
}
int main() {
    helper(3);
    return 0;
}