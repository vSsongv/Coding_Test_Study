class Heap {
    constructor() {
        this.heap = [];
    }
    //값을 서로 바꾸는 메소드
    swap(index1, index2) {
        let temp = this.heap[index1]; // heap의 index1의 값을 temp(임시공간)에 담음
        this.heap[index1] = this.heap[index2]; // index1에 index2의 값을 저장
        this.heap[index2] = temp; // index2에 아까 index1의 값을 temp에 넣어놓은 값을 저장
    }
    //부모 인덱스 구하는 메소드
    parentIndex(myIdx) {
        return Math.floor((myIdx - 1) / 2);
    }
    //왼쪽 자식 인덱스 구하는 메소드
    leftChildIndex(myIdx) {
        return myIdx * 2 + 1;
    }
    //오른쪽 자식 인덱스 구하는 메소드
    rightChildIndex(myIdx) {
        return myIdx * 2 + 2;
    }
    //부모 노드 값 구하는 메소드
    getParentVal(myIdx) {
        return this.heap[this.parentIndex(myIdx)];
    }
    //왼쪽 자식 노드 값 구하는 메소드
    getLeftChilVal(myIdx) {
        return this.heap[this.leftChildIndex(myIdx)];
    }
    //오른쪽 자식 노드 값 구하는 메소드
    getRightChildVal(myIdx) {
        return this.heap[this.rightChildIndex(myIdx)];
    }
    //최대 힙의 경우 최댓값을 반환하고 최소 힙의 경우 최솟값을 반환하는 메소드
    getPeek() {
        return this.heap[0];
    }
    //힙의 크기(항목 개수)를 반환하는 메소드
    getSize() {
        return this.heap.length;
    }
}

class MaxHeap extends Heap {
    UpHeap(lastIdx) {
        let index = lastIdx;
        while(this.getParentVal(index) < this.heap[index]) { //부모 노드의 값이 나보다 클때까지 반복.
            this.swap(index, this.parentIndex(index));  //swap진행
            index = this.parentIndex(index); //index값 update
        } 
    }

    downHeap(firstIdx) {
        let index = firstIdx;
        while(this.getLeftChilVal(index) !== undefined && (this.getLeftChilVal(index) > this.heap[index] || this.getRightChildVal(index) > this.heap[index])) { //내가 자식 노드보다 작다면 바꿔줘야함.
            let biggerIndex = this.leftChildIndex(index);
            if(this.getRightChildVal(index) !== undefined && this.getRightChildVal(index) > this.heap[biggerIndex]) biggerIndex = this.rightChildIndex(index); //오른쪽자식이 크면 오른쪽거로 update
            this.swap(index, biggerIndex); //swap 진행
            index = biggerIndex; //index값 update
        }
    }

    insert(val) {
        this.heap.push(val);
        this.UpHeap(this.heap.length - 1);
    }

    getTop() {
        if(this.getSize() === 0) return "Heap is empty";
        let top = this.getPeek();
        this.heap[0] = this.heap[this.getSize()-1];//마지막 원소를 top에 넣어준다.
        this.heap.pop();
        this.downHeap(0);
        return top;
    }
}

// 작업 스케쥴
// 현수에게 N개의 작업에 대한 정보가 주어지면 현수는 이 작업들을 최적으로 스케쥴을 짜서 최대한 많은 작업을 완성하려고 합니다. 여러분이 현수를 도와주세요.
// 만약 현수에게 5개의 작업이 다음과 같이 주어지면
// [[3, 11], [5, 10], [3, 10], [2, 10], [4, 12]]
// 첫 번째 작업은 해당 작업을 하는게 걸리는 일수가 3일이고, 11일까지는 완료를 해야 한다는 뜻입니다.
// 1일부터 시작해서 [2, 10], [3, 10], [3, 11], [4, 12] 작업들을 하면 12일까지 4개의 작업을 완료할 수 있습니다.
// ▣ 입력설명
// 매개변수 tasks에 N(1<=N<=100,000)개 작업정보가 주어집니다.
// ▣ 출력설명
// 현수가 할 수 있는 작업의 최대 개수를 반환합니다.
// ▣ 매개변수 형식 1
// [[3, 11], [5, 10], [3, 10], [2, 10], [4, 12]]
// ▣ 반환값 형식 1
// 4

function solution(tasks) {
    tasks.sort((a, b)=>a[1]-b[1]);
    let maxH = new MaxHeap();
    let time=0;
    for(let x of tasks){
        if(time + x[0] <= x[1]){ //현재 날짜가 due date보다 작으면
            maxH.insert(x[0]); //insert
            time += x[0]; 
        }
        //다음 일을 할 경우 날짜가 넘어버렸을 때,
        else if(maxH.getSize()> 0 && maxH.getPeek() > x[0]){ //heap이 존재하고, heap의 루트 값(걸리는 시간)이 다음 작업이 걸리는 시간보다 크면 해당 값을 제거하고 다음 작업을 해야함.
            time += (x[0]-maxH.getTop()); //현재까지 걸린 시간에서 현재 루트값을 빼주고, 다음 작업시간을 더한 연산을 해 준다.
            maxH.insert(x[0]); //진행할 작업을 insert해 준다.
        }
        //다음 작업을 하면 날짜가 넘어버리는 경우는 pass
    }
    return maxH.getSize(); //현재 heap의 크기가 작업 가능한 수이다.
}

console.log(solution([[3, 11], [5, 10], [3, 10], [2, 10], [4, 12]]));//4
console.log(solution([[3, 11], [5, 10], [2, 10], [7, 12]]));//3
console.log(solution([[1, 2]]));//1
console.log(solution([[3, 2], [4, 3]]));//0
console.log(solution([[3, 11], [5, 10], [3, 10], [2, 10], [4, 12], [5, 15], [3, 17]]));//5
console.log(solution([[7, 11], [6, 10], [3, 10], [2, 10], [1, 12]]));//3