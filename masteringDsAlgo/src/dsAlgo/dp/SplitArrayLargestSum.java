package dsAlgo.dp;

import java.util.Arrays;

public class SplitArrayLargestSum {
    private boolean canSplit(int largest, int[] arr, int m) {
        int sum = 0, subArrCnt = 0;
        for (int n: arr) {
            sum += n;
            if (sum > largest) {
                subArrCnt += 1;
                sum = n;
            }
        }
        return subArrCnt + 1 <= m;
    }

    public int splitArray(int[] arr, int m) {
        int l = Arrays.stream(arr).max().getAsInt();
        int r = Arrays.stream(arr).reduce(0, (a, b) -> a + b);

        int ans = r;
        while (l <= r) {
            int mid = (l + r) / 2;
            if (canSplit(mid, arr, m)) {
                ans = mid;
                r = mid - 1;
            } else l = mid + 1;
        }
        return ans;
    }
}
