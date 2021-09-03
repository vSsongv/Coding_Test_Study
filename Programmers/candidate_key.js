// https://programmers.co.kr/learn/courses/30/lessons/42890 [후보 키]

function combi(order, num) {
    let results = [];
    if (num == 1) {
        return order.map((element) => [element]);
    }
    order.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = combi(rest, num - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

function checkKey(keyArr, combiKey) {
    for(let k = 0; k < keyArr.length; k++) {
        let cnt = 0;
        let keyEle = keyArr[k]
        keyEle.forEach((ele) => {
            if(combiKey.includes(ele)) cnt++;
        });
        if(cnt == keyEle.length) return false;
    }
    return true;
}

function solution(relation) {
    let row = relation.length;
    let arr = [];
    let keyArr = [];
    var answer = 0;

    for(let i = 0; i < relation[0].length; i++) {
        arr.push(i);
    }

    let combination = [];
    for(let j = 0; j < arr.length; j++) {
        combination = combi(arr, j+1);
        for(let k = 0; k < combination.length; k++) { //roop during number of element in combination
            let check = [];
            let len = combination[k].length;
            let key = 0;
            if(len > 1) {
                let h = 0;
                while(h < row) {
                    let addedKey = '';
                    for(let y = 0; y < len; y++) addedKey += relation[h][combination[k][y]]; //make added string key
                    if(check.includes(addedKey) == true) break;
                    else check.push(addedKey);
                    h++;
                }
                if(check.length == row) {
                    let combiKey = '';
                    combiKey = combination[k];
                    if(checkKey(keyArr, combiKey)) keyArr.push(combiKey);
                }
            }
            else { //check for 1 key
                for(let l = 0; l < len; l++) { 
                    for(let w = 0; w < row; w++) {
                        key = combination[k][l];
                        if(check.includes(relation[w][key])) break;
                        else check.push(relation[w][key]);
                    }
                    if(check.length == row) {
                        answer++;
                        arr.splice(arr.indexOf(key),1);
                    }  
                }              
            }
        }
    }
    answer += keyArr.length;
    return answer;
}
