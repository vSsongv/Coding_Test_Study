# https://programmers.co.kr/learn/courses/30/lessons/17681 [비밀지도]

def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        row = ''
        binary1 = format(arr1[i], 'b') #2진수로 바꾸기 지렸다 파이썬 진짜;
        binary2 = format(arr2[i], 'b')

        if len(binary1) != n:
            plus = "0" * (n-len(binary1))
            binary1 = plus + binary1

        if len(binary2) != n:
            plus = "0" * (n - len(binary2))
            binary2 = plus + binary2

        for j in range(n):
            tmp = int(binary1[j]) + int(binary2[j]) #n개이므로 n자리니까, 각 자리를 더해줌.

            if tmp == 0: # 값이 0이면 공백.
                tmp = ' '
            else:
                tmp = '#' #아니면 무조건 #임.

            row = row + tmp #그리고 한 줄의 문자열로 만들기

        answer.append(row) #answer에 추가

    return answer

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])