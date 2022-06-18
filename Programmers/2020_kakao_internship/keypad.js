// https://programmers.co.kr/learn/courses/30/lessons/67256 [키패드 누르기]

function whichHand(num, LH, RH, hand){
    const pos = {
       1: [0, 0], 2: [0, 1], 3: [0, 2],
       4: [1, 0], 5: [1, 1], 6: [1, 2],
       7: [2, 0], 8: [2, 1], 9: [2, 2],
       '*': [3, 0], 0: [3, 1], '#': [3, 2]
   };
   
   const LD = Math.abs(pos[LH][0] - pos[num][0]) + 
       Math.abs(pos[LH][1] - pos[num][1])
   const RD = Math.abs(pos[RH][0] - pos[num][0]) + 
       Math.abs(pos[RH][1] - pos[num][1])
   
   if (LD === RD) return hand === 'left' ?  'L' : 'R';
   return LD < RD ? 'L' : 'R'
}

function solution(numbers, hand) {
   let left = {
       1: 'L',
       4: 'L',
       7: 'L'
   };
   let right = {
       3: 'R',
       6: 'R',
       9: 'R'
   };
   var answer = '';
   let RH = '#', LH = '*';

   for(let num of numbers) {
       if(num in left) {
           answer += left[num]; 
           LH = num
       }
       else if(num in right) {
           answer += right[num];
           RH = num;
       }
       else{
           answer += whichHand(num, LH, RH, hand);
           answer[answer.length-1] === 'L'? LH = num : RH = num
       }
   }
   return answer;
}
