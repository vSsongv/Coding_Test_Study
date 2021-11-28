// https://leetcode.com/problems/super-ugly-number/ [313 - super ugly number]

var nthSuperUglyNumber = function (n, primes) {

    let len = primes.length;
    let target = new Array(len).fill(0);
    let set = [1];

    n -= 1;

    while (n--) {
        let comp = [];
        for (let j = 0; j < len; j++) {
            comp.push(set[target[j]] * primes[j]);
        }
        let certain = Math.min(...comp);
        set.push(certain);

        for (let j = 0; j < len; j++) {
            if (certain === comp[j]) target[j] += 1;
        }
    }
    return set.pop();
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));