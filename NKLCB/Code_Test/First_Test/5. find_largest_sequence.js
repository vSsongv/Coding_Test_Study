// 길이가 N인 자연수 수열이 주어지면 이 수열에서 등차수열을 이루는 부분수열 중 최대길이를 갖는 부분수열을 구하는 프로그램을 작성하세요.
// 만약 주어지는 수열이 [1, 2, 3, 5, 7, 8, 9]가 주어지면 등차수열을 이루는 최대길이 부분수열은 [1, 3, 5, 7, 9]로 그 길이는 5입니다. 
// 부분수열을 입력된 순서는 유지해야 합니다.
// ▣ 입력설명
// 매개변수 nums 에 길이가 N(3<=N<=1,000)인 수열이 전달됩니다. 수열의 모든 원소는 서로 다릅니다.
// ▣ 출력설명
// 등차수열을 이루는 최대부분수열의 길이를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 2, 3, 5, 7, 8, 9]
// ▣ 반환값 형식 1
// 5
// ▣ 매개변수 형식 2
// [25, 20, 15, 30, 10, 40, 5]
// ▣ 반환값 형식 2
// 5
// 출력설명 : 최대길이 등차수열은 [25, 20, 15, 10, 5]입니다.

// function solution(nums) {
//     let answer = 0;
//     let len = nums.length;
//     let dp = new Array(len + 1);
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = new Array(len + 1).fill(0);
//     }
//     for (let i = 0; i < len; i++) {
//         dp[i][i] = 1;
//     }
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             let diff = nums[j] - nums[i];
//             dp[i][j] = 2;
//             let cur = nums[i];
//             let cnt = 1;
//             for (let k = i - 1; k >= 0; k--) {
//                 if (nums[k] === cur - diff) {
//                     dp[k][j] = cnt + dp[i][j];
//                     cur = nums[k];
//                     cnt++;
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             answer = Math.max(answer, dp[i][j]);
//         }
//     }
//     return answer;
// }

function solution(nums) {
    // [길이, 공차]
    let dp = Array.from({ length: nums.length }, () =>
        Array(nums.length).fill(2)
    );

    let diff = 0,
        max = 0;
    for (let i = 2; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            diff = Math.abs(nums[i] - nums[j]);
            for (let k = j - 1; k >= 0; k--) {
                if (Math.abs(nums[j] - nums[k]) === diff) {
                    dp[i][j] = dp[j][k] + 1;
                    max = Math.max(dp[i][j], max);
                }
            }
        }
    }
    return max;
}

console.log(solution([25, 20, 15, 30, 10, 40, 5]));