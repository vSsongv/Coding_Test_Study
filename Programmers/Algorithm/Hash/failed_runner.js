function solution(participant, completion) {
  let answer = '';
  let runners = new Map();

  participant.forEach((runner) => {
    runners.set(runner, (runners.get(runner) || 0) + 1);
  });

  completion.forEach((completed) => {
    runners.set(completed, (runners.get(completed) || 0) - 1);
    if (runners.get(completed) === 0) runners.delete(completed);
  });

  for (let [name, val] of runners) {
    return name;
  }
}

console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));
