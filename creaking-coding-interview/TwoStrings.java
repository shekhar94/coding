package com.company;

import java.util.HashMap;
import java.util.Map;

public class TwoStrings {
    static String twoStrings(String s1, String s2) {
        Map<Character, Boolean> map1 = new HashMap<Character, Boolean>();
        Map<Character, Boolean> map2 = new HashMap<Character, Boolean>();
        for (int i = 0; i < s1.length(); i++) {
            map1.put(s1.charAt(i), true);
        }
        for (int i = 0; i < s2.length(); i++) {
            map2.put(s2.charAt(i), true);
        }
        for (Map.Entry<Character, Boolean> entry : map1.entrySet()) {
            if (map2.containsKey(entry.getKey())) {
                return "YES";
            }
        }
        return "NO";
    }

    public static void main(String[] args) {
        // formatting cmd+opt+l
        System.out.println(twoStrings("hello", "wi"));
    }
}
