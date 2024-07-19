원문: https://ko.javascript.info/map-set

<details>
  <summary>1. 맵과 객체의 차이</summary>

  맵은 키 값으로 자료형의 제약을 받지 않는다.

  객체는 키 값으로 문자열만을 허용한다.

  맵은 삽입 순서를 기억해 이 순서대로 순회한다.

  객체는 정수형 문자열인 경우 오름차순으로 순회한다.
</details>

<details>
  <summary>2. 맵이 키를 비교하는 방식</summary>

  SameValueZero 알고리즘을 활용해 키를 비교

  === 과 유사하나 NaN과 NaN을 같다고 취급하는 차이점 존재
</details>

<details>
  <summary>3. Object.entries()를 활용해 객체를 맵으로 변환하는 방법</summary>

  ```js
let map = new Map(Object.entries(obj));
  ```
</details>

<details>
  <summary>4. Object.fromEntries()를 활용해 맵을 객체로 변환하는 방법</summary>

  Object.fromEntries() 메서드는 [키, 값] 쌍의 배열을 객체로 변환한다.

  Object.fromEntries()는 인수로 이터러블을 받기에 굳이 entries()를 사용해주지 않아도 된다.
  
  ```js
let obj = Object.fromEntries(map.entries());
let obj = Object.fromEntries(map);
  ```
</details>
