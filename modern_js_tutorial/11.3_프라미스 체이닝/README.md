원문: https://ko.javascript.info/promise-chaining

<details>
  <summary>1. 프라미스 체이닝?</summary>

  .then 메서드를 활용해 결과값을 반환하고, 반환된 결과값을 다음 then 에서 이어서 활용하는 식의 연쇄 과정
</details>

<details>
  <summary>2. 프라미스 체이닝이 가능한 이유</summary>

  promise.then은 반환값으로 프라미스를 반환하기 때문
</details>

<details>
  <summary>3. then에서 사용된 핸들러가 프라미스를 반환하는 경우 처리</summary>

  반환된 프라미스가 처리될 때 까지 기다린 후 처리 결과를 가지고 다음 체인으로 넘어감
</details>

<details>
  <summary>4. thenable?</summary>

  then 메서드가 구현되어 있는 객체

  프라미스 체이닝에서 해당 thenable 객체를 반환해 다음 체인으로 결과값을 전달할 수 있다.

  해당 then 메서드는 resolve, reject를 매개변수로 받아 둘 중 하나를 실행시켜야 한다.
</details>

<details>
  <summary>5. 프라미스 체이닝 동작 과정</summary>

  then, catch, finally의 핸들러에서 프라미스 반환 시, 해당 프라미스의 처리를 기다렸다가 처리 결과를 다음 체인에 넘겨준다.

  따라서 다음 핸들러들은 이전 핸들러의 프라미스 처리, 반환을 기다렸다가 동작한다.
  
</details>
