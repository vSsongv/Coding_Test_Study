// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/ [1353-최대 참석가능 이벤트 개수]

//Time Limit Exceeded
//  var maxEvents = function(events) {
//     let answer = 0;
//     let max = 0;
//     events.sort((a, b) => {
//         max = Math.max(max, a[1], b[1])
//         if (a[1] === b[1]) {
//           return a[0] - b[0] //끝나는 날짜 같으면 시작날짜가 빠른 순으로 정렬.
//         }
//         return a[1] - b[1] //기본으로 끝나는 날짜 기준으로 정렬.
//     });
//     const used = new Array(max).fill(false);
//     for (let index = 0; index < events.length; index++) {
//         const [start, end] = events[index]; 
//         for (let j = start; j <= end; j++) { //끝 날짜까지 시간이 남아 있다면 다음 날짜가 비어있는지 확인하자.
//         if (!used[j-1]) { //시작 날짜에 일정이 비어있다면
//             used[j-1] = true; //그날 참가하는 것으로 한다.
//             answer += 1;
//             break
//         }
//       }
//     }
//     return answer;
// }

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
        while(this.getParentVal(index) > this.heap[index]) { //부모 노드의 값이 나보다 작을때까지 반복.
            this.swap(index, this.parentIndex(index));  //swap진행
            index = this.parentIndex(index); //index값 update
        } 
    }

    downHeap(firstIdx) {
        let index = firstIdx;
        while(this.getLeftChilVal(index) !== undefined && (this.getLeftChilVal(index) < this.heap[index] || this.getRightChildVal(index) < this.heap[index])) { //내가 자식 노드보다 크다면 바꿔줘야함.
            let smallerIndex = this.leftChildIndex(index);
            if(this.getRightChildVal(index) !== undefined && this.getRightChildVal(index) < this.heap[smallerIndex]) smallerIndex = this.rightChildIndex(index); //오른쪽자식이 작으면 오른쪽거로 update
            this.swap(index, smallerIndex); //swap 진행
            index = smallerIndex; //index값 update
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

var maxEvents = function(events) {
    let minheap = new MinHeap();
    nums.sort((a, b)=>a[0]-b[0]);

    

    return answer;
}

// console.log(maxEvents([[27,27],[8,10],[9,11],[20,21],[25,29],[17,20],[12,12],[12,12],[10,14],[7,7],[6,10],[7,7],[4,8],[30,31],[23,25],[4,6],[17,17],[13,14],[6,9],[13,14]]));
// console.log(maxEvents([[52,79],[7,34]]));
console.log(maxEvents([[1,2],[1,2],[1,2],[1,6],[1,2]]));
// console.log(maxEvents([[1,2],[2,3],[3,4],[1,2]]));
// console.log(maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]]));
// console.log(maxEvents([[1,2],[1,2],[3,3],[1,5],[1,5]]));
// console.log(maxEvents([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]));
// console.log(maxEvents([[1,5],[1,5],[1,5],[2,3],[2,3]]));