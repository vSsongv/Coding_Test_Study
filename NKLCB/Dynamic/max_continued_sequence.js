// 최대 부분 증가수열
// N개의 자연수로 이루어진 수열이 주어졌을 때, 
// 그 중에서 가장 길게 증가하는(작은 수에서 큰수로) 원소들의 집합을 찾는 프로그램을 작성하라. 
// 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면 
// 가장 길게 증가하도록 원소들을 차례대로 뽑아내면 2, 5, 6, 7, 12를 뽑아내어 
// 길이가 5인 최대 부분 증가수열을 만들 수 있다.
// ▣ 입력설명
// 매개변수 nums에 길이가 N(1≤N≤1,000)인 수열이 주어집니다.
// ▣ 출력설명
// 부분증가수열의 최대 길이를 반환합니다.
// ▣ 매개변수 형식 1
// [5, 3, 7, 8, 6, 2, 9, 4]
// ▣ 반환값 형식 1
// 4
//수열도 출력해보기, 반대로 돌면서 max값부터 하나씩 뺴주면서 answer 배열에 push 하고 마지막에 배열 값 reverse해서 출력하면 가능

function solution(nums) {
    let dp = new Array(nums.length).fill(1);
    dp[0] = 1;
    let cnt = 1;
    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > max) {
            cnt += 1;
            dp[i] = cnt;
            max = nums[i];
        }
    }
    return Math.max(...dp);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3]));