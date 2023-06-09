5. 객관식
   다시 풀 문제
   @RequestMapping(“/bbs/{articleId}”) 로직에서 {articleId} 는 일종의 변수다. URL 자체가 변수가 되는 기능인데, 여기서 articleId를 변수에 담기 위한 방법은 무엇인가?

답안을 선택하세요.
1
HttpServletRequest request
2
@RequestParam String articleId
3
@PathVariable String articleId/_선택_/
4
ModelAndView view 6. 객관식
다시 풀 문제
Spring Framework의 가장 기본이 되는 개념이다. 많은 Spring 모듈들이 이 방법을 사용해서 개발되고 있다. 클래스간 강한 결합을 제거해주고, 유연한 앱을 제작할 수 있도록 해준다. 이 방법은 무엇인가?

답안을 선택하세요.
1
Dependency Injection
2
Exception Handling
3
AOP/_선택_/
4
Service Abstraction 7. 객관식
다시 풀 문제
스프링은 Single Servlet 으로 동작하는 Framework이다. 이 Servlet은 클라이언트들의 모든 요청과 응답을 관리한다. 또한 요청에 알맞은 Controller를 찾아 매핑시켜준다. 위에서 설명한 Servlet으로 올바른 것은?

답안을 선택하세요.
1
DispatcherServlet/_선택_/
2
HttpServletRequest
3
HttpServletResponse
4
MultipartHttpServletRequest 8. 객관식
다시 풀 문제
다음 자바 언어에서의 객체지향 기법에 대한 설명 중 틀린 것을 모두 고르시오.

답안을 선택하세요.
1
클래스는 복수의 인터페이스를 구현(implements)할 수 있다.
2
클래스는 복수의 부모 클래스(super class)로부터 상속(inherit) 받을 수 없다.
3
모든 클래스는 상속을 통한 확장(extend)이 가능하다.
4
인터페이스와 상위 클래스(super class)는 코드 재사용을 위한 기법이 아니다./_선택_/ 9. 객관식
다시 풀 문제
자바 데이터 타입에 대한 설명 중 틀린 것을 고르시오.

답안을 선택하세요.
1
String 타입은 객체형이다.
2
char 타입 변수는 2 byte의 메모리 공간을 사용한다.
3
char 타입 변수 선언 시 기본 값을 지정하지 않으면 ‘\u00000’ 값이 설정된다./_선택_/
4
boolean 타입은 1 byte의 메모리 공간을 사용한다. 10. 객관식
다시 풀 문제
다음은 Garbage Collection 에 대한 설명이다. 보기 중 잘못된 설명을 고르시오.

답안을 선택하세요.
1
자바 프로그램 실행 중 객체가 garbage collect 되지 않을 수 있다.
2
finalize() 메소드를 오버라이딩하고 필요한 자원을 반납했을 경우, 모든 자원은 확실하게 반납된다./_선택_/
3
garbage collection 이 객체의 완전한 소멸(destruction)을 의미하는 것은 아니다.
4
System.gc() 메소드를 호출하여 강제로 garbage collection을 실행해도 garbage collection이 보장되는 것은 아니다. 11. 객관식
다시 풀 문제
다음 코드에 대한 결과를 고르시오.

```java
public class test {
    public static void main(String args[]) {
        String a = "abc";
        String b = new String ("abc");

        System.out.print(a == b);
    }
}
```

답안을 선택하세요.
1
true
2
NullPointerException
3
false/_선택_/
4
NumberFormatException
