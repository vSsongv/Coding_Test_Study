// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript [k번째 수]

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let [first, last, Nth] = commands[i];

    let splitedArray = array.slice(first - 1, last);
    answer = [...answer, splitedArray.sort((a, b) => a - b)[Nth - 1]];
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
