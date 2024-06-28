원문: https://ko.javascript.info/optional-chaining

<details>
  <summary>1. 옵셔널 체이닝이 탄생한 배경</summary>
  && 연산자를 활용해 요소 내 프로퍼티의 존재를 활용해야 하는 번거로움 해소를 위해 탄생
</details>

<details>
  <summary>2. 옵셔널 체이닝의 동작 방식</summary>
  ?. 앞의 평가 대상이 undefined 혹은 null이면 평가 중단하고 undefined 반환
</details>

<details>
  <summary>3. 옵셔널 체이닝 앞 변수가 존재하지 않을 때 발생하는 에러</summary>
  레퍼런스 에러
</details>

<details>
  <summary>4. 메서드 및 프로퍼티 접근 시 유용하게 사용할 수 있는 옵셔널 체이닝 방식</summary>
  ?.()

  ?.[]

  ```js
  user?.func?.()
  ```
  user 객체 내에 func 메서드의 정의 여부를 판단하고, 존재한다면 해당 메서드를 호출시킴
</details>

<details> 
  <summary>5. 옵셔널 체이닝을 사용할 수 없는 경우</summary>
  할당 연산자 좌측에서는 사용할 수 없다.

  평가 결과가 undefined라면 undefined = value; 가 되어 신택스 에러를 발생시키기 때문
  
  ```js
  user?.name = "Violate";
  ```
</details>
