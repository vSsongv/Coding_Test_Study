// 수열 축소
// 길이가 N인 수열이 주어지면 인접한 두 수의 차이를 이용해 길이가 N-1인 수열을 만듭니다.
// 만약 수열이 [5, 3, 7, 9, -2]라면 [(3-5), (7-3), (9-7), (-2-9)] => [-2, 4, 2, -11]로 수열의 길이를 줄일 수 있습니다. 이런 과정을 길이축소작업이라 하겠습니다.
// N길이의 수열이 주어지면 M번의 길이축소작업을 한 결과를 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=30)길이의 수열이 주어지고, 매개변수 m에 M(M<N)이 주어집니다.
// ▣ 출력설명
// M번의 길이축소작업을 거친 수열을 반환합니다..
// ▣ 매개변수 형식 1
// [5, 3, 7, 9, -2], 1
// ▣ 반환값 형식 1
// [-2, 4, 2, -11]
// ▣ 매개변수 형식 2
// [5, 3, 7, 9, -2], 2
// ▣ 반환값 형식 1
// [6, -2, -13]

// function solution(nums, m){
//     for(let i = 0; i < m; i++) {
//         let newArr = [];
//         for(let j = 0; j < nums.length-1; j++) {
//             newArr.push(nums[j+1]-nums[j]); //newArr에 계산된 값들 push해주고
//         }
//         nums = newArr; //nums를 newArr로 바꿔준다.
//     }
//     return nums;
// }

function solution(nums, m){
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < nums.length-i-1; j++) {
            nums[j] = nums[j+1]-nums[j]; //newArr에 계산된 값들 push해주고
        }
    }
    return nums.slice(0, nums.length-m);
}

console.log(solution([5, 3, 7, 9, -2], 1));
// console.log(solution([5, 3, 7, 9, -2], 2));