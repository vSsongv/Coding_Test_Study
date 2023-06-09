// 문제 설명
// 문자열 s가 주어졌을 때 s에 포함된 알파벳 중 홀수개인 알파벳의 개수를 구하려고 합니다. 문자열 s에 포함된 알파벳 중에서 홀수 번 등장하는 알파벳의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 문자열 s의 길이는 1 이상 10,000 이하입니다.
// 문자열 s는 알파벳 소문자로만 이루어져 있습니다.
// 입출력 예
// s	result
// "aabbbccd"	2
// "abebeaedeac"	3
// 입출력 예 설명
// 입출력 예 #1
// a가 2개, b가 3개, c가 2개, d가 1개이므로 홀수개인 알파벳은 b, d 2개입니다.

// 입출력 예 #2
// a가 3개, b가 2개, c가 1개, d가 1개, e가 4개이므로 홀수개인 알파벳은 a, c, d 3개입니다.

function solution(s) {
  var answer = 0;
  alphaHash = new Map();

  for (let alpha of s) {
    if (alphaHash.set(alpha, alphaHash.get(alpha) + 1 || 1));
  }

  for (let [alpha, num] of alphaHash) {
    if (num % 2 !== 0) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution('aabbbccd'));
