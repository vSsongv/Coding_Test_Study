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

function solution(nums) {
    let maxheap = new MaxHeap();
    for(let i = 0; i < nums.length; i++) {
        maxheap.insert(nums[i]);
    }
    while(maxheap.getSize() > 1) {
        let top1 = maxheap.getTop();
        let top2 = maxheap.getTop();
        if(top1 != top2) {
            maxheap.insert(Math.abs(top1-top2));
        }
    }
    if(maxheap.getSize() === 0) return 0;
    else return maxheap.getTop();
}

console.log(solution([5, 2, 4, 3, 1]));
console.log(solution([7, 6, 3, 2, 4, 5, 1]));
