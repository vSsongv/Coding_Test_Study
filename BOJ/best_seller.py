# https://www.acmicpc.net/problem/1302 [베스트 셀러]

sold_book_num = input("books num?: ")

sold_books = {}
for _ in range(int(sold_book_num)): #팔린 책 수만큼
    title = input("title name?: ")

    if title not in sold_books: #책 제목마다 팔린 권수를 key, val로 해서 증가시켜주고
        sold_books[title] = 1
    else:
        sold_books[title] += 1 

print(sorted([(-val, key) for key, val in sold_books.items()])[0][1]) #알파벳, 팔린권수로 소팅시킴
