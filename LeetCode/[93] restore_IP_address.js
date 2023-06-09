// https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = []
    let item = ''
    if (s.length < 4 || s.length > 12) {
        return res;
    }
    dfs(s, 0, item, res);
    return res;
}
var dfs = function (s, start, item, res) {
    if (start == 3 && isValid(s)) {
        res.push(item + s);
        return;
    }
    for (let i = 0; i < 3 && i < s.length - 1; i++) {
        let substr = s.substring(0, i + 1);
        if (isValid(substr)) {
            dfs(s.substring(i + 1, s.length), start + 1, item + substr + '.', res);
        }
    }

}
var isValid = function (s) {
    if (s.charAt(0) == '0') {
        return s === '0';
    }
    if (parseInt(s) <= 255 && parseInt(s) > 0) {
        return true;
    }
    else {
        return false;
    }
};