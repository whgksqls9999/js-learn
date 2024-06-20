원문: https://ko.javascript.info/garbage-collection

<details>
  <summary>1. 가비지 컬렉터에 의해 제거되지 않는 값은?</summary>
  루트가 참조하는 값이나 체이닝을 통해 루트에 도달할 수 있는 값
  
</details>

<details>
  <summary>2. mark-and-sweep 알고리즘 동작 원리</summary>
  1. 루트 정보를 수입하고 기억(mark)

  2. 루트가 참조하고 있는 모든 객체를 방문하고 이를 mark

  3. mark된 객체에 방문해 그 객체가 참조하는 객체도 mark. 이 과정을 도달 가능한 모든 객체를 방문할 때 까지 반복

  4. mark되지 않은 모든 객체를 메모리에서 삭제
</details>

<details>
  <summary>3. 가비지 컬렉터 최적화 기법</summary>
  1. generational collection(세대별 수집)

  객체를 새로운 객체, 오래된 객체로 구분한 후 새로운 객체 위주로 메모리에서 제거

  ** 새로운 객체: 생성 제 역할을 빠르게 수행해 금방 쓸모를 잃게된 객체

  2. incremental collection(점진적 수집)

  mark-and-sweep 과정을 모든 객체에 대해 한 번에 수행하지 않고 구역별로 나누어 별도로 수행하는 것

  3. idel-time collection(유휴 시간 수집)

  CPU가 유휴 상태일 때만 가비지 컬렉션 수행
</details>

