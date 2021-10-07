// 수열의 높이 조정
// N길이의 수열이 주어집니다. 수열의 높이 조정은 수열의 원소값 중 가장 큰 원소에서 1을 빼
// 가장 작은 원소에 더해주는 것을 말합니다. 가장 큰 원소와 가장 작은 원소가 여러개면 그 중 아무거나 선택하면 됩니다.
// 만약 수열이 [2, 1, 3, 7, 5]라면 1회의 높이조정을 거치면 [2, 2, 3, 6, 5]가 됩니다.
// N길이의 수열이 주어지면 높이조정을 m회 한 후 가장 큰 값과 가장 작은 값을 차를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 매개변수 nums에 N(3<=N<=100,000)길이의 수열이 주어집니다. 수열의 원소는 1,000을 넘지 않습니다. 매개변수 m에 높이 조정 횟수인 M(1<=M<=10,000)이 주어집니다.
// ▣ 출력설명
// M회의 높이 조정을 마친 후 가장 높은곳과 가장 낮은 곳의 차이를 출력하세요.
// 단 m회의 높이조정을 하던 중 모든 값이 같아지면 높이조정을 중단하고 0을 반환합니다.
// ▣ 매개변수 형식 1
// [2, 1, 3, 7, 5], 2
// ▣ 반환값 형식 1
// 3
// ▣ 매개변수 형식 2
// [69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50
// ▣ 반환값 형식 2
// 20

// function solution(s, n) {
//     for(let i = 0; i < n; i++) {
//         let max = Math.max(...s);
//         let min = Math.min(...s);
//         let maxIdx = s.indexOf(max);
//         let minIdx = s.indexOf(min);

//         s[minIdx] += 1;
//         s[maxIdx] -= 1;
//     }
//     let max = Math.max(...s);
//     let min = Math.min(...s);

//     return max-min;
// }

// console.log(solution([69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50));


// 일단 값들을 index로 하여 배열에 넣어준다. O(n)
// max값과 min값을 구한 다음, m번 반복한다. O(m)
// max/min의 index에 값이 한개인 경우에는 max, min의 값이 update되어야 함.

function solution(s, n) {

    let arr = new Array(1001).fill(0);
    let min = 100000; let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(min > s[i]) min = s[i];
        if(max < s[i]) max = s[i];
        arr[s[i]] += 1
    }

    for(let j = 0; j < n; j++) {
        if(arr[max] === 1) { //해당 index가 하나밖에 안 나올 경우
            arr[max] -= 1; //해당 index 값 1을 빼주고
            max -= 1; //max값에서 1을 빼고
            arr[max] += 1; //1을 뺀 index의 값은 1 키워준다.
        }
        else {
            arr[max] -= 1; 
            arr[max-1] += 1; //max앞 index값을 하나 더해준다.
        }
        if(arr[min] === 1) { //해당 index가 하나밖에 안 나올 경우
            arr[min] -= 1; //min index값을 하나 빼 주고
            min += 1; //min값은 1 더해준 후
            arr[min] += 1; //index값 또한 하나 더해준다.
        }
        else {
            arr[min] -= 1;
            arr[min+1] += 1;
        }
    }

    return max-min;
}

console.log(solution([69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50));
console.log(solution([2, 1, 3, 7, 5], 2));