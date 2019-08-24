/* 
1. Check prime
2. Given api which gives response in following format
{
    current_page: 1,
    total_page: 3,
    data: [
        {title: 'superman'},
        {title: 'superman calls batman}
    ]
}

call the api and get data from all the pages
create a title array
sort title array
print sorted array

(Do first api call with page no 1, get the value of total_pages create promise array of all
    the pages do Promise.all(promiseArr), combine data from all the pages, sort the array,
    print sorted array)

3. Find the maximum difference 

0 <= i < j < arr.length
given arr = [5, 6, 8, 10, 11]

sol:
6 - 5 = 1
8 - [5, 6] = [3, 2]
10 - [5, 6, 8] = [5, 4, 2]
11 - [5, 6, 8, 10] = [6, 5, 3, 1]

max diff is 6

4. Given (pre-order) traversal of a BST check if the tree is a valid bst


*************************************************************

1. Deep cloning objects
2. How to write const so that user will not be able to change the properties after creation
3. How to see which all properties are writable in an object
4. MongoId (parts of mongo id)
mongoId guarantees uniqueness or not
if not why 
why mongodb team is okay with it
capped collection

5. Mongoose uses tread offs (driver implementation varies across languages)
6. Hybrid approach for db schema to reduce joins in mongodb
e.g lets consider you have authors and books how would you will
create db schema for it.
Balance between read and write operations (we always focus on this while designing schema)

7. How web socket works
How socket.io is different from web socket
what is benefit of using socket.io over native web socket

http vs https

what is internal protocol below application layer (trying to know about tcp ip)
How TCP IP handshake mechanism works

8. lambda in aws

9. Let say you designed a web page which works on live data
Everything is working fine and you went for lunch came back
You find it shows (oh snap). How would you proceed with debugging as a frontend developer
What are possibilities because of which this can happen.

(wanted to know data overload when browser will not be able to process the amount of 
    data sent from server)
*/