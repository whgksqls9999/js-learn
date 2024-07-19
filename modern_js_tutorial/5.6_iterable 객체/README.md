원문: https://ko.javascript.info/iterable

<details>
  <summary>1. for..of의 동작 원리</summary>

  1. 해당 객체 내 Symbol.iterator를 호출. 없다면 에러 발생
  2. 반환된 iterator 객체만을 대상으로 동작하여 iterator 객체의 next() 메서드를 호출해 다음 값 탐색
</details>

<details>
  <summary>2. iterator 객체의 next() 메서드의 반환값</summary>

done이 true일 때는 반복 종료를 나타냄.
  ```js
{done: Boolean, value: any}
  ```
</details>

<details>
  <summary>3. Array.from 메서드의 기능</summary>

  이터러블이나 유사 배열 객체를 받아 진짜 배열로 만들어 반환
</details>

<details>
  <summary>4. Array.from 메서드의 매개변수</summary>

  Array.from(arr, mapFn, thisArg);

  arr: 배열로 만들 대상이 될 이터러블, 유사 배열 객쳉

  mapFn: 매핑. arr의 각 요소에 mapFn 함수를 적용시킨 결과값을 바탕으로 배열 생성

  thisArg: 각 요소들의 this 지정
</details>
