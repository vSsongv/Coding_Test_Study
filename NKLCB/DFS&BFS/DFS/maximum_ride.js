// 바둑이 승차(DFS)
// 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 
// 그런데 그의 트럭은 C킬로그램 넘게 태울수가 없다. 
// 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
// N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=30)마리 바둑이의 무게 정보가 주어집니다.
// 매개변수 c에 자연수 C(1<=C<=100,000,000)가 주어집니다.
// ▣ 출력설명
// 가장 무거운 무게를 반환하세요.
// ▣ 매개변수 형식 1
// [81, 58, 42, 33, 61], 259
// ▣ 반환값 형식 1
// 242
// ▣ 매개변수 형식 2
// [34, 56, 55, 67, 33, 76, 63, 43], 379
// ▣ 반환값 형식 2
// 372

function solution(nums, m) {
    let answer = Number.MIN_SAFE_INTEGER;
    let len = nums.length;

    function getMaxWeight(w, sum) {
        if(sum > m) return
        if(w === len) {
            answer = Math.max(answer, sum);
        }
        else {
            getMaxWeight(w+1, sum+nums[w]);
            getMaxWeight(w+1, sum);
        }
    }
    getMaxWeight(0, 0);
    return answer;
}

console.log(solution([81, 58, 42, 33, 61], 259));
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));