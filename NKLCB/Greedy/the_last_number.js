// 마지막 남은 수
// N길이의 수열이 주어집니다. 현수는 이 수열에서 가장 큰 두 개의 수를 뽑아 다음과 같은 행동을 합니다.
// 만약 가장 큰 두 수가 a, b라면
// 1. a==b(같다)이면 수열에서 두 수는 사라집니다.
// 2. a!=b(다르다)이면 두 수 a와 b는 사라지고, |a-b|가 수열에 추가됩니다.
// 이 과정을 반복하면 최종적으로 수열에서 1개의 수가 남거나 모두 사라지게 됩니다.
// 예들 들어 N=5인 수열 [5, 2, 4, 3, 1]이 주어지면
// 5, 4가 뽑히고 (5-4)의 값인 1이 추가되어 [1, 2, 3, 1]이 됩니다.
// 3, 2가 뽑히고 (3-2)이 값인 1이 추가되어 [1, 1, 1]이 됩니다.
// 1, 1이 뽑히고 두 수는 사라지므로 수열은 [1]이 됩니다.
// 최종결과 마지막 남은 수는 1입니다.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=200,000)길이의 수열이 주어집니다.
// ▣ 출력설명
// 최종적으로 남은 수를 반환하세요. 남은 수가 없다면 0을 반환합니다.
// ▣ 매개변수 형식 1
// [5, 2, 4, 3, 1]
// ▣ 반환값 형식 1
// 1
// ▣ 매개변수 형식 2
// [7, 6, 3, 2, 4, 5, 1]
// ▣ 반환값 형식 1
// 0

class maxHeap {
    constructor() {
        this.heap = [];
        this.heap.push(1e9);
    }

    upHeap(pos) {
        let tmp = this.heap[pos];
        while(tmp > this.heap[parseInt(pos/2)]) {
            this.heap[pos] = this.heap[parseInt(pos/2)];
            pos = parseInt(pos/2);
        }
        this.heap[pos] = tmp;
    }

    downHeap(pos, len) {
        let tmp = this.heap[pos], child;
        while(pos <= parseInt(len/2)) {
            child = pos * 2;
            if(child < len && this.heap[child] < this.heap[child+1]) child += 1;
            if(tmp >= this.heap[child]) break;                                                       
            this.heap[pos] = this.heap[child];
            pos = child;
        }
        this.heap[pos] = tmp;
    }

    insert(val) {
        this.heap.push(val);
        this.upHeap(this.heap.length-1);
    }

    getTop() {
        if(this.heap.length === 2) return this.heap.pop();
        if(this.heap.length === 1) return 0;
        let peak = this.heap[1]; //최대값
        this.heap[1] = this.heap.pop(); //맨 끝 노드를 root에 넣고
        this.downHeap(1, this.heap.length-1); //downHeap실행
        return peak;
    }

    getSize() {
        return this.heap.length-1;
    }
}

function solution(nums) {
    let MaxHeap = new maxHeap();
    for(let i = 0; i < nums.length; i++) {
        MaxHeap.insert(nums[i]);
    }
    while(MaxHeap.getSize() > 1) {
        let top1 = MaxHeap.getTop();
        let top2 = MaxHeap.getTop();
        if(top1 != top2) {
            MaxHeap.insert(Math.abs(top1-top2));
        }
    }
    if(MaxHeap.getSize() === 0) return 0;
    else return MaxHeap.getTop();
}

console.log(solution([5, 2, 4, 3, 1]));
console.log(solution([7, 6, 3, 2, 4, 5, 1]));
