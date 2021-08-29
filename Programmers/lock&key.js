// https://programmers.co.kr/learn/courses/30/lessons/60059 [자물쇠와 키]

function rotate(key) { //rotate function
    let len = key.length;
    let new_key = Array.from(Array(len), () => Array(len).fill(0));
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            new_key[len-i-1][j] = key[j][i];
        }
    }
    return new_key;
}

function isLock(tmp_Rock, rockLen, keyLen) {
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
    
    const bigRock = Array.from(Array(rockLen + (keyLen-1) * 2), () => Array(rockLen + (keyLen-1) * 2).fill(0)); //make array that has big size of lock.
     
                
    let start_coor = keyLen-1;
    for(let i = start_coor; i <= rockLen-keyLen; i++) {
        for(let j = start_coor; j <= rockLen-keyLen; j++) {
            bigRock[i][j] = lock[i - start_coor][j - start_coor]; //insert lock in the middle of big array
        }
    }
    
    let c = 0;
    while(c < 4) { //key can be rotated 4 times.
        key = rotate(key);
        
        for(let x = 0; x < bigRock.length - keyLen; x++) { //bigRock x coordinates
            for(let y = 0; y < bigRock.length - keyLen; y++) { //bigRock y coordinates 
                
                const tmp_Rock = bigRock.map((c) => c.slice());
                
                for(let k = 0; k < keyLen; k++) { 
                    for(let l = 0; l < keyLen; l++) {
                        tmp_Rock[x+l][y+k] += key[k][l];                        
                    }
                }
                if(isLock(tmp_Rock, rockLen, keyLen)) return true;
            }
        }
        c++;
    }  
    return false;   
}