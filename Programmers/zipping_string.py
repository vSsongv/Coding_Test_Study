# https://programmers.co.kr/learn/courses/30/lessons/60057?language=python3 [문자열 압축]

def solution(s):
    
    def split_len(seq, length):
        return [seq[i:i+length] for i in range(0, len(seq), length)]

    answer = 0
    for i in range(1,int(len(s)/2)+1): # max split num is half of length of s.
        keys = split_len(s, i) # split as i
        key = keys[0]
        reduced = ''
        cnt = 1 #num of same element
        for j in range(1,len(keys)+1):     #index처리 굉장히 어려웠음
            if(j == len(keys)):
                if(cnt == 1): #need to add solo char
                    reduced += keys[j-1] 
                    break
                else:
                    reduced += str(cnt)+keys[j-1]
                    break
            if(key == keys[j]):
                cnt += 1
            else:
                if(cnt == 1):
                    reduced += keys[j-1] #need to add solo char
                    key = keys[j]
                    cnt = 1
                    continue
                else:
                    reduced += str(cnt)+keys[j-1]
                    key = keys[j]
                    cnt = 1
        if(answer == 0):
            answer = len(reduced)
        else:
            answer = len(reduced) if(answer > len(reduced)) else answer
            
    return answer