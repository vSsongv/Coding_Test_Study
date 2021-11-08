// https://leetcode.com/problems/asteroid-collision/ [735. Asteroid Collision]

var asteroidCollision = function (asteroids) {
    let result = [];
    for (let a of asteroids) {
        let top = result[result.length - 1];
        if (!result.length || (top < 0 && a < 0) || a > 0) result.push(a); //양수거나, 내가 음수인데 top이 양수면 push.
        else { //내가 음수고 top은 양수인경우
            while (Math.abs(a) > Math.abs(top) && result.length && top > 0) { //내가 이기고, top이 음수가 아니고, result가 남아있을 때까지
                result.pop(); //없애주다가.
                top = result[result.length - 1];
            }
            if (a + top === 0) result.pop(); //이제 top이 나보다 크거나, 같은지 보고 연산. 같은 경우 pop만.
            else if (top < 0 || !result.length) result.push(a); //top이 음수거나 비교 값이 없으면 push.
            //top이 나보다 크면 내가 졌음
        }
    }
    return result;
};

console.log(asteroidCollision([4, -3, -2]));
console.log(asteroidCollision([1, -2, -2, -2]));