function solution(id_list, report, k) {
    let answer = [];
    let mail = {};
    let ben_list = []; // k번이상 신고된 사람들.
    let id_dict = {};
    let reported_dict = {};  // 신고당한 대상들

    for (let ID of id_list) {
        id_dict[ID] = [];  // id가 신고한 대상들
        reported_dict[ID] = 0;
        mail[ID] = 0;
    }

    for (let re of report) {
        let tmp = re.split(' ');
        let reporter = tmp[0];
        let reported = tmp[1];
        if (!(id_dict[reporter].includes(reported))) id_dict[reporter].push(reported);
    }

    for (let [re, eds] of Object.entries(id_dict)) {
        for (let ed of eds) {
            reported_dict[ed] += 1;
        }
    }

    for (let [key, val] of Object.entries(reported_dict)) {
        if (val >= k) {
            ben_list.push(key);
        }
    }

    for (let ben of ben_list) {
        for (let [re, ed] of Object.entries(id_dict)) {
            if (ed.includes(ben)) {
                mail[re] += 1;
            }
        }
    }

    for (let [k, v] of Object.entries(mail)) {
        answer.push(v);
    }
    return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2))
// console.log(solution(["con", "ryan", "ryan", "con"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));