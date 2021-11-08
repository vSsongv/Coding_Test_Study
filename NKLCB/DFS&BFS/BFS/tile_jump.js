// 타일 점프
// 현수의 집에서 상점까지는 자연수가 적혀있는 타일이 깔려있습니다. 
// i번째 타일에 적힌 수를 Ai라고 한다면 현수는 i번째 타일 위에서 오른쪽으로 Ai이하만큼 점프할 수 있습니다.
// 예를 들어 현수가 2번째 타일에 있고, 적힌 수가 3이라면 현수는 3, 4, 5번째 타일로 점프할 수 있다.
// 현수가 집에서 상점까지 최소 몇 번의 점프로 갈 수 있는지 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 num에 N개의 타일에 적힌 자연수가 주어집니다. 
// 왼쪽 첫 번째 타일이 현수의 집이고, 오른쪽 끝 타일이 상점이라고 간주합니다.
// ▣ 출력설명
// 최소 점프 횟수를 반환합니다. 현수가 상점으로 갈 수 없다면 -1를 반환합니다.
// ▣ 매개변수 형식 1
// [2, 2, 0, 2, 1, 1]
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// [1, 0, 1, 1, 3, 1, 2, 1]
// ▣ 반환값 형식 2
// -1

function solution(nums) {
    let n = nums.length;
    let checked = Array(n + 1).fill(0);
    let queue = [];

    function jump() {
        queue.push(0);
        checked[0] = 1;
        let L = 0;
        while (queue.length) {
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                let x = queue.shift();
                for (let j = 1; j <= nums[x]; j++) {
                    let nx = x + j;
                    if (nx === n - 1) return L + 1;
                    if (nx > 0 && nx < n && checked[nx] === 0) {
                        checked[nx] = 1;
                        queue.push(nx);
                    }
                }
            }
        }
    }
    answer = jump();
    if (answer == undefined) answer -= 1;
    return answer;
}

console.log(solution([2, 2, 0, 2, 1, 1]));
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1]));