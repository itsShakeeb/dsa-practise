/**
 * Maximum Sum of Subarray of Size K
 */

const findMaxSumOfSubarrayWithSizeK = (arr, k) => {
    let windowSum = 0

    for (let u = 0; u < k; u++) {
        windowSum = windowSum + arr[u]
    }

    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum = (windowSum - arr[i - k]) + arr[i]

        maxSum = Math.max(windowSum, maxSum)
    }
    return maxSum

}

const a = [2, 5, 9, 4, 3, 2, 1]
const k = 3
console.log('Maximum Sum of Subarray of Size K', findMaxSumOfSubarrayWithSizeK(a, k));


/**
 * First Negative Integer in Every Window of Size K
 */


const findFirstNegativeIntegerOfWindowSizeK = (arr, k) => {

    let left = 0;
    const newArray = []
    const negIndecies = []

    for (let right = 0; right < arr.length; right++) {

        if(arr[right] < 0) {
            negIndecies.push(right)
        }

        if( right - left + 1 === k) {
            while (negIndecies.length > 0 && negIndecies[0] < left) {
                negIndecies.shift()
            }

            if(negIndecies.length > 0) {
                newArray.push(arr[negIndecies[0]])
            }else {
                newArray.push(0)
            }
            left++
        }
        
    }
    return newArray

}
const a1 = [12, -1, -7, 8, 15, 30, 16, 28]
const k1 = 3
console.log('First Negative Integer in Every Window of Size K', findFirstNegativeIntegerOfWindowSizeK(a1, k1));


/**
 * Longest Substring with Exactly K Distinct Chars
 */


const findLongestSubstringKDistinctCharacter = (str, k) => {

    const freq = new Map()
    let left = 0;

    for (let right = 0; right < str.length; right++) {
        const char = freq.set(str[left], right)

        
    }
}
const str1 = 'shakeeb'
const k2 = 3
console.log('First Negative Integer in Every Window of Size K', findLongestSubstringKDistinctCharacter(str1, k2));
