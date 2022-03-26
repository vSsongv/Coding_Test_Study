function solution(rows, columns, connections, queries) {
    var answer = [];
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(columns).fill(0);
    }
    let row_con = new Array(rows + 2);
    for (let i = 0; i < row_con.length; i++) {
        row_con[i] = new Array(columns + 2).fill(0);
    }
    let col_con = new Array(rows + 2);
    for (let i = 0; i < col_con.length; i++) {
        col_con[i] = new Array(columns + 2).fill(0);
    }
    for (let i = 0; i < connections.length; i++) {
        if (connections[i][1] === connections[i][3]) {
            // 세로연결
            let x = Math.max(connections[i][0], connections[i][2]);
            col_con[x][connections[i][1]] = 1;
        } else {
            // 가로연결
            let y = Math.max(connections[i][1], connections[i][3]);
            row_con[connections[i][0]][y] = 1;
        }
    }

    for (let i = 0; i < queries.length; i++) {
        let cnt = 0;
        let start_x = queries[i][0];
        let start_y = queries[i][1];
        let end_x = queries[i][2];
        let end_y = queries[i][3];
        let big_x = Math.max(start_x, end_x);
        let big_y = Math.max(start_y, end_y);
        let small_x = Math.min(start_x, end_x);
        let small_y = Math.min(start_y, end_y);
        for (let j of [small_x, big_x + 1]) {
            for (let k = small_y; k <= big_y; k++) {
                if (col_con[j][k] === 1) {
                    //   console.log(j, k);
                    cnt++;
                    col_con[j][k] = 0;
                }
            }
        }
        for (let j of [small_y, big_y + 1]) {
            for (let k = small_x; k <= big_x; k++) {
                if (row_con[k][j] === 1) {
                    //   console.log(j, k);
                    cnt++;
                    row_con[k][j] = 0;
                }
            }
        }

        // console.log(cnt);
        answer.push(cnt);
    }
    return answer;
}