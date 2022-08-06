function whichHand(num, LH, RH) {
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [0, 3],
    5: [0, 4],
    6: [0, 5],
    7: [0, 6],
    8: [0, 7],
    9: [0, 8],
    0: [0, 9],
    Q: [1, 0],
    W: [1, 1],
    E: [1, 2],
    R: [1, 3],
    T: [1, 4],
    Y: [1, 5],
    U: [1, 6],
    I: [1, 7],
    O: [1, 8],
    P: [1, 9],
  };

  const hand = {
    1: 'L',
    2: 'L',
    3: 'L',
    4: 'L',
    5: 'L',
    Q: 'L',
    W: 'L',
    E: 'L',
    R: 'L',
    T: 'L',
    6: 'R',
    7: 'R',
    8: 'R',
    9: 'R',
    0: 'R',
    Y: 'R',
    U: 'R',
    I: 'R',
    O: 'R',
    P: 'R',
  };

  const LD = Math.abs(pos[LH][0] - pos[num][0]) + Math.abs(pos[LH][1] - pos[num][1]);
  const RD = Math.abs(pos[RH][0] - pos[num][0]) + Math.abs(pos[RH][1] - pos[num][1]);
  console.log(LD, RD);

  if (LD === RD) {
    if (Math.abs(pos[LH][0] - pos[num][0]) === Math.abs(pos[RH][0] - pos[num][0])) return hand[num] === 'L' ? 0 : 1;
    else return Math.abs(pos[LH][0] - pos[num][0]) > Math.abs(pos[RH][0] - pos[num][0]) ? 0 : 1;
  }
  return LD < RD ? 0 : 1;
}

function solution(lines) {
  var answer = [];
  LH = 'Q';
  RH = 'P';
  for (let line of lines) {
    answer.push(whichHand(line, LH, RH));
    answer[answer.length - 1] === 0 ? (LH = line) : (RH = line);
  }
  return answer;
}

console.log(solution('Q4OYPI'));
