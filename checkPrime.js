function checkPrime(number) {
    // 소수 여부를 저장하는 변수
    // 소수이면 true
    if(number == 2) return true;
    if(number == 1) return false;  
    // 2부터 i의 제곱이 해당 숫자 이하일 때까지 나머지가 0인지 체크
    for (let i = 2; i * i <= number; i++) {
      // 소수가 아니므로 plag를 false 처리하고 반복문 종료
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }