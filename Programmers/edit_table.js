// https://programmers.co.kr/learn/courses/30/lessons/81303 [표 편집]

let linked_list;
let answer;
let trash = [];

function Down(k,num) {
    for(let i = 0; i < num; i++) {
        k = linked_list[k][1]; 
    }
    return k;
}

function Up(k,num) {
    for(let i = 0; i < num; i++) {
        k = linked_list[k][0]; 
    }
    return k;
}

function Clip(k) {
    trash.push([k, linked_list[k][0], linked_list[k][1]]); //삭제한거는 trash에 넣고
    answer[k] = "X" //삭제했으니까 X로 바꿔줌.
    let pre = linked_list[k][0];
    let next = linked_list[k][1];

    if(next == -1) { //삭제된 애가 마지막인 경우
        linked_list[pre][1] = next; 
        k = pre; //바로 위 애 선택
    }
    else {
        if(pre != -1) linked_list[pre][1] = next;
        if(next != -1) linked_list[next][0] = pre;
        k = next; //바로 다음 애 선택
    } 
    return k;
}

function Back() {
    let back = trash.pop();
    let b = back[0];
    let pre = back[1];
    let next = back[2];
    answer[b] = "O";

    if(next != -1) linked_list[next][0] = b; //내가 맨 뒤에 애면 앞의 1번째만 업뎃해주면되고
    if(pre != -1) linked_list[pre][1] = b; //내가 맨 처음 애면 뒤의 0번째만 업뎃해주면됨.
}

function solution(n, k, cmd) {
    linked_list = Array.from({ length: n }, (pre, tail) => ([tail - 1, tail + 1])); //linked_list 생성
    linked_list[n - 1][1] = -1; //마지막 노드의 link는 첫 link와 연결해줌.
    answer = Array(n).fill("O"); //먼저 모두 O로 채워주기.

    for(let c of cmd) {
        let command = c.split(' '); //공백 기준으로 나눔

        switch(command[0]) {
            case "D":
                k = Down(k, command[1]);
                break;
            case "U":
                k = Up(k, command[1]);
                break;
            case "C":
                k = Clip(k);
                break;
            case "Z":
                Back();
                break;
        } 
    }
    return answer.join('');
}

console.log(solution(8, 2, ["D 2","C"]));