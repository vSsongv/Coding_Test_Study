// https://leetcode.com/problems/rotate-array/ [189-Rotate Array]

//time limited난 풀이
// var rotate = function (nums, k) {
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
//     return nums;
// };

var rotate = function (nums, k) {
    if (nums.length === 1) return nums;
    function reverse2(start, end) {
        while (start < end) {
            let tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start++;
            end--;
        }
        return nums;
    }
    k %= nums.length; //k번째와 k를 nums의 길이만큼 나눈 나머지의 결과가 같기 때문,
    nums = nums.reverse();
    nums = reverse2(0, k - 1);
    nums = reverse2(k, nums.length - 1);
    return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1], 2));