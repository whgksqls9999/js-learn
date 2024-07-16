원문: https://ko.javascript.info/task/closure-variable-access

<details>
  <summary>정답</summary>

  생성된 곳을 기억하고 그곳의 외부 변수에 접근한다.

  중첩함수의 [[Environmen]] 에는 함수 makeWorker의 렉시컬 환경에 대한 참조를 가진다.

  따라서 name을 찾기 위해 makeWorker 렉시컬 환경을 참조해 그 안에 있는 name 변수에 접근한다.
  </details>
