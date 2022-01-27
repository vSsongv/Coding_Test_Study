// N개의 자연수로 이루어진 수열이 주어지면 이 수열을 k개의 원소로 이루어진 연속된 자연수 집합인 부분수열로 분리할 수 있으면 있으면 “YES", 그렇지 못함녀 ”NO"를 출력하는 프로그램을 작성하세요.
// 예를 들어 주어진 수열이 [3, 2, 1, 2, 3, 4, 3, 4, 9, 5, 10, 11]이고, k=3이라면 이 수열은 다음과 같이 [1, 2, 3], [2, 3, 4], [3, 4, 5], [9, 10, 11] 분리할 수 있어 답으로 “YES"를 반환하면 된다.

// ▣ 입력설명
// 매개변수 nums에 N개의 원소를 갖는 수열이 주어지고, 매개변수 k에 분리되는 부분수열의 크기가 주어진다. (1<=k<=N<=100,000), 수열의 원소는 109 를 넘지 않는 자연수이다.

// ▣ 출력설명
// “YES" or "NO"를 반환한다.

// ▣ 매개변수 형식 1
// [3, 2, 1, 2, 3, 4, 3, 4, 9, 5, 10, 11], 3

// ▣ 반환값 형식 1
// YES

// ▣ 매개변수 형식 2
// [1, 1, 2, 2, 3, 3], 3

// ▣ 반환값 형식 2
// YES

// 예제 2번은 [1, 2, 3], [1, 2, 3] 연속된 자연수의 집합인 2개의 부분수열로 분할이 됩니다.

function solution(nums, k) {
  let answer = 'NO';
  let numHash = new Map();
  nums.sort((a, b) => a - b);
  nums.forEach((n) => numHash.set(n, (numHash.get(n) || 0) + 1));
  for (let i = 0; i < nums.length; i++) {
    if (numHash.get(nums[i] + j) > 0) {
      console.log(numHash.get(nums[i] + j));
    }
  }
  return answer;
}

console.log(solution([3, 2, 1, 2, 3, 4, 3, 4, 9, 5, 10, 11], 3)); // YES
// console.log(solution([1, 1, 2, 2, 3, 3], 3)); //YES
// console.log(solution([1, 1, 2, 2, 4], 3)); //NO
