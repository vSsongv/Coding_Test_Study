function solution(board) {
    function verifyNum(arr) {
        for (let i = 1; i < 10; i++) {
            if (!arr.includes(i)) return false;
        }
        return true;
    }
    
    for (let i = 0; i < board.length; i++) {
        if (!verifyNum(board[i])) return 'NO';
        let boardCol = board.map((x, j, arr) => arr[j][i]);
        if (!verifyNum(boardCol)) return 'NO';
    }

    let boardBox = [];
    let box = [];
    let index = 0;
    let i = 0;
    while (i < 9) {
        for (let j = index; j < index + 3; j++) {
            box.push(board[j][i]);
        }
        i++;
        if (box.length > 8) {
            if (!verifyNum(box)) return 'NO';
            boardBox.push(box);
            box = [];
            if (boardBox.length % 3 == 0) {
                i = 0;
                index += 3;
                if (boardBox.length > 8) return 'YES';
            }
        }
    }
}

console.log(solution([[1, 4, 3, 6, 2, 8, 5, 7, 9],
[5, 7, 2, 1, 3, 9, 4, 6, 8],
[9, 8, 6, 7, 5, 4, 2, 3, 1],
[3, 9, 1, 5, 4, 2, 7, 8, 6],
[4, 6, 8, 9, 1, 7, 3, 5, 2],
[7, 2, 5, 8, 6, 3, 9, 1, 4],
[2, 3, 7, 4, 8, 1, 6, 9, 5],
[6, 1, 9, 2, 7, 5, 8, 4, 3],
[8, 5, 4, 3, 9, 6, 1, 2, 7]]));

console.log(solution([[2, 4, 3, 6, 2, 8, 5, 7, 8],
[4, 7, 2, 1, 3, 9, 4, 6, 9],
[9, 8, 6, 7, 5, 4, 2, 3, 1],
[3, 9, 1, 5, 4, 2, 7, 8, 6],
[4, 6, 8, 9, 1, 7, 3, 5, 2],
[7, 2, 5, 8, 6, 3, 9, 1, 4],
[2, 3, 7, 4, 8, 1, 6, 9, 5],
[6, 1, 9, 2, 7, 5, 8, 4, 3],
[8, 5, 4, 3, 9, 6, 1, 2, 7]]));