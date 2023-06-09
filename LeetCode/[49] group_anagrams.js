// https://leetcode.com/problems/group-anagrams/

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {
//   let answer = [];

//   let strDict = {};
//   strs.forEach((string) => {
//     if (string.split('').sort().join('') in strDict) strDict[string.split('').sort().join('')].push(string);
//     else {
//       strDict[string.split('').sort().join('')] = [];
//       strDict[string.split('').sort().join('')].push(string);
//     }
//   });

//   for (let [key, val] of Object.entries(strDict)) {
//     answer.push(val);
//   }

//   return answer;
// };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let answer = [];
  strs.forEach((string) => {
    let target = string.split('').sort().join('');
    answer[target] = answer[target] ? [...answer[target], string] : [string];
  });

  console.log(answer);

  return Object.values(answer);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['a']));
