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
    let visited = [];
    let cnt = 0;
    let left = 0, right = 0;
    while (right <= nums.length - 1) {
        // if (nums[right++] === 0) visited.push(right); //right index를 list에 push.
        if (nums[right++] === 0) cnt += 1; //right index를 list에 push.
        if (cnt === k) { //만약 list 길이가 k와 같다면 k번 바꿔본 상태라는 것.
            while (nums[right] !== 0 && right <= nums.length - 1) right += 1;
            let comp = 0;
            if (left !== 0) {
                comp = (nums[left] === 0) ? right - left - 1 : right - left;
            }
            else if (right === nums.length - 1) comp = right - left + 1;
            else comp = right - left;
            answer = Math.max(answer, comp); //현재 answer와 지금 바꾼 최대 길이 중 큰 값을 answer로 해주고
            cnt -= 1;
            while (left <= nums.length - 1) {
                left += 1; //left index 옮기기.
                if (nums[left] === 0) break;
            }
        }
    }
    return answer;
}

console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2)); //9
console.log(solution([0, 1, 0, 1, 1, 0], 2)); //6
console.log(solution([1, 1, 1, 0, 0, 0, 0], 3)); //6
console.log(solution([1, 0, 1, 0, 0, 1, 0, 1, 0], 2)); //4
console.log(solution([0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], 3)); //5