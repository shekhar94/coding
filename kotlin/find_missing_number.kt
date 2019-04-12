fun main(args : Array<String>) {
    // println("Hello, World!")

    val arr = intArrayOf(1,3,4,5,6)
    res: Int = findMissingNumber(arr, 0, 4)
    println(res);
}
// main()
fun findMissingNumber(arr: Array<Int>, start_index: Int, end_index: Int): Int {
    mid_index: Int = (start_index + end_index) / 2
    expected_value: Int = mid_index + 1 
    if ((arr[mid_index] - arr[mid_index - 1] > 1) || (mid_index - 1 < 0 && expected_value !== arr[mid_index])) {
        return expected_value
    }
    if (arr[mid_index] === expected_value) {
        return findMissingNumber(arr, mid_index + 1, end_index)
    } else {
        return findMissingNumber(arr, start_index, mid_index - 1)
    }
}