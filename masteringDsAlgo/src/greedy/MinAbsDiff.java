package greedy;

import java.util.Arrays;

public class MinAbsDiff {

    static int min_abs_diff(int[] arr) {
        Arrays.sort(arr);
        int min_diff = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (i+1 < arr.length) {
                int diff = Math.abs(arr[i] - arr[i+1]);
                if (diff < min_diff) min_diff = diff;
            }
        }
        return min_diff;
    }
    public static void main(String[] args) {
        int[] arr = {3, -7, 0};
        System.out.println(min_abs_diff(arr));
    }
}
