// https://leetcode.com/problems/rotate-array/ [189-Rotate Array]

//time limited난 풀이
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};