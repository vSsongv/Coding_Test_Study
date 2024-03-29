// 초코볼
// 현수는 초코볼과자를 매우 좋아한다. 집에 초코볼과자 봉지가 N(1<=N<=10,000)개가 있다. 
// I번째 봉지에는 nums[i]개의 초코볼이 들어 있습니다.
// 현수는 동생이 학원에서 집으로 돌아오기 전에 초코볼과자를 모두 다 먹어버리기로 결심했습니다. 
// 동생은 학원에서 H시간 후에 집에 도착합니다.
// 현수는 시간당 K개의 초코볼을 먹기로 계획하고 모든 초코볼과자를 H시간안에 다 먹어버리기로 작정했습니다.
// 현수가 시간당 몇 개의 K를 먹으면 H시간안에 모든 초코볼과자를 다 먹을 수 있을까요?
// 최소개수 K를 구하는 프로그램을 작성하세요. 
// 단 한 개의 과자봉지에 K개 미만의 개수가 있다면 현수는 이 봉지를 먹는데 1시간을 소비해야 합니다. 
// 예를 들어 과자봉지에 12개의 초코볼이 들어있고, 시간당 5개(K=5)개를 먹는다면 
// 이 과자봉지의 과자를 다먹는데 현수는 3시간을 소비한 다음, 그 다음 과자봉지를 먹기 시작합니다.
// ▣ 입력설명
// 매개변수 nums에 각 과자봉지에 들어있는 초코볼의 개수가 원소인 배열이 주어집니다.
// 각 봉지의 초코볼의 개수는 100,000를 넘지 않습니다.
// 매개변수 H(nums.length<=H<=100,000,000)가 주어집니다. 과자를 모두 먹는데 H시간까지
// 허용됩니다.
// ▣ 출력설명
// 최소값 K를 반환합니다.
// ▣ 입력예제 1
// [29, 12, 24, 5, 19], 6
// ▣ 출력예제 1
// 24

function solution(nums, h) {
    function count(num) {
        let time = 0;
        for(let choco of nums) { 
            time += Math.ceil(choco/num); //num만큼 먹으면 몇시간을 먹는지 계산
        }
        return time;
    }

    let left = 1, right = Math.max(...nums);
    let answer = 0;
    while(left <= right) { 
        let mid = parseInt((left+right)/2); //중간 시간
        if(count(mid) <= h) { //값이 될 수 있는 경우
            answer = mid; 
            right = mid - 1;  //작은 값을 찾아야 하기 때문에 right값을 mid앞으로 옮겨준다.
        }
        else left = mid + 1; //너무 조금씩 먹는다는 거니까 right값을 mid뒤로 옮겨줌.
    }
    return answer; 
}

console.log(solution([29, 12, 24, 5, 19], 6));
console.log(solution([3,6,7,11],8));