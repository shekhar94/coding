package com.company;


import java.util.Scanner;

public class CountingValleys {

    public static void main(String[] args) {
        // formatting cmd+opt+l
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        String str = s.next();
        char start = str.charAt(0);

        int currentLevel = 0;
        int valleyCount = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'U') {
                currentLevel++;
            } else {
                currentLevel--;
            }
            if (start == 'D' && currentLevel == 0) {
                valleyCount += 1;
            }
            if (currentLevel == 0 && i + 1 < str.length()) {
                start = str.charAt(i+1);
            }
        }
        System.out.println(valleyCount);
    }
}
