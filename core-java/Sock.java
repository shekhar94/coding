
package com.company;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Sock {

    public static void main(String[] args) {
        // formatting cmd+opt+l
        // write your code here
        // 9
        // 10 20 20 10 10 30 50 10 20
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int matchingPairsCount = 0;
//        AtomicInteger matchingPairsCount = new AtomicInteger();
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < n; i++) {
            int num = input.nextInt();
            if (map.containsKey(num)) {
                int existingCount = map.get(num);
                map.put(num, (existingCount + 1));
            } else {
                map.put(num, 1);
            }
        }
        for (int value : map.values()) {
            matchingPairsCount += (value/2);
        }
//        map.forEach((key, value) -> {
//            matchingPairsCount.addAndGet((value / 2));
//        });
        System.out.println(matchingPairsCount);
    }
}
