// https://programmers.co.kr/learn/courses/30/lessons/60059 [자물쇠와 키]

function rotate(key) { //90도 rotate func
    let len = key.length;
    let new_key = Array.from(Array(len), () => Array(len).fill(0));
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            new_key[len-i-1][j] = key[j][i];
        }
    }
    return new_key;
}

function solution(key, lock) {
    var answer = true;
    
    const len = lock.length;
    const bigRock = Array.from(Array(len + (key.length-1) * 2), () => Array(len + (key.length-1) * 2).fill(0));
     
    let start_coor = len-1;
    for (let i = start_coor; i <= (start_coor) * 2; i++) {
        for (let j = start_coor; j <= (start_coor) * 2; j++) {
            bigRock[i][j] = lock[i - start_coor][j - start_coor];  //insert lock in bigRock.
        }
    }
    
    for(let x = 0; x < bigRock.length; x++) {
        for(let y = 0; y < )
    }
    
    return answer;
    
}