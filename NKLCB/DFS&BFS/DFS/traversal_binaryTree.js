// 전위 
// 1 2 4 5 3 6 7
function Preorder_Traversal(n) {
    let answer = "";
    function Preorder(v) {
        if (v > 7) return;
        else {
            answer += (v + ' ');
            Preorder(v * 2);
            Preorder(v * 2 + 1);
        }
    }
    Preorder(n);
    return answer;
}
console.log(Preorder_Traversal(1));

// 중위
// 4 2 5 1 6 3 7
function Inorder_Traversal(n) { //중위
    let answer = "";
    function Inorder(v) {
        if (v > 7) return;
        else {
            Inorder(v * 2);
            answer += (v + ' ');
            Inorder(v * 2 + 1);
        }
    }
    Inorder(n);
    return answer;
}
console.log(Inorder_Traversal(1));

// 후위
// 4 5 2 6 7 3 1
function Postorder_Traversal(n) {
    let answer = "";
    function Postorder(v) {
        if (v > 7) return;
        else {
            Postorder(v * 2);
            Postorder(v * 2 + 1);
            answer += (v + ' ');
        }
    }
    Postorder(n);
    return answer;
}
console.log(Postorder_Traversal(1));