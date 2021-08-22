// https://programmers.co.kr/learn/courses/30/lessons/60058 [괄호 변환]

function solution(p) {
    console.log(p);
	let answer = "";
	let left = 0 
    let right = 0; 
	let check = false;
    
	if (p.length == 0) return p; //입력이 빈 문자열이면 빈 문자열을 반환 
    
	for (let i = 0; i < p.length; i++) {
        
		p[i] === '(' ? left++ : right++;
		if (right > left) check = true; // )가 (보다 많으면 틀린 모양임
        
		if (right == left) { //균형 잡힌 문자열임
            console.log("ddd",p.substring(0,i+1));
            if(check == true) { //틀린 모양이면
                answer += "("; //빈 문자열에 첫 번째 문자로 '('를 붙임
                answer += solution(p.substring(i+1)); //뒷부분 재귀 결과 문자열 붙임
                answer += ")"; //')'를 다시 붙임
                if(i!= 1) {
                    let s = p.substring(1,i);
                    console.log("s",s);
                    answer += s.replace(/\(|\)/g, a => a === "(" ? ")" : "(" ); //u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙임
                }
                return answer;
            }
            else {
                answer += p.substring(0,i+1); //올바른 모양이면 바로 answer에 추가해주기
                answer += solution(p.substring(i+1)); //재귀

                //substring이 연산이 제일 느림.
                answer += p.substr (0, i + 1); //올바른 모양이면 바로 answer에 추가해주기
                answer += solution(p.substr (i + 1, p.length-i)); //재귀
                
                return answer;
            }
		}
    }
}