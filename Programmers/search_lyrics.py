# https://programmers.co.kr/learn/courses/30/lessons/60060 [가사 검색]
# efficiency failed code
def solution(words, queries):
    answer = []
    word_dict = {}

    for w in words:
        length = len(w)
        allQ = '?'*length
        for i in range(1,length):
            Q = '?'*i
            key1 = w[0:(length)-i] + Q
            key2 = Q + w[i:length]
            if(length in word_dict): #length key is exist, append
                word_dict[length].append(key1) #append key in dict val arr
                word_dict[length].append(key2) #reversed ver too
            else: #make dict
                word_dict[length] = []
                word_dict[length].append(key1) #append key in dict val arr
                word_dict[length].append(key2) #reversed ver too

            word_dict[length].append(allQ) #append all ? key first
    for key in queries:
        keyLen = len(key)
        if(keyLen in word_dict):
            answer.append(word_dict[keyLen].count(key))
        else:
            answer.append(0)
    return answer

# efficiency successful code
import re

class Node(object):
    def __init__(self, key, num=0, data=None):
        self.key = key
        self.num = num
        self.data = data
        self.children = {}

class Trie(object):
    def __init__(self):
        self.head = Node(None)  # init

    def insert(self, string, length):
        current_node = self.head

        if length not in current_node.children:
            current_node.children[length] = Node(None)  # 해당 words 길이로 노드를 하나 만들고
        current_node = current_node.children[length]  # 해당 길이 노드로 이동한 후
        current_node.num += 1  # 현재 길이의 단어의 총 개수 증가

        for char in string:
            if char not in current_node.children:
                current_node.children[char] = Node(char)  # 자식 node중 같은 문자가 없으면 Node새로 생성
            current_node = current_node.children[char]  # 자식 node에 값이 있으면 해당 node로 이동
        current_node.data = string  # 문자열이 끝난 시점의 node의 data에 해당 string 입력

    def starts_with(self, prefix, length):
        current_node = self.head
        num = 0

        if length not in current_node.children:  # 맞는 길이 단어 없으면 0
            return 0
        else:
            current_node = current_node.children[length]  # 있으면 해당 length로 이동

        if length * '?' == prefix: # 모두 ?인 경우 해당 length num val출력
            return current_node.num

        prefix = re.sub('[^a-z]', '', prefix) # 아닌 경우 ?모두 제거

        for p in prefix:
            if p in current_node.children:
                current_node = current_node.children[p]  # prefix에 대해 값이 있으면 해당 node로 이동
            else:
                return 0

        curr_node = [current_node]
        next_node = []

        while True:
            for node in curr_node:
                if node.data:
                    num += 1  # 현재 node에 data가 존재하면 num개수 ++
                next_node.extend(list(node.children.values()))  # 다음 순회 값들에 children들 모두 추가

            if len(next_node) != 0:
                curr_node = next_node  # next_node가 존재할 경우 해당 node로 이동
                next_node = []
            else:
                break  # 값이 존재하지 않을 경우 break

        return num

def solution(words, queries):
    qDict = {}
    answer = []
    trie = Trie()
    r_trie = Trie()  # revers trie

    r_words = [w[::-1] for w in words]

    for w in words:
        trie.insert(w, len(w))
    for w in r_words:
        r_trie.insert(w, len(w))

    for q in queries:
        if q in qDict:
            answer.append(qDict[q])
            continue
        if q[0] == '?':
            result = r_trie.starts_with(q[::-1], len(q)) # reverse
            qDict[q] = result
            answer.append(result)
        else:
            result = trie.starts_with(q, len(q))
            qDict[q] = result
            answer.append(result)

    return answer

words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]

print(solution(words, queries))