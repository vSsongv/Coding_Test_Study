function solution(answers) {
  let answer = [];
  let pickLists = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  let max = 0;
  let result = {};

  for (let [solver, list] of Object.entries(pickLists)) {
    let j = 0;
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (j === list.length) j = 0;
      if (list[j++] === answers[i]) {
        count++;
      }
    }
    max = max < count ? count : max;
    result[solver] = count;
  }

  let sortable = [];
  for (let score in result) {
    sortable.push([score, result[score]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (let i = 0; i < 3; i++) {
    if (sortable[i][1] < max) break;
    answer.push(Number(sortable[i][0]));
  }

  return answer;
}

console.log(solution([1, 2, 1, 4, 2]));
console.log(solution([1, 3, 2, 4, 2]));
