// 합이 같은 부분집합
// N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때
// 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
// 둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
// 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.
// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=10)개의 원소로 구성된 집합이 주어집니다.
// 각 원소는 중복되지 않으며, 집합의 총 합은 짝수로 주어집니다.
// ▣ 출력설명
// “YES" 또는 ”NO"를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 3, 5, 6, 7, 10]
// ▣ 반환값 형식 1
// YES
// ▣ 매개변수 형식 2
// [5, 2, 6, 9, 10, 12]
// ▣ 반환값 형식 2
// YES
// ▣ 매개변수 형식 3
// [3, 9, 11, 13]
// ▣ 반환값 형식 3
// NO

function solution(nums) {
  let answer = 'NO',
    flag = 0;
  let total = nums.reduce((a, b) => a + b, 0);
  let n = nums.length;
  function getSubset(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      getSubset(L + 1, sum + nums[L]);
      getSubset(L + 1, sum);
    }
  }
  getSubset(0, 0);
  return answer;
}

console.log(solution([3, 9, 11, 13]));
console.log(solution([5, 2, 6, 9, 10, 12]));
