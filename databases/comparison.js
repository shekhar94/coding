/* 
1. How well integration can be done with existing systems
2. Scaling requirements
Horizontal scaling (HBase, mongoDB, cassandra)
3. CAP considerations
    Consistency: 
    Availability:
    Partition-Tolerance:


                               Availability
                            /               \   
         My SQL        /                        \        cassandra
                    /                               \
                /                                       \
            Consistency----------------------Partition-Tolerance
                            HBase MongoDB

    
Google analytics:
Hadoop cluster
Hive, pig
spark

Movie Recommendation System:
Spark job produces recommendations
Consistency not that much required (cassandra)

Stock Trading System: (HBase, MongoDB little availability problems)
Consistency is very important
Big data is involved
Transactions
Security

HBase or MongoDB (mongo is preferred choice on security ground)
Cassandra can also be used (consistency can be configured)
Simplicity(If hadoop is running then HBase can be used)
*/