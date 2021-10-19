// 이분검색
// 임의의 N개의 숫자가 입력으로 주어집니다. 
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 
// 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 
// 단 중복값은 존재하지 않습니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=1,000,000)개의 수열이 주어집니다.
// 매개변수 m에 M이 주어집니다.
// ▣ 출력설명
// 정렬 후 M의 값의 위치 번호를 반환한다.
// ▣ 매개변수 형식 1
// [23, 87, 65, 12, 57, 32, 99, 81], 32
// ▣ 반환값 형식 1
// 3

function solution(nums, target) {
    nums.sort((a,b) => a-b);
    let left = 0, right = nums.length;

    while(left < right) { // left와 right가 만나는 지점이 target값 이상이 처음 나오는 위치
        let mid = parseInt((right + left) / 2);
        if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }  
    return right+1;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 99));
console.log(solution([10,20,30,40,50], 40));