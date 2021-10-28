const myMap = new Map();
myMap.set("a", 3);
myMap.set("c", 4);
myMap.set("b", 1);
myMap.set("d", 2);

// sort by value
const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);
// Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// sort by key
const mapSort3 = new Map([...myMap.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

const mapSort4 = new Map([...myMap.entries()].reverse());
console.log(mapSort4);
// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}

//dict val값 sort
//오름차순인 경우임. 내림차순이면 b[1] - a[1]
//1번 방법
let sortable = [];
for (let rate in fail_rate) {
    sortable.push([rate, fail_rate[rate]]);
}

sortable.sort(function (a, b) {
    return a[1] - b[1];
});
//2번 방법
const champ = {
    Aatrox: 300,
    Zoe: 60,
    Ahri: 200,
    Ashe: 1000,
    Garen: 400
};

const sortable = Object.entries(champ)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sortable); // {Zoe: 60, Ahri: 200, Aatrox: 300, Garen: 400, Asche: 1000}

//dict key값 sort
const unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
};

console.log(JSON.stringify(unordered));
// → '{"b":"foo","c":"bar","a":"baz"}'

const ordered = {}
// Object.keys(unordered).sort().forEach(function (key) => {
//     ordered[key] = unordered[key];
// });
console.log(JSON.stringify(ordered));

//   **split -** string.split('**기준**') : 기준을 기준으로 잘라서 배열로 넘겨준다. ****

// **substring -** string.substring('**startIdx**', '**endIdx**') : startIdx부터, endIdx 전까지 자른다. startIdx만 넣으면 startIdx부터 맨 끝까지 자른다.

// **slice** - string.slice('**startIdx**', '**endIdx**') : dIdx 미포함으로, 얕은 복사본을 새로운 배열 객체로 반환한다.

let arr = [...lh].sort(function (a, b) {
    return (a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0) || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
});