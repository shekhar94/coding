package functionalProgramming;

public class ArraySum {
    public static void main(String[] args) {
        int[] array = {1, 2, 8};
        System.out.println(arraySum(array));
        System.out.println(arraySum2(array, 0));
    }
    public static int arraySum(int[] array) {
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    // java is not optimized for recursion
    // takes linear space
    public static int arraySum2(final int[] array, final int start) {
        if (start >= array.length)
            return 0;
        else
            return array[start] + arraySum2(array, start + 1);
    }
}
