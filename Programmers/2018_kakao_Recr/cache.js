// https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript# [캐시]

function solution(cacheSize, cities) {
    var time = 0;
    let cache = []; //make cache arr as big as cache size
    
    if(cacheSize == 0) return (5 * cities.length);
    
    for(let i = 0; i < cities.length; i++) {
        
        cities[i] = cities[i].toLowerCase();
        
        if(cache.includes(cities[i])) {  //if new city in cache
            cache.splice(cache.indexOf(cities[i]),1); //delete that index component
            cache.push(cities[i]); //push at the tail
            time += 1;
        }
        else { //if new city name
            if(cache.length === cacheSize) cache.shift(); //delete oldest comp
            cache.push(cities[i]); //push at the tail
            time += 5;
        }
    }
    return time;
}
