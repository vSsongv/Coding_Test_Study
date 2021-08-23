function rotate(array) {
    let len = array.length;
    let new_array = Array.from(Array(len), () => Array(len).fill(0));
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            new_array[len-i-1][j] = array[j][i];
        }
    }
    return new_array;
}

new_array[j][len-i-1] = arr[i][j]; // 시계 방향
new_array[len-j-1][i] = arr[i][j]; // 반시계 방향
new_array[len-i-1][j] = arr[i][j]; // 상하반전
new_array[i][len-j-1] = arr[i][j]; // 좌우반전