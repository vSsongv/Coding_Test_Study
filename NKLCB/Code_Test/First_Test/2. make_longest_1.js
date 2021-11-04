// 0과 1로 구성된 길이가 N인 수열이 주어집니다. 여러분은 이 수열에서 최대 k번을 0을 1로 변경할 수 있습니다. 
// 여러분이 최대 k번의 변경을 통해 이 수열에서 1로만 구성된 최대 길이의 연속부분수열을 찾는 프로그램을 작성하세요.
// 만약 길이가 15인 다음과 같은 수열이 주어지고 k=2라면
// 1 0 0 1 1 1 0 1 1 1 0 1 0 0 1
// 여러분이 만들 수 있는 1이 연속된 최대 길이의 연속부분수열은 1 0 0 1 1 1 1 1 1 1 1 1 0 0 1 이며 그 길이는 9입니다.
// ▣ 입력설명
// 매개변수 nums 배열에 길이가 N(5<=N<=200,000)인 수열이 주어지고, 30000이하의 k가 주어집니다.
// ▣ 출력설명
// 최대길이를 반환하세요.
// ▣ 매개변수 형식
// [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2
// ▣ 반환값 형식
// 9

function solution(nums, k) {
    var answer = 0;
    let cnt = 0; //1로 바꿔준 횟수
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) cnt += 1; //0을 만나면 cnt 증가
        while (cnt > k) { //k 이상이 되면
            if (nums[left] === 0) cnt -= 1; //cnt를 빼주고
            left += 1; //left이동시켜야 함
        }
        answer = Math.max(answer, right - left + 1); //가장 긴 개수는 계속 갱신 필요.
    }
    return answer;
}

console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2)); //9
// console.log(solution([0, 1, 0, 1, 1, 0], 2)); //5
// console.log(solution([1, 1, 1, 0, 0, 0, 0], 3)); //6
// console.log(solution([1, 0, 1, 0, 0, 1, 0, 1, 0], 2)); //4
// console.log(solution([0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], 3)); //5