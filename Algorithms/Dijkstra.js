// 다익스트라 알고리즘
// 아래의 가중치 방향그래프에서 1번 정점(출발정점)에서 특정 정점(도착정점)까지의 최소 거리 비용을 출력하는 프로그램을 작성하세요. (경로가 없으면 -1를 출력한다)
// ▣ 입력설명
// 매개변수 n에 정점의 수 N(1<=N<=20)주어지고, 매개변수 edges에 간선정보가 주어집니다.
// [1, 2, 12]는 1번 정점에서 2번 정점으로 가는 비용이 12라는 뜻입니다. 
// 각 간선의 비용값은 20을 넘지 않습니다.
// 매개변수 end에 도착정점이 주어집니다.
// ▣ 출력설명
// 1번 정점에서 도착정점까지의 최소비용을 반환합니다. 1번정점에서 도착정점까지 경로가 없다면 -1를 반환합니다.
// ▣ 매개변수 형식 1
// 6, [[1, 2, 12], [1, 3, 4], [2, 1, 2], [2, 3, 5], [2, 5, 5], [3, 4, 5], [4, 2, 2], [4, 5, 5],[6, 4, 5]], 5
// ▣ 반환값 형식 1
// 14

class minHeap {
    constructor() {
        this.heap = [];
        this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
    }
    insert([a, b]) {
        this.heap.push([a, b]);
        this.upheap(this.heap.length - 1);
    }
    upheap(pos) {
        let tmp = this.heap[pos];
        while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
            this.heap[pos] = this.heap[parseInt(pos / 2)];
            pos = parseInt(pos / 2);
        }
        this.heap[pos] = tmp;
    }
    get() {
        if (this.heap.length === 2) {
            return this.heap.pop();
        }
        let res;
        res = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.downheap(1, this.heap.length - 1);
        return res;
    }
    downheap(pos, len) {
        let tmp, i;
        tmp = this.heap[pos];
        while (pos <= parseInt(len / 2)) {
            i = pos * 2;
            if (i < len && this.heap[i][1] > this.heap[i + 1][1]) i++;
            if (tmp[1] <= this.heap[i][1]) break;
            this.heap[pos] = this.heap[i];
            pos = i;
        }
        this.heap[pos] = tmp;
    }
    size() {
        return this.heap.length - 1;
    }
    top() {
        return this.heap[1];
    }
}

let heap = new minHeap();

function solution(n, edges, end) {
    let answer = 0;
    let minH = new minHeap();
    let graph = Array.from(Array(n + 1), () => Array());
    let dist = Array.from({ length: n + 1 }, () => 1000);
    for (let [a, b, c] of edges) {
        graph[a].push([b, c]);
    }
    dist[1] = 0;
    minH.insert([1, 0]);
    //-------------------------------//
    while (minH.size() > 0) {
        let tmp = minH.get();
        let now = tmp[0];
        let nowCost = tmp[1];
        if (nowCost > dist[now]) continue;
        for (let [next, cost] of graph[now]) {
            if (nowCost + cost < dist[next]) {
                dist[next] = nowCost + cost;
                minH.insert([next, dist[next]]);
            }
        }
    }
    //-------------------------------//
    if (dist[end] === 1000) answer = -1;
    else answer = dist[end];
    return answer;
}

// function solution(n, edges, end) {
//     let graph = Array.from(Array(n + 1), () => Array());
//     let dist = Array(n + 1).fill(1000);
//     let ch = Array(n + 1).fill(0);
//     for (let [a, b, c] of edges) graph[a].push([b, c]);

//     dist[1] = 0;
//     for (let i = 1; i <= n; i++) {
//         let min = 0;
//         for (let j = 1; j <= n; j++) {
//             if (ch[j] === 0 && dist[j] < dist[min]) min = j;
//         }
//         ch[min] = 1;
//         for (let [next, cost] of graph[min]) {
//             if (dist[min] + cost < dist[next]) dist[next] = dist[min] + cost; //다음 정점으로 가는 cost가 현재 next node에 저장된 cost보다 낮으면 낮은 값으로 바꿔줘야함.
//         }
//     }
//     return dist[end];
// }

console.log(solution(6, [[1, 2, 12], [1, 3, 4], [2, 1, 2], [2, 3, 5], [2, 5, 5], [3, 4, 5], [4, 2, 2], [4, 5, 5], [6, 4, 5]], 5));