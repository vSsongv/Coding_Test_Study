// https://leetcode.com/problems/daily-temperatures/ [739 - Daily Temperatures]

var dailyTemperatures = function (temperatures) {
  let answer = new Array(temperatures.length).fill(0);
  let temp = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (temp.length && temperatures[i] > temperatures[temp[temp.length - 1]]) {
      answer[temp[temp.length - 1]] = i - temp[temp.length - 1];
      temp.pop();
    }
    temp.push(i);
  }
  return answer;
};
