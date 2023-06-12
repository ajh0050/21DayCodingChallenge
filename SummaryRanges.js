let nums = [0,2,3,4,6,8,9]
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    // we begin with an array
    // for each number we want to know if the number immediately following it is in seq
    // if in seq then add it into a new array
    // if not in seq make it the lone num in array
    // return an array of strings that give the first and last of the sub arrays as the interpolated range
    // if the range is just one then return that value as a string
    let returnArray = []
    let begin = null
    let end = null
    for (let i = 0; i<nums.length; i++) {
        // edge case for the first
        if (i===0) {
            let currentValue = nums[i]
            let nextValue = nums[i+1]
            let seqNextValue = currentValue+1
            seqNextValue !== nextValue ? returnArray.push(`${currentValue}`) : begin = currentValue
        }
        //edge case for the last
        if (i===nums.length){
            let currentValue = nums[i]
            let prevValue = nums[i-1]
            let seqPrevValue = currentValue-1
            seqPrevValue === prevValue ? returnArray.push(`${begin}->${end}`) : returnArray.push(`${currentValue}`)
        }
        // all other cases
        let currentValue = nums[i]
        let prevValue = nums[i-1]
        let seqPrevValue = currentValue-1
        let nextValue = nums[i+1]
        let seqNextValue = currentValue+1
        if (prevValue !== seqPrevValue && nextValue !== seqNextValue && i !== 0 && i !== nums.length){
            returnArray.push(`${currentValue}`)
        }
        if (prevValue === seqPrevValue && nextValue !== seqNextValue && i !== 0 && i !== nums.length){
            end = currentValue
            returnArray.push(`${begin}->${end}`)
        }
        if (prevValue !== seqPrevValue && nextValue === seqNextValue && i !== 0 && i !== nums.length){
            begin = currentValue
        }
    }
    return returnArray
};