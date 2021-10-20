// 동전교환(냅색 알고리즘)
// 다음과 같이 여러 단위의 동전들이 주어져 있을때 
// 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 
// 각 단위의 동전은 무한정 쓸 수 있다.
// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=12)개 종류의 동전이 주어집니다. 
// 매개변수 m에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 각 동전의 종류는 100원을 넘지 않는다.
// ▣ 출력설명
// 거슬러 줄 동전의 최소개수를 반환합니다.
// ▣ 매개변수 형식 1
// [1, 2, 5], 15
// ▣ 반환값 형식 1
// 3

function solution(nums, m) {
    let answer = 0;
    let dy = Array.from({ length: m + 1 }, () => 100);
    dy[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = nums[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j], dy[j - nums[i]] + 1);
        }
    }
    answer = dy[m];
    return answer;
}
console.log(solution([1, 2, 5], 10));
console.log(solution([1, 5, 10], 15));
console.log(solution([1, 9, 12], 27));
console.log(solution([1, 2, 5], 15));