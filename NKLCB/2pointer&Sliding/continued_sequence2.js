// 연속 부분수열 2
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 주어진 수열이 [1, 2, 3, -3, 1, 2]이고, M값이 3이라면 합이 3이 되는 연속부분수열은
// [1, 2], [1, 2, 3, -3], [2, 3, -3, 1], [3], [3, -3, 1, 2],[1, 2]로 총 6가지입니다.
// ▣ 입력설명
// 매개변수 nums에 길이 N인 수열이 주어집니다. 매개변수 m에 M(-100,000,000≤M≤
// 100,000,000)이 주어집니다.
// 수열의 원소값은 -1000부터 1,000까지의 정수입니다.
// ▣ 출력설명
// 모든 경우의 수를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 2, 3, -3, 1, 2], 3
// ▣ 반환값 형식 1
// 6
// ▣ 매개변수 형식 2
// [-1, 0, 1], 0
// ▣ 반환값 형식 2
// 2
// ▣ 매개변수 형식 3
// [-1, -1, -1, 1], 0
// ▣ 반환값 형식 3
// 1

function solution(nums, m) {
  let answer = 0;
  let sum = 0;
  let numHash = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; //sum에 nums[i]값을 더해주고
    if (sum === m) answer += 1;
    if (numHash.has(sum - m)) answer += numHash.get(sum - m);
    //hash에 sum-m한 값이 있다는 것은 sum-(sum-m)을 하면 m을 만들 수 있다는 얘기니까,
    //해당 hash key의 val개수가 현재까지의 합에서 hash key를 뺐을 때(sum-m)을 했을 때
    //m이 나올 수 있는 개수와 같기 때문에 answe에 더해준다.
    numHash.set(sum, (numHash.get(sum) || 0) + 1);
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, 1, 2], 3));
console.log(solution([-1, 0, 1], 0));
console.log(solution([-1, -1, -1, 1], 0));
