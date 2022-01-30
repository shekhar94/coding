package google.array;

import java.util.Arrays;

public class RotateArr {
    // https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
    private void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    private void reverse(int[] arr, int start, int end) {
        while(start < end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    private void rotate(int[] arr, int k) {
        int effRot = k % arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, effRot - 1);
        reverse(arr, effRot, arr.length - 1);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int k = 3;
        RotateArr rotateArr = new RotateArr();
        rotateArr.rotate(arr, k);
        System.out.println(Arrays.toString(arr));
    }
}
