-- 문제 설명
-- PLACES 테이블은 공간 임대 서비스에 등록된 공간의 정보를 담은 테이블입니다. PLACES 테이블의 구조는 다음과 같으며 ID, NAME, HOST_ID는 각각 공간의 아이디, 이름, 공간을 소유한 유저의 아이디를 나타냅니다. ID는 기본키입니다.

-- NAME	TYPE
-- ID	INT
-- NAME	VARCHAR
-- HOST_ID	INT
-- PLACE_REVIEWS 테이블은 공간을 빌린 사람이 남긴 후기를 담은 테이블입니다. PLACE_REVIEWS 테이블의 구조는 다음과 같으며 ID, PLACE_ID, CREATED_AT, REVIEWER_ID, COMMENTS는 각각 아이디, 공간의 아이디, 후기를 남긴 날짜, 후기를 남긴 유저의 아이디, 내용을 나타냅니다. ID는 기본키입니다.

-- NAME	TYPE
-- ID	INT
-- PLACE_ID	INT
-- CREATED_AT	DATE
-- REVIEWER_ID	INT
-- COMMENTS	VARCHAR
-- 문제
-- 2018년 01월 01일부터 2018년 12월 31일까지 월별로 후기가 가장 많은 공간의 이름과, 그 후기 개수를 나타내는 SQL 문을 작성해주세요. 이때 결과는 월별로 오름차순 정렬해주세요.
-- 단, 같은 월에 후기가 가장 많이 달린 공간이 여러 개일 경우 공간의 이름을 기준으로 사전 순 정렬해 모두 나타내주세요.

-- 예시
-- 예를 들어, PLACES과 PLACE_REVIEWS 테이블이 다음과 같다면

-- PLACES

-- ID	NAME	HOST_ID
-- 4431977	BOUTIQUE STAYS - Somerset Terrace, Pet Friendly	760849
-- 5194998	BOUTIQUE STAYS - Elwood Beaches 3, Pet Friendly	760849
-- 22868779	★ Fresh Fitzroy Pad with City Views! ★	21058208
-- 24195416	5 Star Luxury St Kilda Road	31634799
-- PLACE_REVIEWS

-- ID	PLACE_ID	CREATED_AT	REVIEWER_ID	COMMENTS
-- 23828199	4431977	2016-08-14 00:00:00	88623084	Thanks Alex - apartment was...
-- 318211981	22868779	2018-07-13 00:00:00	37439781	We had a lovely stay at thi...
-- 318211982	22868779	2018-07-14 00:00:00	33246414	A wonderful place for famil...
-- 318531222	5194998	2018-07-15 00:00:00	64339421	Enjoyed the stay. Excellent...
-- 320298581	4431977	2018-11-19 00:00:00	23799748	Stylish apartment in a grea...
-- 323407321	5194998	2018-11-27 00:00:00	6026824	This place is incredible, s...
-- 348433938	5194998	2018-11-15 00:00:00	70464455	Great space, location , ame...
-- 348552004	4431977	2018-11-17 00:00:00	28437929	A really lovely combination...
-- 358021234	22868779	2018-12-01 00:00:00	28437929	We had an amazing time at A...
-- 이하 생략...	...	...	...	...
-- PLACE_REVIEWS에서 ID가 23828199인 레코드는 2016년에 생긴 레코드이므로 출력 결과에 반영시키지 않습니다.

-- 따라서 SQL 문을 실행하면 다음과 같이 나와야 합니다.

-- MONTH	NAME	COUNT
-- 07	★ Fresh Fitzroy Pad with City Views! ★	2
-- 11	BOUTIQUE STAYS - Elwood Beaches 3, Pet Friendly	2
-- 11	BOUTIQUE STAYS - Somerset Terrace, Pet Friendly	2
-- 12	★ Fresh Fitzroy Pad with City Views! ★	7
-- month가 한 자릿수일 때, 출력 형식이 m이든 mm이든 둘 다 정답으로 인정됩니다. 예를 들어, 7월을 7이나 07로 출력해도 둘 다 정답입니다.