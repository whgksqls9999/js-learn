원문: https://ko.javascript.info/prototype-inheritance

<details>
  <summary>1. 프로토타입 상속이란</summary>

  객체에서 프로퍼티를 읽을 때, 해당 프로퍼티가 없으면 자동으로 프로토타입에서 프로퍼티를 찾는 동작 방식
</details>

<details>
  <summary>2. __proto__와 [[prototype]]의 차이</summary>

  __proto__는 [[prototype]]의 getter이며 setter이다.
</details>

<details>
  <summary>3. 프로토타입 체이닝의 제약사항</summary>

  1. 순환 참조를 허용하지 않음
  2. __proto__의 값은 객체나 null만 가능. 다른 자료형은 무시됨
  3. 하나의 [[prototype]]만을 가질 수 있음
</details>

<details>
  <summary>4. 프로토타입에서의 this</summary>

  this는 프로토타입의 영향을 받지 않음

  메서드를 객체에서 호출했든 프로토타입에서 호출했든 this는 . 앞에 나온 객체를 가리킴
</details>

<details>
  <summary>5. for..in 반복문, Object.keys()와 상속 프로퍼티에 관련된 차이점</summary>

  for..in : 상속 프로퍼티도 순회 대상에 포함

  Object.keys() : 상속 프로퍼티를 반환하지 않음
</details>

<details>
  <summary>6. 객체에서 상속 프로퍼티인지 구분해내는 메서드</summary>

  obj.hasOwnProperty(key)
</details>

<details>
  <summary>7. __proto__를 대신해 사용할 수 있는 getter와 setter</summary>

  Object.getPrototypeOf
  Object.setPrototypeOf
</details>
