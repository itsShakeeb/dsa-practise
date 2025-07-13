/**
 * Return the largest number from an array
 */

const a = [6, 3, 89, 2, 56, 1]

const findLargestNumber = (a) => {
    let maxNum = -Infinity

    a.forEach((num) => {
        if (num > maxNum) {
            maxNum = num
        }
    })
    return maxNum
}

console.log('Largest Number', findLargestNumber(a));


/**
 * Return the second largest number from an array
 */

const a1 = [73, 6, 3, 89, 2, 56, 1, 70]

const findSeconLargestNumber = (a) => {
    let largestNum = -Infinity
    let secondLargestNum = -Infinity

    a.forEach((num) => {
        if (num > largestNum) {
            secondLargestNum = largestNum
            largestNum = num
        } else if (num < largestNum && num > secondLargestNum) {
            secondLargestNum = num
        }
    })
    return secondLargestNum
}

console.log('Second Largest Number', findSeconLargestNumber(a1));


/**
 * Reverse an array in place 
 */

const a2 = [73, 6, 3, 89, 2, 56, 1, 70]

const reverseArray = (a) => {
    let left = 0
    let right = a.length - 1;

    while (left < right) {
        const temp = a[left]
        a[left] = a[right]
        a[right] = temp
        left++
        right--
    }
    return a
}

console.log('Reversed Array In Place', reverseArray(a2));


/**
 * Find two numbers in a sorted array that sum to target
 */


const a3 = [1, 2, 4, 6, 8, 10, 12, 14, 16]
const target = 8
const findTwoNumberInSortedArray = (a, target) => {
    let left = 0;
    let right = a.length - 1;

    while (left < right) {
        if (a[left] + a[right] === target) return [left, right]
        else if (a[left] + a[right] > target) {
            right--
        } else {
            left++
        }
    }
}

console.log('Two number that sums to target', findTwoNumberInSortedArray(a3, target));


/**
 *  Remove duplicates from sorted array
 */


const a4 = [1, 2, 4, 4, 6, 8, 10, 12, 12, 14, 16]

const removeDuplicatesFromSortedArray = (a) => {
    let i = 0
    for (let j = 1; j < a.length; j++) {
        const element = a[j];
        if(element !== a[i]){
            i++
            a[i] = element
        }
        
    }
    a.length = i + 1
    return a.length
}

console.log('Remove duplicates from sorted array', removeDuplicatesFromSortedArray(a4));


/**
 *  Remove duplicates from sorted array
 */


const a5 = [1, 4, 2, 4, 6, 12, 8, 10, 12, 14, 16]

const removeDuplicatesFromUnSortedArray = (a) => {
    const seen = new Map()
    let i = 0
    for (let j = 0; j < a.length; j++) {
        const element = a[j];
        if(!seen.has(element)){
            seen.set(element, true)
            a[i] = a[j]
            i++
        }
        
    }
    a.length = i
    return i
}

console.log('Remove duplicates from sorted array', removeDuplicatesFromUnSortedArray(a5));