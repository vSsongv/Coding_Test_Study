function solution(money, cost) {
    let answer = 0;
    let cnt = 0;
    let tmp = 0
    let sum = []
    sum[0] = cost[0]
    for(let i = 1; i < cost.length; i++)
    {
        sum[i] = Math.max(0,sum[i-1]) + cost[i];
        if(sum[i] > money)
        {
            sum[i] = 0;
            cnt++;
        }
        console.log(cnt)
        tmp = Math.max.apply(null,sum);

    }
    answer = sum.indexOf(Math.max.apply(null,sum))+1-cnt;
    console.log(answer)
    if((Math.max.apply(null,sum)) > money)
    {
        answer = 0
    }
    console.log(sum)
    console.log(answer)
    return answer;
}

solution(420,	[0, 900, 0, 200, 150, 0, 30, 50])