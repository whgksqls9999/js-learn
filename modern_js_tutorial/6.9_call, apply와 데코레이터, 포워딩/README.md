원문: https://ko.javascript.info/call-apply-decorators

<details>
  <summary>1. 데코레이터란?</summary>

  인수로 받은 함수의 행동을 변경시켜주는 함수
</details>

<details>
  <summary>2. 데코레이터를 활용하기 좋은 예</summary>

  함수의 반환값을 캐싱할 때, 캐싱 관련 로직을 데코레이터에 두고 인수로 실행할 함수를 받아 사용할 수 있다.

  캐싱 로직과 함수 본문의 로직을 분리시켜 복잡도를 증가시키지 않고 캐싱 로직을 활용할 수 있으며, 어떤 함수에도 해당 데코레이터를 적용시킬 수 있는 장점이 있다.
</details>

