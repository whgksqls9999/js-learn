원문: https://ko.javascript.info/constructor-new

<details>
  <summary>1. 생성자 함수를 실행시켰을 때 동작하는 과정</summary>
  1. 빈 객체를 만들어 this에 할당

  2. 함수 본문 실행: this에 새 프로퍼티 추가

  3. this 반환
</details>

<details>
  <summary>2. 객체 리터럴과 비교했을 때 생성자 함수가 가지는 장점</summary>
  1. 재사용성: 유사한 형태의 객체를 손쉽게 생성할 수 있다.
</details>

<details>
  <summary>3. 모든 함수는 생성자 함수로 동작할 수 있는데 이를 가능케 하는 키워드</summary>
  new
</details>

<details>
  <summary>4. 함수가 new와 함께 호출되었는지 아닌지 판별하는 방법</summary>
  함수 내에서 new.target을 호출해 확인한다.

  new와 함께 호출되지 않았다면 new.target은 undefined를 반환하고,

  new와 함께 호출되었다면 new.target은 함수 자체를 반환한다.
</details>

<details>
  <summary>5. 생성자 함수 내에서 return문의 동작 방식</summary>
  1. return 값이 객체라면 this 대신 객체를 반환한다.

  2. return 값이 원시형이라면 return문을 무시하고 this를 반환한다.
</details>

<details>
  <summary>6. 인수가 없는 생성자 함수의 특별한 호출 방법</summary>
  생성자 함수를 호출할 때 괄호를 없이 호출해도 된다.

  ```
  let user = new User;
  let user = new User();
  // 동일하게 동작함
  ```
</details>

