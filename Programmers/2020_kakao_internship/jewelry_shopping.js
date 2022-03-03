// https://programmers.co.kr/learn/courses/30/lessons/67258 [보석 쇼핑]

function solution(gems) {
  var answer = [];
  let uniqJewelNum = new Set(gems).size;
  let tmplist = [];
  let left = 0,
    minRange = Number.MAX_SAFE_INTEGER;
  for (let right = 0; right < gems.length; right++) {
    console.log('Dd');
    tmplist = [...tmplist, gems[right]];
    tmplistNum = new Set(tmplist).size;
    console.log(tmplist, tmplistNum);
    while (tmplistNum === uniqJewelNum) {
      console.log('enter', tmplistNum, uniqJewelNum);
      tmplist = tmplist.slice(left, right + 1);
      let checkList = tmplist.slice(left, right + 1);
      minRange = Math.min(minRange, right - left);
      console.log('cech', checkList);
      if (minRange === right - left) answer = [...answer, [left, right]];
      else {
        console.log('g');
        answer = [left, right];
      }
      //   tmplistNum = new Set(checkList).size;
      console.log('l', left);
      tmplistNum = new Set(tmplist.slice(++left, right + 1)).size;
      console.log('l2', left);
      console.log(tmplistNum, tmplist.slice(left, right + 1));
    }
  }
  return answer;
}

console.log(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA'])); //[3,7]
// console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC'])); //[1,3]
// console.log(solution(['XYZ', 'XYZ', 'XYZ'])); //[1,1]
// console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])); //[1,5]
