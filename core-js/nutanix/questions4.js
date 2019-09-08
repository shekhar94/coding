/* 

Past experience : 
Candidate will be asked question around work culture, 
style and past experiences. It will be preferred if 
candidate uses STAR format for these questions.


Discussion about products that I worked on.

Tell me 3 strengths that your colleagues/manager will tell
Tell me 3 weakness that your colleagues/manager will tell
Biggest failure in life
Why are you leaving current company.

Discussion on nutanix products

You have a file which contains 0-10^7 numbers
It is not necessary to have numbers in range 0-10^7.
Total numbers are 10^7. Numbers are in random order.
I want you to sort the numbers given in file.
Total memory in machine is 100MB.

Learning: Stop reaching to conclusion without analysis and calculations required.

We calculated total size used by 10^7 numbers.
8 bit = 1 byte
1000 bytes = 1kb
1000 kb = 1 MB

Assume each number takes 4 byte
Total space taken = 10^7*4/(10^3*10^3) = 40MB.

In case we have 100 MB memory all numbers can be sorted in one go
using quick sort with O(nlogn)

Now lets assume we have only 10 MB memory. How would you solve same problem.
Suggested divide and conquer. By dividing the entire numbers into 4 groups and
sorting independently and then merging.

Final discussion using bit array use only space required for a particular integer.
Sort in bit array(For each number turn bit on/off)

*/