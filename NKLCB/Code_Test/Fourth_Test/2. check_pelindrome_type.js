// 팰린드롬(palindrome)은 앞 뒤 방향으로 볼 때 같은 순서의 문자로 구성된 문자열을 말한다. 예를 들어 ‘abba’ ‘kayak’, ‘reviver’, ‘madam’은 모두 회문이다. 만일 그 자체는 회문이 아니지만 한 문자를 삭제하여 회문으로 만들 수 있는 문자열이라면 우리는 이런 문자열을 “유사회문”(pseudo palindrome)이라고 부른다. 예를 들어 ‘summuus’는 5번째나 혹은 6번째 문자 ‘u’를 제거하여 ‘summus’인 회문이 되므로 유사회문이다.

// 여러분은 제시된 문자열을 분석하여 그것이 그 자체로 회문인지, 또는 한 문자를 삭제하면 회문이 되는 “유사회문”인지, 아니면 회문이나 유사회문도 아닌 일반 문자열인지를 판단해야 한다. 만일 문자열 그 자체로 회문이면 0, 유사회문이면 1, 그 외는 2를 출력해야 한다.

// 입력
// 매개변수 s에 스트링배열이 주어집니다. 배열의 길이는 30을 넘지 않습니다. 문자열의 길이는 100을 넘지 않습니다.

// 출력
// 각 문자열이 회문인지, 유사 회문인지, 둘 모두 해당되지 않는지를 판단하여 회문이면 0, 유사 회문이면 1, 둘 모두 아니면 2를 순서대로 반환합니다.

// 매개변수 입력형식 1
// ["abba",
// "summuus",
// "xabba",
// "xabbay",
// "comcom",
// "comwwmoc",
// "comwwtmoc"
// ]

// 반환값 형식 1
// [0, 1, 1, 2, 2, 0, 1]

function solution(s) {
  let answer = [];
  s.forEach((str) => {
    let left = 0;
    let right = str.length - 1;
    if (str === str.split('').reverse().join('')) {
      answer.push(0);
    } else {
      while (left < right) {
        if (str[left] !== str[right]) {
          let sub1 = str.substring(left, right);
          let sub2 = str.substring(left + 1, right + 1);
          if (sub1 !== sub1.split('').reverse().join('') && sub2 !== sub2.split('').reverse().join('')) {
            answer.push(2);
            return;
          }
        }
        left += 1;
        right -= 1;
      }
      answer.push(1);
    }
  });
  return answer;
}

console.log(solution(['abba', 'summuus', 'xabba', 'xabbay', 'comcom', 'comwwmoc', 'comwwtmoc']));
