원문: https://ko.javascript.info/array

<details>
  <summary>1. 자바스크립트 엔진이 배열의 요소를 메모리에 저장하는 방식</summary>

  연속된 요소를 인접한 메모리 공간에 차례로 저장해 연산 속도를 높인다.
</details>

<details>
  <summary>2. 배열에 연속된 숫자가 아닌 임의의 키를 사용했을 때 불이익</summary>

  배열을 일반 객체처럼 다루게 되어 요소를 인접 메모리 공간에 저장하는 등의 최적화 기법이 적용되지 않을 수 있다.
</details>

<details>
  <summary>3. for..in 반복문을 배열에 사용했을 때 나타나는 문제점</summary>

  1. 유사 객체 배열에는 키가 숫자가 아닌 프로퍼티, 메서드도 존재하는데 해당 요소를 대상으로도 순회가 이뤄질 수 있어 예기치 않은 부작용을 일으킬 수 있음

  2. for..in 반복문은 배열이 아닌 객체와 함께 사용할 때 최적화되어 있어 배열에서 사용시 객체에서 사용시보다 10~100배 정도 느릴 수 있다. 
</details>

<details>
  <summary>4. length 프로퍼티가 반환하는 값</summary>

  배열 내 가장 큰 인덱스에 1을 더한 값

  배열 내 요소의 개수를 반환하는 것이 아님

  ```js
  let arr = [];
  arr[123] = '요소';
  console.log(arr.length); // 124
  ```
</details>

<details>
  <summary>5. 배열의 length 프로퍼티를 임의로 수정했을 때 나타나는 일</summary>

  1. length 값을 증가시키면 아무 일도 일어나지 않는다.

  2. length 값을 감소시키면 해당 length값에 맞춰서 배열이 잘린다.
</details>

<details>
  <summary>6. new Array()로 배열 생성 시 주의점</summary>

  숫자 하나를 요소로 가진 배열을 만들고자 할 때 잘못된 배열을 만들 수 있음

  ```js
  let a = new Array(2); // 숫자 2가 저장된 배열을 만들것이라 기대했으나
  console.log(a); // [ <2 empty items> ]  길이가 2고 아무것도 저장되지 않은 배열이 만들어진다.
  ```
</details>

<details>
  <summary>7. 이항 덧셈 연산자가 문자열 간 덧셈을 실행하는 경우</summary>

  피연산자 중 단 하나라도 문자열이 섞여있을 때 문자열 간 결합을 실행
</details>
