-- SELLINGS 테이블은 자동차 판매 회사의 2016년 하반기 판매 기록을 담고 있는 테이블입니다. SELLINGS 테이블 구조는 다음과 같으며, CAR_ID, EMPLOYEE_ID, CREATED_AT, PRICE는 각각 판매한 자동차 ID, 판매한 사원 ID, 판매일, 판매 가격을 나타냅니다.

-- NAME	TYPE	NULLABLE
-- CAR_ID	INT	FALSE
-- EMPLOYEE_ID	INT	FALSE
-- CREATED_AT	DATETIME	FALSE
-- PRICE	NUMERIC(N,M)	FALSE
-- 문제
-- 2016년 11월의 매출액을 알아보려 합니다. 11월 판매액의 합을 구하는 SQL 문을 작성해주세요.

-- 예시
-- 예를 들어 SELLINGS 테이블이 다음과 같다면

-- CAR_ID	EMPLOYEE_ID	CREATED_AT	PRICE
-- 352	2455	2016-08-16 02:52:10	3700
-- 352	2499	2016-11-26 01:33:15	6200
-- 352	3010	2016-11-06 11:35:44	10800
-- 306	2955	2016-12-25 06:55:46	1000
-- 이 중 2번째, 3번째 레코드가 11월에 생긴 판매 기록입니다. 두 레코드의 판매가를 더하면 6200 + 10800 = 17000입니다. 따라서 SQL을 실행하면 다음과 같이 출력되어야 합니다.

-- 판매액
-- 17000

SELECT SUM(PRICE) FROM SELLINGS WHERE LEFT(CREATED_AT,7) = DATE_FORMAT(now(),'2016-11');
