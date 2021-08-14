let str = "name=1&name=2&name=3";
let unit = str.split('&');
let list = [];
let answer = {};
for(let i = 0; i < unit.length; i++) {
    let key = unit[i].split("=")[0];
    let val = unit[i].split("=")[1];

    if(key in answer) {
        list.push(answer[key]);
        list.push(val);
        answer[key] = list;
    }
    else {
        answer[key] = val;
    }
}
console.log(answer);

