// https://programmers.co.kr/learn/courses/30/lessons/42579 [베스트앨범]

function solution(genres, plays) {
  var sum = {};
  genres.forEach((g, i) => {
    sum[g] = sum[g] ? sum[g] + plays[i] : plays[i];
  });

  let gDict = [];

  gDict = genres
    .map((g, i) => ({ genre: g, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return sum[b.genre] - sum[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    });

  return gDict
    .filter((s) => {
      if (gDict[s.genre] >= 2) return false;
      gDict[s.genre] = gDict[s.genre] ? gDict[s.genre] + 1 : 1;
      return true;
    })
    .map((f) => f.index);
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])); //[4,1,3,0]

/*
function solution(genres, plays) {
    var dic = {};
    genres.forEach((t,i)=> {
        dic[t] = dic[t] ?  dic[t] + plays[i] : plays[i];        
    });

    var dupDic = {};
    return genres          
          .map((t, i) => ({genre: t, count: plays[i], index: i}))
          .sort((a, b) => {               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           })
           .filter(t =>  {
               if(dupDic[t.genre] >= 2) return false;
               dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
               return true;
            })
           .map(t => t.index);    
}
*/
