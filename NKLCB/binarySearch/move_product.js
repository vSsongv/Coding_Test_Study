// 제품 이동
// 섬이 많은 나라로 유명한 인도네시아는 N(1≤N≤10,000)개의 섬으로 이루어진 나라이다. 
// 이 섬들은 다리로 연결되어 있는데, 각 다리는 통과하려면 무게제한이 있다. 
// 이 무게제한을 넘어가는 무게가 다리를 이용하면 다리는 무너지게 된다.
// 엘리트 무역회사는 이들 섬 중 2개에 공장이 있는데 항상 두 공장에서 서로 제품을 이동하는 작업을 한다. 
// 섬의 개수 N과 각 섬을 연결하는 다리 정보가 주어지면 한 번의 이동으로 옮길 수 있는 제품의 최대 무게를 구하세요. 
// 단 다리를 건널 수 있는가의 무게제한은 제품의 무게로만 계산한다.
// ▣ 입력설명
// 매개변수 N이 주어지고, 매개변수 edges배열에 각 다리의 정보가 주어집니다.
// edges 배열의 각 행은 다리에 대한 정보를 나타내는 세 자연수 A, B(1≤A, B≤N), C(1≤C≤
// 1,000,000,000)가 주어진다.
// 세 자연수의 의미는 A섬과 B섬이 다리가 연결되어 있으며, 다리를 이동하는 제품의 최대 무게
// 는 C라는 의미이다.
// 마지막 매개변수 s와 e에 두 공장이 있는 섬의 번호가 주어진다.
// ▣ 출력설명
// 첫째 줄에 답을 출력한다.
// ▣ 매개변수 형식
// 5, [[1, 2, 5], [1, 3, 3], [1, 4, 2], [2, 4, 2], [3, 4, 4], [4, 5, 3]], 1, 5
// ▣ 반환값 형식
// 3

function solution(n, edges, s, e){  
    let answer=0, left=1, right=0;
    let graph=Array.from(Array(n+1), ()=>Array());
    
    for(let [a, b, maxMount] of edges){
        graph[a].push([b, maxMount]);
        graph[b].push([a, maxMount]);
        right=Math.max(right, maxMount);
    }
    function BFS(w){
        let ch=Array.from({length:n+1}, ()=>0);
        let queue=[]
        ch[s]=1;
        queue.push(s);
        while(queue.length){
            let a=queue.shift();
            for(let [b, maxMount] of graph[a]){
                if(maxMount>=w && ch[b]===0){
                    ch[b]=1;
                    queue.push(b);
                }
            }
        }  
        return ch[e];   
    }
    while(left<=right){
        let mid=parseInt((left+right)/2);
        if(BFS(mid)){
            answer=mid;
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return answer;
}

console.log(solution(5, [[1, 2, 5], [1, 3, 3], [1, 4, 2], [2, 4, 2], [3, 4, 4], [4, 5, 3]], 1, 5));