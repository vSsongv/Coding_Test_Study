// 가장 긴 수열
// 길이가 N인 수열이 주어지면 이 수열에서 연속으로 증가하거나, 또는 연속으로 작아지는 부분
// 수열 중 가장 길이가 긴 수열을 찾는 프로그램을 작성하세요.
// 만약 [5, 3, 6, 7, 9, 8, 5, 3, 1, 2]이 주어지면 우리가 찾는 가장 긴 수열은 [9, 8, 5, 3, 1] 입니다.
// 수열 [1, 2, 3, 3, 4, 5, 6]과 같이 같은 값이 연속으로 있는 것은 증가 또는 감소로 보지 않기 때문에 가장 긴 수열은 [3, 4, 5, 6]이 됩니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=100,000)길이의 수열이 주어집니다. 수열의 원소는 자연수입니다.
// ▣ 출력설명
// 가장 긴 수열의 길이를 반환합니다.
// ▣ 매개변수 형식 1
// [5, 3, 6, 7, 9, 8, 5, 3, 1, 2]
// ▣ 반환값 형식 1
// 5
// ▣ 매개변수 형식 2
// [1, 2, 3, 3, 4, 5, 6, 7, 7]
// ▣ 반환값 형식 2
// 5

function solution(nums) {
    let answer = 0;
    let up = 1, down = 1; maxUp = 0, maxDown = 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] < nums[i]) {
            up++;
        }
        else{
            maxUp = Math.max(maxUp, up);
            up = 1;
        }
        if(nums[i-1] > nums[i]) {
            down++;
        }
        else{
            maxDown = Math.max(maxDown, down);
            down = 1;
        }
    }
    maxUp = Math.max(maxUp, up);
    maxDown = Math.max(maxDown, down);
    answer = Math.max(maxUp, maxDown);
    return answer;
}

console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2]));
console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7]));