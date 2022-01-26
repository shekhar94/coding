package greedy;

import java.util.Arrays;
import java.util.Comparator;

public class LuckBalance {

    static void sort2DArray (int[][] contests, int col) {
        Arrays.sort(contests, new Comparator<int[]>() {
            @Override public int compare(int[] e1, int[] e2) {
                if (e1[col] > e2[col])
                    return 1;
                else
                    return -1;
            }
        });
    }

    static int maximizeLuckBalance(int k, int[][] contests) {
        sort2DArray(contests, 0);
        long impContests = Arrays.stream(contests).filter(contest -> contest[1] == 1).count();
        long winContests = impContests - k;
        int lostLuckBal = 0;
        int wonLuckBal = 0;
        int i = 0;
        int winCounter = 0;
        while(i < contests.length) {
            if(contests[i][1] == 1 && winCounter < winContests) {
                lostLuckBal += contests[i][0];
                winCounter++;
            } else {
                wonLuckBal += contests[i][0];
            }
            i++;
        }
        return wonLuckBal - lostLuckBal;
    }

    public static void main(String[] args) {
        int[][] contests = {{5, 1}, {2, 1}, {1, 1}, {8, 1}, {10, 0}, {5, 0}};
        System.out.println(maximizeLuckBalance(3, contests));
    }
}
