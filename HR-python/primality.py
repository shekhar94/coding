# Author: shekhar suman 28/05/2018
# https://www.hackerrank.com/challenges/ctci-big-o/problem
import math
def check_primality(num): 
    isPrime = True
    for i in range(2, math.floor(math.sqrt(num) + 1)):
        if num % i == 0:
            isPrime = False
            break
    return isPrime if num != 1 else False

def helper(num):
    isPrime = check_primality(num)
    if (isPrime):
        print("Prime")
    else:
        print("Not prime")
         
        

helper(2)
helper(3)
