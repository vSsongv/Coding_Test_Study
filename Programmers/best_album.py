#https://programmers.co.kr/learn/courses/30/lessons/42579?language=python3

genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]

f_dict = {}
answer = []

for i in range(len(genres)):
    if genres[i] in f_dict:
        f_dict[genres[i]] += plays[i]
    else: f_dict[genres[i]] = plays[i]

f_dict = sorted(f_dict.items(), key=lambda n: n[1], reverse=True)
print(f_dict)

for i in range(len(f_dict)):
    print(f_dict)
    temp = {}
    for j in range(len(genres)):
        if genres[j] == f_dict[i][0]: # 제일 많이 재생된 장르가 genres배열에서 몇번째인지 알고, 그 인덱스가 plays에서 뭐가 더 큰지 봐야됨.
            temp[j] = plays[j] #1,600, 4,2500 이렇게 들어가겠네,

    temp = sorted(temp.items(), key=lambda n: n[1], reverse=True) #소팅하고
    print("t",temp)
    if len(temp) > 1:
        for l in range(2):
            print(temp[l][0])
            answer.append(temp[l][0])
    else : answer.append(temp[0][0])

print(answer)

#아래는 지원님
# def solution(genres, plays):
#     answer = []
#     genres_count = {}
#     for i in range(len(genres)):
#         genre = genres[i]
#         play_count = plays[i]
#         if genre not in genres_count:
#             genres_count[genre] = {
#                 "count": play_count,
#                 "list": [(i, play_count)]
#             }
#         else:
#             genres_count[genre]["count"] += play_count
#             genres_count[genre]["list"].append((i, play_count))
#     for genre, play_count_list in sorted(genres_count.items(), key=lambda x:x[1]["count"], reverse=True) :
#         try:
#             play_count_list = sorted(play_count_list["list"], key=lambda x:x[1], reverse = True)[:2]
#         except:
#             play_count_list = sorted(play_count_list["list"], key=lambda x:x[1], reverse = True)
#         if len(play_count_list) == 2 and play_count_list[0][1]==play_count_list[1][1]:
#             play_count_list = sorted(play_count_list, key=lambda x:x[0])
#         answer.extend([index[0] for index in play_count_list])
#     return answer
