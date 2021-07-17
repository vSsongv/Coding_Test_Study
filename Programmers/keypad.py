# https://programmers.co.kr/learn/courses/30/lessons/67256 [키패드 누르기]

def solution(numbers, hand):
    left = {
        1: 'L',
        4: 'L',
        7: 'L'
    }
    right = {
        3: 'R',
        6: 'R',
        9: 'R'
    }
    middle = {
        2: { 1: [1,3,5],
             2: [4,6,8],
             3: [7,9,11],
             4: [10,12] },
        5: {
            1: [2,4,6,8],
            2: [1,3,7,9,11],
            3: [10,12] },
        8: {
            1: [5,7,9,11],
            2: [2,4,6,10,12],
            3: [1,3] },
        11: {
            1: [10,8,12],
            2: [7,5,9],
            3: [4,2,6],
            4: [1,3] }
    }
    answer = ''
    LL, RL = 10, 12

    for num in numbers:
        if num == 0:
            num = 11
        if num in left:
            LL = num
            answer += left[num]
        elif num in right:
            RL = num
            answer += right[num]
        else:
            RD,LD = 0, 0
            for dist, nums in middle[num].items():
                if RL in nums:
                    RD = dist
                if LL in nums:
                    LD = dist

            if RD == LD:
                if hand == "right":
                    answer += 'R'
                    RL = num
                else:
                    answer += 'L'
                    LL = num
            elif RD > LD:
                answer += 'L'
                LL = num
            else:
                answer += 'R'
                RL = num
    print(answer)
    return answer
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")
