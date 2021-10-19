// 자연수 찾기(이분검색)
// 자연수로 채워진 길이가 N인 수열이 주어집니다. 이 수열은 오름차순으로 정렬되어 있습니다.
// 자연수 K가 주어지면 이 수열중에서 오름차순을 기준으로 이 수열에서 빠진 자연수 중 K번째 수를 찾는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 길이 N(3<=N<=200,000)의 수열이 주어집니다.
// 매개변수 k에 자연수 K가 주어집니다.
// ▣ 출력설명
// 빠진 자연수 중 K번째 수를 반환합니다.
// ▣ 매개변수 형식 1
// [2, 5, 7, 9, 12], 6
// ▣ 반환값 형식 1
// 10
// 출력설명 : 수열에서 빠진 자연수는 차례대로 1, 3, 4, 6, 8, 10, 11, 13, .....
// 이고 6번째 수는 10입니다.

function solution(nums, k) {
    let left = 0;
    let right = nums.length-1;
    let answer = 0;

    while(left <= right) {
        let mid = parseInt((left+right)/2);
        if(nums[mid] - mid - 1 < k) {  //nums[i]값에서 index를 뺀 값이 0이 아니면 제대로 된 index에 위치하지 않은 것. 
            //nums[mid] - mid - 1값이 k보다 작으면 k번째 애는 현재 mid보다 큰 값중에 있다.
            left = mid + 1;
        }
        else right = mid - 1; //아니라면 right보다 앞의 값에 있다.
    }       
    console.log("g",left);
    answer = left+k;
    return answer;
}

console.log(solution([2, 5, 7, 9, 12], 6));
console.log(solution([2, 3, 4, 7, 11], 5)); //9