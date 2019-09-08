/* 
Decide some core features which your design solves
Tweeting:
Timeline:
    - User (own tweets)
    - Home (all tweets from people I follow)
Following:

Simple solution
Relational Databases:
User (id, name) 
Tweets (id, user (pk), content) 

(availability(more important) vs consistency)

load balancer(local the other data centers)-->redis cluster(gets replicated in 3 instances)
fan-out
*/