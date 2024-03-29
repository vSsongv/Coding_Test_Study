// 문제 설명
// 당신은 광산에서 금광석을 캐서 팔아 돈을 벌고 있습니다.당신은 금광석을 빨리 캐서 더 많은 돈을 벌기 위해 곡괭이를 업그레이드하려고 합니다.그런데 업그레이드는 돈이 들기 때문에 어느 정도까지 업그레이드를 할 것인지 고민하고 있습니다.

// 곡괭이의 레벨 등급은 1, 2 … 와 같이 자연수를 이용해 표현합니다.곡괭이를 한 번 업그레이드하면 레벨이 1씩 증가합니다.곡괭이는 레벨 1부터 시작하며, 레벨 1에 필요한 업그레이드 비용은 0원입니다.캐낸 금광석은 바로바로 판매하여 돈으로 변환한다고 가정합니다.

//     다음은, 곡괭이의 각 레벨별 업그레이드 비용과 광석 하나를 캐는데 걸리는 시간을 나타낸 예시입니다.

// 레벨	업그레이드 비용(원)	광석 하나를 캐는 데 걸리는 시간(초)
// 1	0	5
// 2	1500	3
// 3	3000	1
// 제한 시간은 100초, 금광석 하나를 팔아 200원을 얻을 수 있다고 가정합니다.곡괭이를 몇 번 업그레이드를 하느냐에 따라 총이익이 달라집니다.다음은 곡괭이를 업그레이드하는 3가지 방법을 나타낸 예시입니다.

// 업그레이드를 하지 않는 경우 얻을 수 있는 최대 이익
// 레벨 1 곡괭이로 100초 동안 광석 20개를 캡니다(광석 하나 당 5초 소요).남은 시간은 0초입니다.
//     레벨 1 곡괭이로 얻은 이익은 4000원 입니다.
// 업그레이드를 한 번 하는 경우 얻을 수 있는 최대 이익
// 레벨 1 곡괭이로 40초 동안 광석 8개를 캐서 1600원을 얻습니다(광석 하나 당 5초 소요).남은 시간은 60초입니다.
// 1500원을 사용하여 곡괭이를 레벨 2로 업그레이드합니다.남은 돈은 1600 - 1500 = 100원입니다.
//     레벨 2 곡괭이로 60초 동안 광석 20개를 캐서 4000원을 얻습니다(광석 하나 당 3초 소요).남은 시간은 0초입니다.
// 업그레이드 후 남은 돈 100원 + 레벨 2 곡괭이로 얻은 이익 4000원 = 4100원이 총이익입니다.
// 업그레이드를 두 번 하는 경우 얻을 수 있는 최대 이익
// 레벨 1 곡괭이로 40초 동안 광석 8개를 캐서 1600원을 얻습니다(광석 하나 당 5초 소요).남은 시간은 60초입니다.
// 1500원을 사용하여 곡괭이를 레벨 2로 업그레이드합니다.남은 돈은 1600 - 1500 = 100원입니다.
//     레벨 2 곡괭이로 45초 동안 광석 15개를 캐서 3000원을 얻습니다(광석 하나 당 3초 소요).남은 시간은 15초입니다.
// 업그레이드 후 남은 돈 100원 + 레벨 2 곡괭이로 얻은 이익 3000원 = 3100원이 현재까지 얻은 돈입니다.
// 3000원을 사용하여 곡괭이를 레벨 3으로 업그레이드합니다.남은 돈은 3100 - 3000 = 100원입니다.
//     레벨 3 곡괭이로 15초 동안 광석 15개를 캐서 3000원을 얻습니다(광석 하나 당 1초 소요).남은 시간은 0초입니다.
// 업그레이드 후 남은 돈 100원 + 레벨 3 곡괭이로 얻은 이익 3000원 = 3100원이 총이익입니다.
// 위와 같이 업그레이드를 한 번만 하면 4100원을 벌 수 있으며 이때 가장 많은 돈을 벌 수 있습니다.위 3가지 방법 외에도 다른 방법들이 있지만 4100원보다 더 많은 돈을 벌 수 있는 방법은 없습니다.

// 제한 시간을 나타내는 자연수 time, 광석 하나를 팔아서 얻을 수 있는 금액을 나타내는 자연수 gold, 업그레이드 비용과 효과를 나타내는 정수 배열 upgrade가 매개변수로 주어질 때, 제한 시간 동안 벌 수 있는 최대 이익을 return 하도록 solution 함수를 완성해주세요.

//     제한사항
// 1 ≤ time ≤ 100, 000
// 1 ≤ gold ≤ 1, 000
// 1 ≤ upgrade의 길이 ≤ 50
// upgrade의 원소는[A, B] 형식입니다.
// A는 업그레이드 비용을 나타냅니다.
// 0 ≤ A ≤ 1, 000, 000
// 1 레벨 곡괭이의 업그레이드 비용은 항상 0원이며, 2 레벨 이상 곡괭이의 업그레이드 비용이 0원인 경우는 없습니다.
// B는 한 광석을 캐는 데 걸리는 시간을 나타냅니다.
// 1 ≤ B ≤ 1, 000, 000
// upgrade의 i번째 원소는 레벨이 i + 1인 곡괭이의 정보를 나타냅니다.
// 낮은 레벨 곡괭이의 광석을 캐는데 걸리는 시간 ≥ 높은 레벨 곡괭이의 광석을 캐는데 걸리는 시간
// 즉, upgrade[i][1] ≥ upgrade[i + 1][1]를 항상 만족합니다.
// 처음에는 항상 레벨 1 곡괭이로 시작합니다.
// 곡괭이는 하나만 사용 가능합니다.
// 업그레이드에 걸리는 시간과 곡괭이의 가치(광석을 모두 캔 후 곡괭이를 파는 등)는 고려하지 않습니다.
// 입출력 예
// time	gold	upgrade	result
// 100	200[[0, 5], [1500, 3], [3000, 1]]	4100
// 49	200[[0, 5], [1500, 3], [1501, 1]]	1800
// 11	1000[[0, 5], [100, 4], [200, 3]]	2700
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.

// 입출력 예 #2

// 업그레이드를 하지 않는 경우 얻을 수 있는 최대 이익
// 레벨 1 곡괭이로 45초 동안 광석 9개를 캡니다(광석 하나당 5초 소요).남은 시간은 4초입니다.
//     남은 4초 동안 광석을 더 캘 수는 없으며, 따라서 레벨 1 곡괭이로 얻은 이익은 1800원입니다.
// 업그레이드를 한 번 하는 경우 얻을 수 있는 최대 이익
// 레벨 1 곡괭이로 40초 동안 광석 8개를 캐서 1600원을 얻습니다(광석 하나당 5초 소요).남은 시간은 9초입니다.
// 1500원을 사용하여 곡괭이를 레벨 2로 업그레이드합니다.남은 돈은 1600 - 1500 = 100원입니다.
//     레벨 2 곡괭이로 9초 동안 광석 3개를 캐서 600원을 얻습니다(광석 하나당 3초 소요).남은 시간은 0초입니다.
// 업그레이드 후 남은 돈 100원 + 레벨 2 곡괭이로 얻은 이익 600원 = 700원이 총이익입니다.
// 주어진 조건 하에 업그레이드를 두 번하는 방법은 없습니다.따라서 업그레이드를 하지 않은 경우 얻는 1800원이 최대 이익입니다.

// 입출력 예 #3

// 다음과 같이 업그레이드를 두 번 해서 최대 이익을 낼 수 있습니다.

//     레벨 1 곡괭이로 5초 동안 광석 1개를 캐서 1000원을 얻습니다(광석 1개당 5초 소요).남은 시간은 6초입니다.
// 100원을 사용하여 곡괭이를 레벨 2로 업그레이드합니다.남은 돈은 1000 - 100 = 900원입니다.
// 200원을 사용하여 곡괭이를 레벨 3으로 업그레이드합니다.남은 돈은 900 - 200 = 700원입니다.
//     레벨 3 곡괭이로 6초 동안 광석 2개를 캐서 2000원을 얻습니다(광석 1개당 3초 소요).남은 시간은 0초입니다.
// 업그레이드 후 남은 돈 700원 + 레벨 3 곡괭이로 얻은 이익 2000원 = 2700원이 총이익입니다.