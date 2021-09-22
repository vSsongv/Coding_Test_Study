--SELECT QUERY--
-- https://programmers.co.kr/learn/courses/30/lessons/59034 [모든 레코드 조회하기]
SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID --order by val val로 오름차순 정렬
-- https://programmers.co.kr/learn/courses/30/lessons/59035 [역순 정렬하기]
SELECT NAME,DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC --order by val DESC 내림차순 정렬
-- https://programmers.co.kr/learn/courses/30/lessons/59036 [아픈 동물 찾기]
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick' ORDER BY ANIMAL_ID --sql에서는 ==가 아닌 =사용