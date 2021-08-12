// https://programmers.co.kr/learn/courses/30/lessons/42839 [소수 찾기]

// 순열을 만드는 함수
function makePermutations(arr, select) {
  const permutations = [];
  // 1개를 택하면 모든 원소를 return
  if (select === 1) return arr.map((value) => {
    return [value]
  });

  arr.forEach((fixed, index, origin) => {
    // 매 루프에서의 fixed(value)를 제외한 나머지 원소들의 배열
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 나머지에대한 순열들 구하기
    const restOfPermutation = makePermutations(rest, select - 1);
    // 순열을 구한 뒤, fixed 값 더하기
    const permutation = restOfPermutation.map((value) => [fixed, ...value]);
    permutations.push(...permutation);
  })

  return permutations;
}

// 소수임을 판별하는 함수
function checkPrime(number) {
  // 소수 여부를 저장하는 변수
  // 소수이면 true
  let plag = true;
  // 2부터 i의 제곱이 해당 숫자 이하일 때까지 나머지가 0인지 체크
  for (let i = 2; i * i <= number; i++) {
    // 소수가 아니므로 plag를 false 처리하고 반복문 종료
    if (number % i === 0) {
      plag = false;
      break;
    }
  }
  // plag를 return
  return plag;
}

function solution(numbers) {
  let answer = 0;
  // 문자열 배열 변환
  const number = [];
  for (let i = 0; i < numbers.length; i++) {
    number.push(numbers[i]);
  }
  // 주어진 숫자로 만들 수 있는 순열
  const perm = [];
  // 순열구하기
  for (let j = 1; j <= numbers.length; j++) {
    const perms = makePermutations(number, j);
    // 만들어진 순열 하나씩 접근
    for (let nums of perms) {
      // 문자열로 변환후 숫자로 변환
      const num = parseInt(nums.join(''));
      // perm에 없으면 넣기
      if (!(perm.includes(num)) && num != 0 && num != 1) {
        perm.push(num);
      }
    }
  }
  // perm를 하나씩 가져와서 소수인지 판별하기
  for (let nums of perm) {
    if (checkPrime(nums)) {
      answer += 1;
    }
  }

  return answer;
}
