// 가장 긴 바이토닉 수열
// 바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
// 길이가 N인 수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉수열의 길이를 찾는 프로그램을 작성하세요. 
// 만약 수열이 [3, 2, 5, 6, 4, 3, 7]이면 가장 긴 바이토닉 수열은 [2, 5, 6, 4, 3]이다.
// 우리가 찾는 바이토닉 수열은 길이가 3이상이여야 하고, 반드시 증가했다 감소하는 수열이어야 합니다. 
// 이웃한 숫자가 같은 값이면 증가 또는 감소라고 하지 않습니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=300,000)길이의 수열이 주어집니다. 수열의 원소는 자연수입니다.
// ▣ 출력설명
// 가장 긴 바이토닉 수열의 길이를 반환합니다. 만약 주어진 수열에 바이토닉 수열이 존재하지 않으면 0을 반환합니다.
// ▣ 매개변수 형식 1
// [3, 2, 5, 6, 4, 3, 7]
// ▣ 반환값 형식 1
// 5
// ▣ 매개변수 형식 2
// [3, 3, 3]
// ▣ 반환값 형식 2
// 0
// ▣ 매개변수 형식 3
// [1, 2, 3, 4, 5]
// ▣ 반환값 형식 3
// 0

function solution(numbers) {
    let answer = 0;
    let val = [];
    let len = numbers.length;
    let increase = new Array(len).fill(0);
    let decrease = new Array(len).fill(0);
    let dist = 0;

    for(let i = 1; i < len; i++) {
        if(numbers[i-1] < numbers[i]) {
            dist += 1;
            increase[i-1] += dist;
        }
        else{
            increase[i-1] = dist;
            dist = 0;
        }
    }
    
    dist = 0;
    for(let i = len-1; i >= 1; i--) {
        if(numbers[i] < numbers[i-1]) {
            dist += 1;
            decrease[i] += dist;
        }
        else{
            decrease[i] = dist;
            dist = 0;
        }
    }
    for(let i = 0; i < len; i++) {
        val[i] = increase[i] + decrease[i];
    }
    answer = Math.max(...val);
    return answer+1;
}

console.log(solution([3, 2, 5, 6, 4, 3, 7]))
console.log(solution([3, 3, 3]))
console.log(solution([1, 2, 3, 4, 5]))