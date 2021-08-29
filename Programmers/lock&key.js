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

function isLock(tmp_Rock, len) {
    
    let start_coor = len-1;
    for(let i = start_coor; i <= (start_coor) * 2; i++) {
        for(let j = start_coor; j <= (start_coor) * 2; j++) {
            if(tmp_Rock[i][j] != 1) return false;
        }
    }
    return true;
}

function solution(key, lock) {
    var answer = true;
    
    const len = lock.length;
    const bigRock = Array.from(Array(len + (key.length-1) * 2), () => Array(len + (key.length-1) * 2).fill(0)); //make array that has big size of lock.
     
                
    let start_coor = len-1;
    for(let i = start_coor; i <= (start_coor) * 2; i++) {
        for(let j = start_coor; j <= (start_coor) * 2; j++) {
            bigRock[i][j] = lock[i - start_coor][j - start_coor]; //insert lock in the middle of big array
        }
    }
    
    let c = 0;
    while(c < 4) { //key can be rotated 4 times.
        key = rotate(key);
        let tmp_Rock = bigRock;
        
        for(let x = 0; x < bigRock.length - len; x++) { //bigRock x coordinates
            for(let y = 0; y < bigRock.length - len; y++) { //bigRock y coordinates 
                for(let k = 0; k < key.length; k++) { 
                    for(let l = 0; l < key.length; l++) {
                        tmp_Rock[x+l][y+k] += key[k][l];                        
                    }
                }
                if(isLock(tmp_Rock, len)) return true;
                console.log(bigRock);
                tmp_Rock = bigRock;
                console.log("here");
            }
        }
        c++;
    }  
    return false;   
}