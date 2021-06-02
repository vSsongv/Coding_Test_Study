# 입력값은 int(옷의 개수)
# 한 박스에는 3 or 5개의 옷만 담을 수 있음
# 박스의 개수를 최소화해서 보내야 함. 박스 개수를 return
# 배송못하면 -1 return

def main(numOfClothes):
	qof5 = int(numOfClothes / 5)
	qof3 = int(numOfClothes / 3)
	rof5 = int(numOfClothes % 5)
	rof3 = int(numOfClothes % 3)

	numOfBox = -1 # 나눌 수 없으면 -1 리턴

	if rof3 == 0:
		numOfBox = qof3 #3으로 나누어 떨어지면 그 몫 근데 21이면 7개보다 5 3개에 3 2개가 낫다. 이거 어케 함 7
	if rof5 == 0:
		if numOfBox > qof5: #5로 나누어 떨어지면 그 몫 #15같은 공배수일 경우 -> 몫이 더 작은 걸로.
			numOfBox = qof5

	if int(rof5 % 3) == 0: #13 같은경우 5로 나누고 나머지가 3으로 나눠짐
		numOfBox = qof5 + (rof5 / 3)

	if int(rof5 % 3) != 0: # 21은 한번에 안나눠짐 먼저 4로 나누넹 그럼 5*3하면서 줄이기
		for i in range(qof5, 0, -1):
			if (numOfClothes - (5 * i)) % 3 == 0:
				temp = i + ((numOfClothes - (5 * i)) / 3)
				if numOfBox == -1 or numOfBox > temp:
					numOfBox = temp
					break

	return int(numOfBox)

if __name__ == "__main__":
	numOfClothes = 21
	print("최소 박스의 개수는 " + str(main(numOfClothes)) + "개 입니다.")
