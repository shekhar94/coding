/*
  Write a function sum(n1)(n2)(n3)...(nk)() that could be called
  arbitrary number of times with numbers and it returns the total sum.

  For example:
  1. sum(2)(3)(5)()  return 10
  2. sum(7)(4)() return 11
*/

function sumOuter() {
    let sum = 0;

    function sumInner(num) {
        if (num) {
            sum += num;
            return sumInner;
        }
        return sum;
    }

    return sumInner;
}

const sumFun = sumOuter();
sumFun(2)(3)(5)();