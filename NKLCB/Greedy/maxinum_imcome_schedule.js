// 최대 수입 스케쥴
// 현수는 유명한 강연자이다. N개이 기업에서 강연 요청을 해왔다. 
// 각 기업은 D일 안에 와서 강연을 해 주면 M만큼의 강연료를 주기로 했다.
// 각 기업이 요청한 D와 M의 정보를 바탕으로 가장 많을 돈을 벌 수 있도록 강연 스케쥴을 짜야 한다.
// 단 강연의 특성상 현수는 하루에 하나의 기업에서만 강연을 할 수 있다.
// ▣ 입력설명
// 매개변수 nums에 N(1<=N<=10,000)개의 기업이 요청한 강연 M, D가 차례로 주어집니다.
// ▣ 출력설명
// 현수가 최대로 벌 수 있는 수입을 반환합니다.
// ▣ 매개변수 형식 1
// [[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]
// ▣ 반환값 형식 1
// 150
// ▣ 매개변수 형식 2
// [[50, 2], [40, 2], [20, 1], [10, 1]]
// ▣ 반환값 형식 2
// 90
// 입력설명 :
// 현수의 스케쥴의 시작은 1일부터 출발합니다.
// [[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]이면 
// 첫 번째 기업의 강연정보인 [50, 2]는 2일 안에(2일포함) 와서 강연을 해주면 50의 강연료를 주겠다는 의미입니다.
// 네 번째 정보인 [60, 3]은 3일 안에 와서 강연을 해주면 60의 강연료를 주겠다는 의미입니다.
// 즉 현수가 1일, 2일, 3일 중 아무 날에 가서 강연을 하면 60의 강연료를 받습니다.

class maxHeap {
    constructor() {
        this.heap = [];
        this.heap.push(100);
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
    let answer = 0;
    nums.sort((a,b) => b[1]-a[1]); //날짜 기준으로 정렬해준 후
    let day = nums[0][1];
    let MaxHeap = new maxHeap();
    let i = 0;

    for(let d = day; d >= 1; d--) { //제일 늦게 가도 되는 애부터 시작해서 1일만에 가야 하는 일까지 줄어든다.
        for( ; i < nums.length; i++) {  //배열 전체를 순회해야 함.
            if(nums[i][1] < d) break; //가야 되는 날짜가 하루 달라지면 강연료를 더해야 한다.
            MaxHeap.insert(nums[i][0]); //일단 강연료들은 insert 한다.
        }
        if(MaxHeap.getSize() > 0) answer += MaxHeap.getTop(); //받을 수 있는 강연료 중 제일 비싼 값을 받는다.(root값)
    }
    return answer;
}

console.log(solution([[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]));
console.log(solution([[50, 2], [40, 2], [20, 1], [10, 1]]));