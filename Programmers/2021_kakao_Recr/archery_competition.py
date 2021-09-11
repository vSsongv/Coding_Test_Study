def makeCase():
    cases = []
    for i in range(1, 2**11):
        case = bin(i)[2:]
        cases.append(case.zfill(11))
    return cases

def solution(n, info):
    arrow = n
    gap = 0
    canWin = []
    answer = []
    cases = makeCase()
    for case in cases:
        Ascore = 0
        Rscore = 0
        tmp = []
        for i in range(11):
            tmp.append(0)
        for i in range(11):
            if case[i] == '1': #라이언이 점수를 얻는 경우
                if int(info[i]) < arrow: #라이언이 점수를 얻을 수 있다면
                    tmp[i] = info[i]+1
                    arrow -= info[i]+1
                    # print(tmp)
                else: break

        for s in range(11):
            if(info[s] != 0 or tmp[s] != 0):
                if info[s] < tmp[s]:
                    Rscore += (10-s)
                else:
                    Ascore += (10-s)

        if gap <= (Rscore - Ascore):
            gap = (Rscore - Ascore) #gap update
            # print(tmp)
            if tmp not in canWin:
                canWin.append(tmp)
        arrow = n
    if gap == 0:
        return [-1]
    return answer
n = 5
info = [2,1,1,1,0,0,0,0,0,0,0]

print(solution(n, info))