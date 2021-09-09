# https://programmers.co.kr/learn/courses/30/lessons/60060 [가사 검색]
# efficiency check!!!
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