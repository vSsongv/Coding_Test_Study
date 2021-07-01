// https://programmers.co.kr/learn/courses/30/lessons/77485

function createArray(row, col) {
    let arr = []
    let num = 0
    for (let i = 0; i < row; i++) {
        arr[i] = []
        for (let j = 0; j < col; j++) {
            num += 1
            arr[i][j] = num
        }
    }
    return arr;
}

function solution(rows, columns, queries) {
    var answer = [];
    arr = createArray(rows,columns)
    for(let i = 0; i<queries.length; i++){
        let x1 = queries[i][0]-1
        let x2 = queries[i][1]-1
        let y1 = queries[i][2]-1
        let y2 = queries[i][3]-1
        for(x1; x1 <= x2; x1++){
            for(y1; y1 <= y2; y1++){
                console.log(x1,x2,y1,y2)
            }
        }
    }
    return answer;
}


console.log(solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]))