원문: https://ko.javascript.info/primitives-methods

<details>
  <summary>1. 원시형의 종류</summary>
  string, number, bigint, boolean, symbol, null, undefined
</details>

<details>
  <summary>2. 원시값의 메서드에 접근할 때 나타나는 동작 방식</summary>
  원시 래퍼 객체(wrapper object)를 임시로 생성해 해당 객체의 메서드, 프로퍼티에 접근

  작업이 끝나면 해당 원시 래퍼 객체를 제거
</details>

<details>
  <summary>3. 래퍼 객체를 생성자로 활용했을 때 발생할 수 있는 혼동</summary>
  1. 원시값과 생성자로 생성한 값의 타입 체크 시 혼동할 수 있음

  ```js
  console.log(typeof 1); // 'number'
  console.log(typeof new Number(1)); // 'object'
  ```

 2. 객체는 무조건 true를 반환하기 때문에 논리 평가 시 혼동할 수 있음.

  ```js
  let zero = new Number(0);
  if (zero) return; // zero는 객체를 저장하고 있기 때문에 해당 조건문은 항상 참이 됨
  ```
</details>

<details>
  <summary>4. 래퍼 객체를 생성자로 활용할 때와 new 키워드 없이 사용하는 것의 차이</summary>
  생성자로 활용하면 무조건 객체를 생성하고, new 키워드를 사용하지 않으면 인수를 알맞는 형태의 원시형으로 알아서 변경해준다.
</details>

<details>
  <summary>5. 래퍼 객체가 존재하지 않는 원시형</summary>
  null, undefined
</details>
