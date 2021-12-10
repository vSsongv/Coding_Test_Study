// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    str = s.toUpperCase().replace(/[^A-Z0-9]/g, '');
    return str === str.split("").reverse().join("");
};