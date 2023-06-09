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

class MinHeap extends Heap {
    UpHeap(lastIdx) {
        let index = lastIdx;
        while (this.getParentVal(index) > this.heap[index]) { //부모 노드의 값이 나보다 작을때까지 반복.
            this.swap(index, this.parentIndex(index));  //swap진행
            index = this.parentIndex(index); //index값 update
        }
    }

    downHeap(firstIdx) {
        let index = firstIdx;
        while (this.getLeftChilVal(index) !== undefined && (this.getLeftChilVal(index) < this.heap[index] || this.getRightChildVal(index) < this.heap[index])) { //내가 자식 노드보다 크다면 바꿔줘야함.
            let smallerIndex = this.leftChildIndex(index);
            if (this.getRightChildVal(index) !== undefined && this.getRightChildVal(index) < this.heap[smallerIndex]) smallerIndex = this.rightChildIndex(index); //오른쪽자식이 작으면 오른쪽거로 update
            this.swap(index, smallerIndex); //swap 진행
            index = smallerIndex; //index값 update
        }
    }

    insert(val) {
        this.heap.push(val);
        this.UpHeap(this.heap.length - 1);
    }

    getTop() {
        if (this.getSize() === 0) return "Heap is empty";
        let top = this.getPeek();
        this.heap[0] = this.heap[this.getSize() - 1];//마지막 원소를 top에 넣어준다.
        this.heap.pop();
        this.downHeap(0);
        return top;
    }
}

class minHeap {
    constructor() {
        this.heap = [];
        this.heap.push(Number.MIN_SAFE_INTEGER);
    }
    insert(val) {
        this.heap.push(val);
        this.upheap(this.heap.length - 1);
    }
    upheap(pos) {
        let tmp = this.heap[pos];
        while (tmp < this.heap[parseInt(pos / 2)]) {
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
            if (i < len && this.heap[i] > this.heap[i + 1]) i++;
            if (tmp <= this.heap[i]) break;
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

const minheap = new MinHeap();
minheap.insert(1);
minheap.insert(10);
minheap.insert(5);
minheap.insert(100);
minheap.insert(8);

console.log(minheap); //array(5) [1, 8, 5, 100, 10]
console.log(minheap.getTop()); // 1
console.log(minheap.getTop()); // 5
console.log(minheap.getTop()); // 8
console.log(minheap.getTop()); // 10
console.log(minheap.getTop()); // 100
console.log(minheap.getTop());
console.log(minheap); // array(0)
