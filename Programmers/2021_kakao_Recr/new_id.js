// https://programmers.co.kr/learn/courses/30/lessons/72410 [신규 아이디 추천]
// 정규식 참고 코드
// https://ninearies.tistory.com/177
// https://curryyou.tistory.com/234

function solution(new_id) {
    var answer = '';
    answer = MakeLong(MakeShort(Create(DeleteOneDot(ChangeDots(DeleteWrongCont(UtoL(new_id)))))));
    return answer;
}

function UtoL(new_id) {
    return new_id.toLowerCase(); //step 1
}

function DeleteWrongCont(new_id) { //step 2
    return new_id.replace(/[^a-z0-9-_.]/g, "");
}

function ChangeDots(new_id) { //step 3
    return new_id.replace(/[.]+/g, ".");
}

function DeleteOneDot(new_id) { //step 4
    return new_id.replace(/^[.]|[.]$/g, "");
}

function Create(new_id) { //step 5
    return (new_id === "") ? "aaa" : new_id;
}

function MakeShort(new_id) { //step 6
    if (new_id.length >= 16) {
        new_id = new_id.substring(0, 15);
    }
    return new_id.replace(/[.]$/g, "");
}

function MakeLong(new_id) { //step 7
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }
    return new_id
}