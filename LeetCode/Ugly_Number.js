// https://leetcode.com/problems/ugly-number-ii/ [264 - ugly number]

var nthUglyNumber = function (n) {
    let [two, three, five] = [0, 0, 0];
    let set = [1];

    n -= 1;

    while (n--) {
        let comp = [set[two] * 2, set[three] * 3, set[five] * 5];
        let certain = Math.min(...comp);

        set.push(certain);
        if (certain === comp[0]) two++;
        if (certain === comp[1]) three++;
        if (certain === comp[2]) five++;
    }
    return set.pop();
};

console.log(nthUglyNumber(1));