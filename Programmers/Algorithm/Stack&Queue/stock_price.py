# https://programmers.co.kr/learn/courses/30/lessons/42584 [주식 가격]

def solution(prices):
    answer = [0]
    stack = []
    day = 0
    prices = prices[1:]

    for price in reversed(prices):
        # if not stack and stack[-1][0] > price:
        #     day += stack.pop()[1]
        # else:
        stack.append([price, day+1])

    print(stack)
    return answer


print(solution([1, 2, 3, 2, 3])) #	[4, 3, 1, 1, 0]