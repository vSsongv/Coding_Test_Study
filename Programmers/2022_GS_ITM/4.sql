-- SUBWAY_STATIONS 테이블은 지하철 정류장의 정보를 담은 테이블입니다. SUBWAY_STATIONS 테이블의 구조는 다음과 같으며, ID, NAME은 각각 정류장의 아이디, 이름을 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ID	INT	FALSE
-- NAME	VARCHAR	FALSE
-- LINE_ROUTES 테이블은 지하철 노선이 지나는 정류장의 정보를 담은 테이블입니다. LINE_ROUTES 테이블의 구조는 다음과 같으며, ID, LINE_COLOR, STATION_ID, DRIVE_ORDER는 아이디, 노선을 나타내는 색깔, 방문할 정류장, 방문 순서를 나타냅니다.

-- NAME	TYPE	NULLABLE
-- ID	INT	FALSE
-- LINE_COLOR	VARCHAR	FALSE
-- STATION_ID	INT	FALSE
-- DRIVE_ORDER	INT	FALSE
-- 방문 순서 DRIVE_ORDER는 상행선을 기준으로 들어있으며, 1부터 하나씩 증가합니다. 예를 들어 상행성 기준, Red 노선이 21번 정류장에서 출발해 21번 -> 16번 -> 19번 정류장을 거친다면 이때 테이블은 다음과 같이 표현됩니다.

-- ID	LINE_COLOR	STATION_ID	DRIVE_ORDER
-- {{어떤 숫자}}	RED	21	1
-- {{어떤 숫자}}	RED	16	2
-- {{어떤 숫자}}	RED	19	3
-- 문제
-- 몇 호선 근처로 이사를 가는 게 좋을지 결정하기 위해 정류장을 지나는 노선이 몇 개인지 알아보려 합니다. 정류장의 아이디와 이름, 그리고 해당 정류장을 지나는 노선 수를 조회하는 SQL문을 작성해주세요. 이때 결과는 환승역의 아이디 순으로 조회해야 하며, 지나는 노선이 없는 정류장은 결과에 포함하지 않습니다.

-- 예시
-- 예를 들어 다음과 같은 테이블이 주어졌습니다.

-- SUBWAY_STATIONS

-- ID	NAME
-- 7	Barbican
-- 9	Station1
-- 16	Bethnal Green
-- 19	Liverpool Street
-- 21	Mile End
-- 22	City Road
-- LINE_ROUTES

-- ID	LINE_COLOR	STATION_ID	DRIVE_ORDER
-- 1	Green	9	1
-- 3	Red	16	2
-- 12	Yellow	19	2
-- 17	Yellow	7	1
-- 20	Red	19	3
-- 21	Red	21	1
-- 22	Green	16	2
-- 이를 그림으로 표현하면 다음과 같습니다.

-- example3.png

-- ※ 웹 접근성을 고려하여 노란색(Yellow) 노선은 그림에서 황토색으로 표현하였습니다.

-- 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

-- ID	NAME	노선 수
-- 7	Barbican	1
-- 9	Station1	1
-- 16	Bethnal Green	2
-- 19	Liverpool Street	2
-- 21	Mile End	1