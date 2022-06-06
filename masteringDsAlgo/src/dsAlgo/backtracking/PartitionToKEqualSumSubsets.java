package dsAlgo.backtracking;

import java.util.Arrays;

public class PartitionToKEqualSumSubsets {
    private boolean backtrack(int idx, int[] arr, int k, int target, int sum, boolean[] used) {
        if (k == 0) return true;
        if (target == sum) return backtrack(0, arr, k - 1, target, 0, used);

        for (int i = idx; i < arr.length; i++) {
            if (used[i] || sum + arr[i] > target) continue;
            used[i] = true;
            if (backtrack(i + 1, arr, k, target, sum + arr[i], used)) return true;
            used[i] = false;
        }

        return false;
    }
    void reverse(int[] arr) {
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            int tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    public boolean canPartitionKSubsets(int[] arr, int k) {
        int totalSum = Arrays.stream(arr).sum();
        if (totalSum % k != 0) return false;
        int target = totalSum / k;
        boolean[] used = new boolean[arr.length];
        Arrays.fill(used, false);
        Arrays.sort(arr);
        reverse(arr);
        return backtrack(0, arr, k, target, 0, used);
    }
}
