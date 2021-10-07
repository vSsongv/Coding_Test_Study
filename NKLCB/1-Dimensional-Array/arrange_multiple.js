// 제곱수 정렬
// 길이가 N인 수열이 주어집니다. 수열의 원소를 제곱하여 오름차순 정열해 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=100,000)길이의 수열이 주어집니다. 수열의 원소는 정수입니다.
// ▣ 출력설명
// 각 원소를 제곱하여 오름차순 정렬한 배열은 반환합니다.
// ▣ 매개변수 형식 1
// [-4, -1, 0, 3, 10]
// ▣ 반환값 형식 1
// [0, 1, 9, 16, 100]
// ▣ 매개변수 형식 2
// [-7, -3, 2, 3, 11]
// ▣ 반환값 형식 2
// [4, 9, 9, 49, 121]

// function solution(nums){
//     let answer = [];
//     for(let i = 0; i < nums.length; i++) {
//         answer.push(nums[i] * nums[i]);
//     }
//     answer.sort(function(a, b) {
//         return a - b;
//       });

//     return answer
// }

function solution(nums){
    let n = nums.length;
    let answer = Array(n).fill(0); //먼저 n만큼의 배열을 생성해 두고,
    let left = 0; let right = n-1;
    
    for(let l = n-1; l >= 0; l--) { //배열의 맨 뒤에서부터 채워나간다. 그 기준은
        if(Math.abs(nums[left]) > Math.abs(nums[right])) { //맨 앞과 맨 뒷 값의 절댓값을 비교해서, 큰 수의 제곱을 맨 뒤에서부터 넣는다. 하지만 원본 배열이 정렬되있어서 가능한 방법임.
            answer[l] = nums[left] * nums[left];
            left++;
        }
        else {
            answer[l] = nums[right] * nums[right];
            right--;
        }
    }
    return answer
}

console.log(solution([-7, -3, 2, 3, 11]));