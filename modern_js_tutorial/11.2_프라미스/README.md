원문: https://ko.javascript.info/promise-basics

<details>
  <summary>1. 제작 코드(producing code), 소비 코드(consuming code), 프라미스(promise)</summary>

  1. producing code: 실행이 완료될 떄까지 시간이 걸리는 코드
  2. consuming code: producing code의 실행이 완료될 때까지 기다리는 코드
  3. promise: producing code의 실행 완료를 기다린 후, 이를 consuming code에게 알리는 일종의 구독 리스트
</details>

<details>
  <summary>2. 프라미스 객체 생성 문법</summary>

  ```js
let promise = new Promise(function (resolve, reject){
  // executor
});
  ```
</details>

<details>
  <summary>3. executor?</summary>

  프라미스 생성 시 자동으로 실행되는 코드로, 결과를 만들어내는 producing code가 이에 해당

  결과로 반드시 인수로 넘겨받은 resolve 혹은 reject를 호출해야함

  resolve(value)

  reject(error)
</details>

<details>
  <summary>4. promise 객체가 가지는 프로퍼티</summary>

  state: 'pending' | 'fulfilled' | 'rejected'

  result: undefined | value | error

  promise 프로퍼티의 값은 executor에 의해 변화된다.
</details>

<details>
  <summary>5. executor가 resolve 혹은 reject를 호출한 이후의 코드 진행은?</summary>

  executor 내부에 resolve나 reject를 호출한 이후에도 실행시킬 코드가 남아있다면 해당 코드를 실행한다.

  하지만 resolve나 reject가 반복적으로 또 다시 나타난다면, 첫 호출 이후로는 이를 무시한다.
</details>

<details>
  <summary>6. 프로미스에서 활용 가능한 소비 함수의 종류</summary>

  .then, .catch, .finally
</details>

<details>
  <summary>7. then 메서드의 매개변수</summary>

  .then(onFulfilled, onRejected);

  1. resolve 시 실행시킬 콜백 함수
  2. reject 시 실행시킬 콜백 함수
</details>

<details>
  <summary>8. finally와 then(func, func)의 차이점</summary>

  1. finally는 프라미스의 이행, 거부 여부를 알 수 없다.
  2. finally는 자동으로 다음 핸들러에 결과와 에러를 전달한다.

  finally 뒤에 then을 붙이면 전달받은 결과, 에러를 사용할 수 있음
</details>
