// https://programmers.co.kr/learn/courses/30/lessons/60059 [자물쇠와 ]

function rotate(key) { //rotate function
    let len = key.length;
    let new_array = Array.from(Array(len), () => Array(len).fill(0));
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            new_array[i][j] = key[len - 1 - j][i];
        }
    }
    return new_array;
}

function isOpen(tmp_Rock, rockLen, keyLen) {
    let start_coor = keyLen-1;
    for(let i = start_coor; i <= rockLen-keyLen; i++) {
        for(let j = start_coor; j <= rockLen-keyLen; j++) {
            if(tmp_Rock[i][j] != 1) return false; 
        }
    }
    return true;
}

function solution(key, lock) {
        
    const rockLen = lock.length;
    const keyLen = key.length;
    let sum = 0;
    
    for(let z = 0; z < rockLen; z++) {
        for(let w = 0; w < rockLen; w++) {
            sum += lock[z][w];
        }
    }
    
    if(sum == rockLen * rockLen) return true;
    
    const bigRock = Array.from(Array(rockLen + (keyLen-1) * 2), () => Array(rockLen + (keyLen-1) * 2).fill(0)); //make array that has big size of lock.
     
                
    let start_coor = keyLen-1;
    for(let i = start_coor; i <= bigRock.length-keyLen; i++) {
        for(let j = start_coor; j <= bigRock.length-keyLen; j++) {
            bigRock[i][j] = lock[i - start_coor][j - start_coor]; //insert lock in the middle of big array
        }
    }
    
    let c = 0;
    while(c < 4) { //key can be rotated 4 times.
        key = rotate(key);
        
        for(let x = 0; x <= bigRock.length - keyLen; x++) { //bigRock x coordinates
            for(let y = 0; y <= bigRock.length - keyLen; y++) { //bigRock y coordinates     
                
                const tmp_Rock = bigRock.map((c) => c.slice());
                
                for(let k = 0; k < keyLen; k++) { 
                    for(let l = 0; l < keyLen; l++) {
                        tmp_Rock[x+k][y+l] += key[k][l];
                    }
                }
                if(isOpen(tmp_Rock, bigRock.length, keyLen)) return true;
            }
        }
        c++;
    }  
    return false;   
}
