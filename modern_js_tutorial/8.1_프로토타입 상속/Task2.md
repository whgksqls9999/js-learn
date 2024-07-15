원문: https://ko.javascript.info/task/search-algorithm

<details>
  <summary>정답</summary>

  ```js
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
  ```
캐싱을 통한 최적화를 통해 상속받은 객체에서 상속 프로퍼티를 접근하나, 상위 객체에서 해당 프로퍼티에 직접 접근하나 성능적 차이가 없다.
상속 프로퍼티가 발견된 곳을 캐싱해뒀다가, 해당 프로퍼티를 가진 객체에서부터 검색을 시작해나가기 때문
</details>
