// 예금 인출
// 현수는 용돈을 효율적으로 활용하기 위해 계획을 짜기로 하였다. 
// 현수는 앞으로 N일 동안 자신이 사용할 금액을 계산하였고, 
// 돈을 펑펑 쓰지 않기 위해 정확히 M번만 통장에서 돈을 빼서 쓰기로 하였다. 
// 현수는 통장에서 K원을 인출하며, 통장에서 뺀 돈으로 하루를 보낼 수 있으면 그대로 사용하고, 
// 모자라게 되면 남은 금액은 통장에 집어넣고 다시 K원을 인출한다. 
// 다만 현수는 M이라는 숫자를 좋아하기 때문에, 정확히 M번을 맞추기 위해서 
// 남은 금액이 그날 사용할 금액보다 많더라도 남은 금액은 통장에 집어넣고 다시 K원을 인출할 수 있다. 
// 현수는 돈을 아끼기 위해 인출 금액 K를 최소화하기로 하였다. 
// 현수가 필요한 최소 금액 K를 계산하는 프로그램을 작성하시오.
// ▣ 입력설명
// 매개변수 nums에 현수가 N(1<=N<=100,000)일 동안 사용할 금액의 정보가 차례대로 주어집니다. 
// 매개변수 m에 M이 주어집니다.
// ▣ 출력설명
// 최소값 K를 반환합니다.
// ▣ 매개변수 형식 1
// [200, 300, 200, 200, 300, 100, 300], 3
// ▣ 반환값 형식 1
// 700
// 입력설명 : 현수는 첫날 200원을 사용하고, 두 번째 날 300원을 사용하고, .....

function solution(nums, m) {
    let n = nums.length;
    let answer = 0;
    let left = 0, sum = 0;

    nums.forEach(el => {
        left = Math.max(left, el); 
    });

    let right = sum;
    function count(mid) {
        let cnt = 1, sum = mid;
        for(let i = 0; i < n; i++) {
            if(sum < nums[i]) {
                sum = mid;
                cnt += 1;
            }
            sum -= nums[i];
        }
        return cnt;
    }
    while(left <= right) {
        let mid = parseInt((left+right)/2);
        if(count(mid) <= m) {
            answer = mid;
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return answer;
}

console.log(solution([200, 300, 200, 200, 300, 100, 300], 3));