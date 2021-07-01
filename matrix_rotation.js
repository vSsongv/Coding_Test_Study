// https://programmers.co.kr/learn/courses/30/lessons/77485

function createArray(row, col) {
    let arr = [];
    let num = 0;
    for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
            num += 1;
            arr[i][j] = num;
        }
    }
    return arr;
}

function solution(rows, columns, queries) {
    flag = 0
    var answer = [];
    arr = createArray(rows,columns)
    for(let i = 0; i<queries.length; i++){
        let x1 = queries[i][0]-1;
        let y1 = queries[i][1]-1;
        let x2 = queries[i][2]-1;
        let y2 = queries[i][3]-1;
        
        if(x2-x1 > 1){
            flag = 1
            except_list = [];
            let sx = x1+1;
            let ex = x2-1;
            let sy = y1+1; 
            let ey = y2-1;
            for(sx; sx<=ex; sx++){
                for(let y = sy; y<=ey; y++){
                    except_list.push(arr[sx][y]);
                    console.log(except_list);
                }
            }
        }

        for(x1; x1 <= x2; x1++){
            for(let j = y1; j <= y2; j++){
                if(flag == 1){
                    if(!except_list.includes(arr[x1][j]))
                    console.log(arr[x1][j]);
                }
                else{
                    console.log(arr[x1][j]);
                }
            }
        }
    }
    return answer;
}


console.log(solution(6,6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]]))