function solution(str1, str2) {
    var answer = 0;
    let comp = 0;
    let first = [];
    let second = [];
    let inter = [];
    let union = [];
    
    str1 = str1.toLowerCase(); str2 = str2.toLowerCase();
    
    for(let f = 0; f < str1.length-1; f++) {
        comp = str1.substr(f, 2);
        if(comp.match(/[^a-zA-Z]/)) continue;
        else first.push(comp); 
    }

    for(let s = 0; s < str2.length-1; s++) {
        comp = str2.substr(s, 2);
        if(comp.match(/[^a-zA-Z]/)) continue;
        else second.push(comp); 
    }
    
    let l = 0;
    while(l < first.length) {
        let ele = first[l];
        if(second.includes(ele) == true) { //intersection element
            inter.push(second.splice(second.indexOf(ele),1));  //delete intersection element on second
        }
        union.push(ele);
        l++;
    }
    
    l = 0;
    while(l < second.length) {
        union.push(second[l]);
        l++;
    }

    if(inter.length == 0 && union.length == 0) return 65536;    
    answer = parseInt((inter.length / union.length) * 65536); 
    return answer;
}
