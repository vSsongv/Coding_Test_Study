// https://programmers.co.kr/learn/courses/30/lessons/60059 [자물쇠와 키]

function rotate(key) {
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
    
    for (let i = len-1; i < (len-1) * 2; i++) {
        for (let j = len-1; j < (len-1) * 2; j++) {
            bigRock[i][j] = lock[i - len][j - len];
            console.log(i,j);
        }
    }
    return answer;   
}