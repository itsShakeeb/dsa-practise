/**
 * Find the length of the longest substring with at most K distinct characters.
 */

const s = 'pwdfeds'
const k = 3
function findLongestSubstringWithKDistinct(str, k) {
    if (str.length === 0 || k === 0) return 0

    let left = 0
    let maxLen = 0
    const charMap = new Map()

    for (let right = 0; right < str.length; right++) {
        const element = str[right];

        charMap.set(element, (charMap.get(element) || 0) + 1);
        
        while (charMap.size > k) {  
            const leftChar = str[left]
            charMap.set(leftChar, charMap.get(leftChar) - 1)            
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar)
            }
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen
}

console.log('longest substr with at most K distinct char', findLongestSubstringWithKDistinct(s, k));
