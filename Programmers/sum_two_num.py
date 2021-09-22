# https://programmers.co.kr/learn/courses/30/lessons/68644?language=python3 [두 개 뽑아서 더하기]

def solution(numbers):
    answer = []
    numbers.sort();
    for f in range(len(numbers)):
        for s in range(f+1,len(numbers)):
            answer.append(numbers[f]+numbers[s])
    return list(sorted(set(answer)))
    #set은 순서가 없기 때문에 sort하는 경우 순서가 유지되지 않는다.
    #sorted는 정렬 시 인덱스를 키로 사용하므로 순서가 유지된다.