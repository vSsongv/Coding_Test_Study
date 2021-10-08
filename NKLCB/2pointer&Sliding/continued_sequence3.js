// 연속 부분수열 3
// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면 1 3 1 2 3
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3},
// {1, 3, 1}로 총 10가지입니다.
// ▣ 입력설명
// 매개변수 nums에 N(1≤N≤100,000)길이의 수열이 주어집니다.
// 매개변수 m에 M(1≤M≤100,000,000)이 주어집니다.
// 수열의 원소값은 1,000을 넘지 않는 자연수입니다.
// ▣ 출력설명
// 경우의 수를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 3, 1, 2, 3], 5
// ▣ 반환값 형식 1
// 10
// ▣ 매개변수 형식 2
// [1, 1, 1, 1, 1, 1], 3
// ▣ 반환값 형식 2
// 15
// ▣ 매개변수 형식 3
// [1, 1, 2, 2, 1, 2, 1, 3, 2], 5
// ▣ 반환값 형식 3
// 22

// function solution(nums, m) {
//     let answer = 0, sum = 0, right = 0;

//     for (let left = 0; left < nums.length; left++) {
//         while (sum <= m && right < nums.length) { //합이 M보다 크거나, end가 배열의 마지막이면 loop를 멈춰야 한다.
//           sum += nums[right]; //합이 M보다 작다면 sum에 end까지의 값을 더해주고, 
//           right++; //end를 증가시켜주자.
//           answer++;
//         }
//         sum -= nums[left];
//       }
//     return answer;
// }

function solution(nums, m) {
    let left = 0; let answer = 0; let sum = 0;
        for (let right = 0; right < nums.length; right++) {
            sum += nums[right]; //sum에 end까지의 값을 더해주고,
            while (sum > m) {
                sum -= nums[left++];
            }
            answer += right - left + 1;
        }
        return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
console.log(solution([1, 1, 1, 1, 1, 1], 3));
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5));