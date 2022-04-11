# https://programmers.co.kr/learn/courses/30/lessons/42577 [전화번호 목록]

# 효율성 실패
# def solution(phone_book):
#     sortedPhoneBook = sorted(phone_book, key = len)

#     for num in sortedPhoneBook:
#         for i in range(sortedPhoneBook.index(num)+1, len(sortedPhoneBook)):
#             if sortedPhoneBook[i].find(num) == 0:
#                 return False

#     return True

# 효율성 통과
def solution(phone_book):
    phone_book.sort()

    print(phone_book)

    for i in range(0, len(phone_book) - 1):
        if phone_book[i + 1].find(phone_book[i]) == 0 :
            return False
    return True

print(solution(["312","3512","567","88"]))
print(solution(["119", "97674223", "1195524421"]))
print(solution(["123","456","789"]))
print(solution(["12","123","1235","567","88"]))

