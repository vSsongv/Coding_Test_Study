import heapq

n = int(input())
payList = []
for i in range(n):
  payList.append(list(map(int, input().split())))

payList.sort(key=lambda x: (x[1])) #deadLine 기준으로 오름차순 정렬
moneyList=[]

for pay in payList:
  heapq.heappush(moneyList, pay[0]) #강연비를 일단 push
  if(len(moneyList) > pay[1]): #마감 날짜를 넘어가면(다음 날이 되면)
    heapq.heappop(moneyList) #root값을 pop하면 최소 값이 사라짐

print(sum(moneyList)) #남은 값들 더해주면 됨
