function solution(names, homes, grades) {
  var answer = [];
  let stulen = names.length;
  let grade = Array.from(Array(stulen), () => Array());
  let map=new Map();

  for (let i = 0; i < stulen; i++) {
    // 1.이름 넣기
    grade[i][0] = names[i];
    // 2. 사는 거리 계산해서 넣기
    let way = parseInt(homes[i][0] * homes[i][0] + homes[i][1] * homes[i][1]);
    grade[i][1] = way;

    // 3. 학점 넣기
    grade[i][2] = parseInt(grades[i]);
  }
  // 정렬하기
  grade.sort();
  grade.sort((a, b) => {
    if (a[2] === b[2]) return b[1] - a[1];
    return b[2] - a[2];
  });

  for(let i=0;i<stulen;i++){
    map.set(grade[i][0],i+1);
  }
  for(let j=0;j<stulen;j++){
    answer.push(map.get(names[j]));
  }
  return answer;
}m