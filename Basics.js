/**
 * Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.
    

    Example 1:

    Input: n = 3
    Output: ["1","2","Fizz"]
    Example 2:

    Input: n = 5
    Output: ["1","2","Fizz","4","Buzz"]
    Example 3:

    Input: n = 15
    Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 */


const getFizzedBuzzedArray = (n) => {
    const result = []

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz')
        else if (i % 5 === 0) result.push('Buzz')
        else if (i % 3 === 0) result.push('Fizz')
        else {
            result.push(String(i))
        }

    }
    return result
}

console.log(getFizzedBuzzedArray(5));

/**
 * 
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
 *
 */

const findPivotIndex = (a) => {

    const total = a.reduce((a, c) => a + c, 0);
    let leftSum = 0
    for (let i = 0; i < a.length; i++) {
        const rightSum = total - leftSum - a[i]
        if (rightSum === leftSum) return i;
        leftSum += a[i]
    }
}
console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
console.log(findPivotIndex([2, 1, -1]));

