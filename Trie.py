class Node(object):
    def __init__(self, key, data = None):
        self.key = key
        self.data = data
        self.children = {}

class Trie(object):
    def __init__(self):
        self.head = Node(None) #init

    def insert(self, string):
        current_node = self.head

        for char in string:
            if char not in current_node.children:
                current_node.children[char] = Node(char) #자식 node중 같은 문자가 없으면 Node새로 생성
            current_node = current_node.children[char] #자식 node에 값이 있으면 해당 node로 이동
        current_node.data = string #문자열이 끝난 시점의 node의 data에 해당 string 입력

    def search(self, string):
        current_node = self.head
        for char in string:
            if char in current_node.children: #childre에 해당 값이 있으면 해당 node로 이동.
                current_node = current_node.children[char]
            else:
                return False
        #다 돌면 해당 string이 존재
        return True

    def starts_with(self, prefix):
        current_node = self.head
        words = []

        for p in prefix:
            if p in current_node.children:
                current_node = current_node.children[p] #prefix에 대해 값이 있으면 해당 node로 이동
            else:
                return None

        curr_node = [current_node]
        next_node = []

        while True:
            for node in curr_node:
                if node.data:
                    words.append(node.data) #현재 node에 data가 존재하면 words에 추가
                next_node.extend(list(node.children.values())) #다음 순회 값들에 children들 모두 추가

            if len(next_node) != 0:
                curr_node = next_node #next_node가 존재할 경우 해당 node로 이동
                next_node = []
            else:
                break #값이 존재하지 않을 경우 break

        return words



trie = Trie()
word_list = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
for word in word_list:
    trie.insert(word)

print(trie.search("friend"))
print(trie.search("frodo"))
print(trie.search("catt"))
print(trie.starts_with("fire"))
print(trie.starts_with("fro"))
print(trie.starts_with("cat"))
print(trie.starts_with("f"))
