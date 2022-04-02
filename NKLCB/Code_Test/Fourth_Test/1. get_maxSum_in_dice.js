// 현수는 여러 종류의 주사위를 가지고 쌓기 놀이를 하고 있다. 주사위의 모양은 모두 크기가 같은 정육면체이며 각 면에는 1부터 6까지의 숫자가 하나씩 적혀있다. 그러나 보통 주사위처럼 마주 보는 면에 적혀진 숫자의 합이 반드시 7이 되는 것은 아니다.
// 주사위 쌓기 놀이는 아래에서부터 1번 주사위, 2번 주사위, 3번 주사위, … 의 순서로 쌓는 것이다. 쌓을 때 다음과 같은 규칙을 지켜야 한다: 서로 붙어 있는 두 개의 주사위에서 아래에 있는 주사위의 윗면에 적혀있는 숫자는 위에 있는 주사위의 아랫면에 적혀있는 숫자와 같아야 한다. 다시 말해서, 1번 주사위 윗면의 숫자는 2번 주사위 아랫면의 숫자와 같고, 2번 주사위 윗면의 숫자는 3번 주사위 아랫면의 숫자와 같아야 한다. 단, 1번 주사위는 마음대로 놓을 수 있다.
// 이렇게 쌓아 놓으면 긴 사각 기둥이 된다. 이 사각 기둥에는 4개의 긴 옆면이 있다. 이 4개의 옆면 중에서 어느 한 면의 숫자의 합이 최대가 되도록 주사위를 쌓고자 한다. 이렇게 하기 위하여 각 주사위를 위 아래를 고정한 채 옆으로 90도, 180도, 또는 270도 돌릴 수 있다. 한 옆면의 숫자의 합의 최대값을 구하는 프로그램을 작성하시오.

// ▣ 입력설명
// 매개변수 dice에 한 줄에 하나씩 주사위의 종류가 1번 주사위부터 주사위 번호 순서대로 입력된다. 주사위의 종류는 각 면에 적혀진 숫자가 그림1에 있는 주사위의 전개도에서 A, B, C, D, E, F 의 순서로 입력된다. 입력되는 숫자 사이에는 빈 칸이 하나씩 있다. 주사위의 개수는 10,000개 이하이며 종류가 같은 주사위도 있을 수 있다.

// ▣ 출력설명
// 옆면의 숫자의 합이 가장 큰 값을 반환한다.

// ▣ 매개변수 형식 1
// [[2, 3, 1, 6, 5, 4],
//  [3, 1, 2, 4, 6, 5],
//  [5, 6, 4, 1, 3, 2],
//  [1, 3, 6, 2, 4, 5],
//  [4, 1, 6, 5, 2, 3]]

// ▣ 반환값 형식 1
// 29

function solution(dice) {
  var answer = 0;
  const len = dice.length;
  const dices = Array.from({ length: len }, () => []);

  for (let i = 0; i < len; i++) {
    dices[i].push([dice[i][0], dice[i][5]]);
    dices[i].push([dice[i][1], dice[i][3]]);
    dices[i].push([dice[i][2], dice[i][4]]);
  }

  const solve = () => {
    for (let d of dices[0]) {
      for (let target of d) {
        select(target);
      }
    }
    return answer;
  };

  const select = (target) => {
    let total = 0;
    for (let i = 0; i < len; i++) {
      dices[i].map((dice) => {
        if (dice.includes(target)) {
          if (dice.includes(6)) {
            if (dice.includes(5)) total += 4;
            else total += 5;
          } else total += 6;
          if (target == dice[0]) {
            target = dice[1];
            return;
          } else {
            target = dice[0];
            return;
          }
        }
      });
    }
    answer = Math.max(answer, total);
  };

  solve();

  return answer;
}

console.log(
  solution([
    [2, 3, 1, 6, 5, 4],
    [3, 1, 2, 4, 6, 5],
    [5, 6, 4, 1, 3, 2],
    [1, 3, 6, 2, 4, 5],
    [4, 1, 6, 5, 2, 3],
  ]),
);
