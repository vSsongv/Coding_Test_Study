// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique

var minDeletions = function (s) {
  let answer = 0;
  const arr = s.split('');
  const dict = {};
  const checkUnique = [];
  arr.map((char) => {
    dict[char] = dict[char] ? dict[char] + 1 : 1;
  });
  const values = Object.values(dict);

  values.map((v) => {
    if (checkUnique[v]) {
      let target = v;
      while (target > 0) {
        if (!checkUnique[target]) {
          checkUnique[target] = true;
          answer += v - target;
          break;
        } else {
          target--;
        }
      }
      if (target === 0) {
        answer += v;
      }
    } else {
      checkUnique[v] = true;
    }
  });
  return answer;
};
