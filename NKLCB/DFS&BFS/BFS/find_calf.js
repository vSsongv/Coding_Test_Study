// 송아지 찾기(BFS : 상태트리탐색)
// 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아
// 지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음
// 과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다.
// 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다. 
// 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 s에 현수의 위치 S와 매개변수 e에 송아지의 위치 E가 주어집니다.
// 직선의 좌표 점은 1부터 10,000까지이다.
// ▣ 출력설명
// 점프의 최소횟수를 반환합니다. 답은 1이상입니다.
// ▣ 매개변수 형식 1
// 5 14
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// 8 3
// ▣ 반환값 형식 2
// 5

function solution(s, e) {
    let checked = new Array(10001).fill(0);
    let queue = [];

    function move() {
        queue.push(s); //queue에 현재 위치 push
        checked[s] = 1; //확인한 경로이므로 checked배열에 check
        let L = 0;
        while (queue.length) {
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                let x = queue.shift(); // queue의 처음 값을 빼주고,
                for (let nx of [x - 1, x + 1, x + 5]) {
                    if (nx === e) return L + 1; //다음으로 이동할 위치가 동생이 있는 위치라면 현재  level(이동한 초) 리턴
                    if (nx > 0 && nx <= 10000 && checked[nx] === 0) { //확인하지 않은 경로라면 탐색.
                        checked[nx] = 1;
                        queue.push(nx);
                    }
                }
            }
            L += 1; //한 level을 다 돌았으면(3가지 경우 다 봤으면) 다음 level로 증가.
        }
    }
    return move();
}

console.log(solution(5, 17));
console.log(solution(8, 3));