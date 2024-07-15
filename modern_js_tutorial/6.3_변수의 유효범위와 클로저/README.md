원문: https://ko.javascript.info/closure

<details>
  <summary>1. 중첩 함수란?</summary>

  함수 내부에서 정의된 함수
</details>

<details>
  <summary>2. 렉시컬 환경 객체의 구성</summary>

  1. 환경 레코드: this를 포함한 모든 지역 변수를 프로퍼티로 저장하고 있는 객체

  2. 외부 렉시컬 환경에 대한 참조
</details>

<details>
  <summary>3. 변수와 환경 레코드의 관계</summary>

  변수는 특수 내부 객체인 환경 레코드의 프로퍼티이다. 변수를 조작하는 것은 환경 레코드의 프로퍼티를 조작하는 것과 같다.
</details>

<details>
  <summary>4. let phrase = 'hi' 와 같이 쓰여진 환경에서의 렉시컬 환경 구성은?</summary>

  1. 환경 레코드: phrase: 'hi'
  2. 외부 렉시컬 환경에 대한 참조: null  
</details>

<details>
  <summary>5. 선언된 let 변수가 스크립트 시작시 최초에 렉시컬 환경에 올라가 있는 상태</summary>

  uninitialized
  해당 상태에서는 해당 변수를 참조할 수 없다.
  선언문을 만났을 때 참조해 사용할 수 있음.
</details>

<details>
  <summary>6. 함수 선언문으로 선언한 함수가 일반 변수와 다르게 동작하는 점</summary>

  렉시컬 환경이 만들어지는 즉시 초기화되어 바로 접근해 사용할 수 있다.
</details>



