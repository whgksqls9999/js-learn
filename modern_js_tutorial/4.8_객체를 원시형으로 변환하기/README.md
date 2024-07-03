원문: https://ko.javascript.info/object-toprimitive

<details>
  <summary>1. 객체의 형 변환이 일어나는 경우</summary>

  1. 수학 관련 함수 및 연산을 적용할 때 - 숫자형

  2. 출력할 때, 객체를 key로 사용할 때 등 - 문자형
</details>

<details>
  <summary>2. hint의 종류</summary>

  string / number / default
</details>

<details>
  <summary>3. hint가 default가 되는 경우</summary>

  1. +의 인수가 객체일 때. => 문자열을 합치는 연산자 or 숫자를 더해주는 연산자

  2. 동등 연산자를 사용해 객체-문자형, 객체-숫자형, 객체-심볼형 비교시

  일반적으로 number와 default는 동일하게 처리
</details>

<details>
  <summary>4. hint가 default가 될 것 같으나 number로 고정되어 있는 경우</summary>

  크기 비교 연산자(>, <)를 사용할 때.

  하위 호환성때문에 hint를 number로 고정
</details>

<details>
  <summary>5. 객체 형 변환시 작동하는 알고리즘</summary>

  1. 객체에 obj\[Symbol.toPrimitive](hint) 메서드가 있는지 찾고, 있다면 호출

  2. 1에 해당하지 않고 hint가 'string'이라면 obj.toString() 혹은 obj.valueOf() 호출

  3. 1과 2에 해당하지 않고, hint가 'number'나 'default'라면 obj.valueOf() 혹은 obj.toString() 호출

  2번, 3번의 경우, 앞쪽에 명시한 메서드가 존재하지 않으면 뒤쪽 메서드를 호출
</details>

<details>
  <summary>6. 일반 객체에 대한 toString, valueOf 반환값</summary>

  toString: '[object Object]'

  valueOf: 객체 자신. 반환값이 객체 자신이므로 그 결과가 무시됨

  ```js
  let user = {name: 'John'};

  console.log(user.valueOf() === user); // true
  ```
</details>

<details>
  <summary>7. 3 * obj 에서 나타나는 형 변환의 동작 과정</summary>

  1. obj를 원시값으로 변환시킨다. 변환 규칙은 위 쪽의 내용들 (Symbol.toPrimitive, toString, valueOf)를 따른다.

  2. 변환된 원시값이 숫자형이 아니라면 다시 한번 숫자형으로 변환시킨다.
</details>

