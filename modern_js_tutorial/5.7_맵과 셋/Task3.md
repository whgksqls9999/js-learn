원문: https://ko.javascript.info/task/iterable-keys

<details>
  <summary>정답</summary>

  map.keys()의 반환값은 이터러블한 이터레이터다. 이는 배열과 다르다.

  Array.from을 활용해 map.keys()의 반환값을 배열로 변환시켜줘야 push 메서드를 사용할 수 있다.

  ```js
let keys = Array.from(map.keys());
  ```
</details>
