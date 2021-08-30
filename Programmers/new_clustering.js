// https://programmers.co.kr/learn/courses/30/lessons/17677?language=javascript [뉴스 클러스터링]

function solution(str1, str2) {
    var answer = 0;
    let comp = 0;
    let same1 = 0;
    let same2 = 0;
    let inter = [];
    let union = [];
    
    str1 = str1.toLowerCase(); str2 = str2.toLowerCase();
    
    for(let f = 0; f < str1.length-1; f++) {
        comp = str1.substr(f, 2);
        if(comp.match(/[^a-zA-Z]/)) continue;
        if(union.includes(comp)) {
            console.log("1i",comp);
            if(!inter.includes(comp)) inter.push(comp);
            else same1++;
        }
        else union.push(comp); 
    }
    
    for(let s = 0; s < str2.length-1; s++) {
        comp = str2.substr(s, 2);
        if(comp.match(/[^a-zA-Z]/)) continue;
        console.log(comp);
        if(union.includes(comp)) {
            console.log("2i",comp);
            if(!inter.includes(comp)) inter.push(comp);
            else same2++;
        }
        else union.push(comp); 
    }
    console.log(union);
    console.log(inter);
    
    if(inter.length == 0 && union.length == 0) return 65536;
    answer = Math.floor((((inter.length + (same1 < same2) ? same1 : same2) / (union.length + (same1 > same2) ? same1 : same2))) * 65536);
    console.log(answer)
    return answer;
}