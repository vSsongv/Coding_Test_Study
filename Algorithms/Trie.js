class Node {
    constructor(data = ' ') {
        this.end = false;
        this.child = {}
        this.data = data;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let current_node = this.root;
        for (let x of word) {
            if (current_node.child[x] === undefined) {
                current_node.child[x] = new Node();
            }
            current_node = current_node.child[x];
        }
        current_node.end = true;
    }
    search(word) {
        let current_node = this.root;
        for (let x of word) {
            if (current_node.child[x] === undefined) return false;
            current_node = current_node.child[x];
        }
        return current_node.end;
    }
    starts_with(str) {
        let words = [];
        let current_node = this.root;
        for (let x of str) {
            if (current_node.child[x] === undefined) return false;
            current_node = current_node.child[x];
        }
        return true;
    }
}

let trie = new Trie();
let word_list = ["frodo", "front", "frost", "frozen", "frame", "kakao"];

for (let word of word_list) {
    trie.insert(word);
}

console.log(trie.search("friend"));
console.log(trie.search("frodo"));
console.log(trie.search("catt"));
console.log(trie.starts_with("fire"));
console.log(trie.starts_with("fro"));
console.log(trie.starts_with("cat"));
console.log(trie.starts_with("f"));