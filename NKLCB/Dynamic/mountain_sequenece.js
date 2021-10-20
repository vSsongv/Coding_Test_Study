// 마운틴 수열
// 수열 S가 어떤 수 Si를 기준으로 S1 < S2 < ... Si-1 < Si > Si+1 > ... SN-1 > SN을 만족한다면, 그 수열을 마운틴 수열이라 합니다.
// 예를 들어, {10, 20, 30, 20, 10}과 {10, 20, 30, 40}, {35, 30, 20, 10} 은 마운틴 수열이지만, 
// {1, 2, 3, 2, 1, 2, 3}과 {10, 20, 30, 40, 10, 20} 은 마운틴 수열이 아닙니다.
// 수열 A가 주어졌을 때, 그 수열의 부분 수열 중 마운틴 수열이면서 가장 긴 수열의 길이를 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 길이가 N(1≤N≤1,000)인 수열이 주어집니다.
// ▣ 출력설명
// 부분수열 중 마운틴 수열의 최대 길이를 반환합니다.
// ▣ 매개변수 형식 1
// [5, 3, 7, 8, 6, 2, 9, 4, 2, 1]
// ▣ 반환값 형식 1
// 7
// 위의 예에서 가장 긴 마운틴 수열은 [3, 7, 8, 6, 4, 2, 1] 또는 [3, 7, 8, 9, 4, 2, 1] 입니다.

function solution(nums) {
    let answer = 0;

    let n = nums.length;
    let dp1 = Array(n).fill(1);
    let dp2 = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp1[i] = Math.max(dp1[i], dp1[j] + 1);
            }
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) {
                dp2[i] = Math.max(dp2[i], dp2[j] + 1);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        answer = Math.max(answer, dp1[i] + dp2[i]);
    }
    return answer - 1;
}

console.log(solution([1, 2, 3, 2, 1, 2, 3]));
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1]));
console.log(solution([2, 1, 4, 8, 3, 2, 9, 10, 12, 9]));