// 바이토닉 수열
// 바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미합니다.
// 길이가 N인 수열이 주어지면 이 수열이 바이토닉 수열인지 판별하는 프로그램을 작성하세요.
// 만약 [1, 2, 3, 4, 2, 1]이면 바이토닉 수열입니다. 
// 하지만 [1, 2, 2, 3, 2, 1]과 같이 같은 값이 연속으로 있으면 바아토닉이 수열이라 하지 않습니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=30)길이의 수열이 주어집니다. 수열의 원소는 자연수입니다.
// ▣ 출력설명
// 바이토닉 수열이면 “YES", 아니면 ”NO"를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 2, 3, 4, 5, 3, 1]
// ▣ 반환값 형식 1
// YES
// ▣ 매개변수 형식 2
// [1, 3, 4, 5, 5, 6, 4, 3]
// ▣ 반환값 형식 2
// NO
// ▣ 매개변수 형식 2
// [1, 2, 3, 4, 5]
// ▣ 반환값 형식 2
// NO

function solution(nums) {
    let answer = "YES";
    let n = nums.length;
    let i = 0;

    while(i+1 < n && nums[i] < nums[i+1]) i++;
    if(i === 0 || i === n-1) answer = "NO";
    while(i+1 < n && nums[i] > nums[i+1]) i++;
    if(i !== n-1) answer = "NO";
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]));
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution([1, 2, 3, 4, 5]));