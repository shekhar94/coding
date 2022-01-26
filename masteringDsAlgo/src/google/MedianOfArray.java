package google;

import java.util.ArrayList;
import java.util.List;

public class MedianOfArray {
    public static double findMedianSortedArrays(final List<Integer> a, final List<Integer> b) {
        int totalLen = a.size() + b.size();
        double median = 0.00;
        int ai = 0, bi = 0;

        List<Integer> mergedList = new ArrayList<>();
        while (ai < a.size() || bi < b.size()) {
            if (ai < a.size() && bi < b.size()) {
                if (a.get(ai) <= b.get(bi)) {
                    mergedList.add(a.get(ai));
                    ai++;
                } else {
                    mergedList.add(b.get(bi));
                    bi++;
                }
            } else if (bi < b.size()) {
                mergedList.add(b.get(bi));
                bi++;
            } else {
                mergedList.add(a.get(ai));
                ai++;
            }
        }

        if (totalLen % 2 == 0) {
            int middle = totalLen / 2 - 1;
            median = (mergedList.get(middle) + mergedList.get(middle + 1)) / 2.0;
        } else {
            int middle = totalLen / 2;
            median = mergedList.get(middle);
        }

//        System.out.println(mergedList);

        return (double)median;
    }

    public static void main(String[] args) {
        List<Integer> a = new ArrayList<>();

//        a.add(1);
//        a.add(4);
//        a.add(5);

        List<Integer> b = new ArrayList<>();
//        b.add(2);
//        b.add(3);
        b.add(20);

        System.out.println(findMedianSortedArrays(a, b));
    }
}
