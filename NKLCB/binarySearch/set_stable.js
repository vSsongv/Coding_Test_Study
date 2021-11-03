// 마구간 정하기(결정알고리즘)
// N개의 마구간이 수직선상에 있습니다. 
// 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
// 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 stables에 N(3<=N<=200,000)개의 마굿간 좌표 xi(0<=xi<=1,000,000,000)가
// 주어집니다. 매개변수 c에 C(2<=C<=N)가 주어집니다.
// ▣ 출력설명
// 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.
// ▣ 매개변수 형식 1
// [1, 2, 8, 4, 9], 3
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// [1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8
// ▣ 반환값 형식 2
// 10

function isValid(stable, dist) { //dist 만큼 차이를 뒀을 때 말을 c마리 둘 수 있는지
    let cnt = 1, point = stable[0];
    for (let i = 1; i < stable.length; i++) {
        if (stable[i] - point >= dist) { //두 말의 위치의 차이가 dist보다 크거나 같으면
            cnt += 1; //말을 둘 수 있음
            point = stable[i]; //다음 포인트와의 차이 보기
        }
    }
    return cnt;
}

function solution(stables, c) {
    stables.sort((a, b) => a - b);
    let left = 1;
    let right = Math.max(...stables);

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (isValid(stables, mid) >= c) { //말을 c마리보다 더 넣을 수 있으면 거리 좀 더 늘려서 놓을 수 있다는 얘기!
            answer = mid;
            left = mid + 1;
        }
        else right = mid - 1;
    }
    return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));