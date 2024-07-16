원문: https://ko.javascript.info/callbacks

<details>
  <summary>1. 콜백?</summary>

  비동기적으로 동작하는 함수에 함수 내 동작이 처리된 후 실행될 함수를 인수로 전달해 순차적으로 처리될 수 있도록 하는 것
</details>

<details>
  <summary>2. 오류 우선 콜백</summary>

  콜백을 활용해 에러 핸들링시, 콜백 함수의 첫 번째 인수로 오류 객체를 받도록 하는 패턴

  단일 함수로 에러 케이스, 성공 케이스를 모두 다룰 수 있음

  ```js
function(error, script){
  if (error){
    // 에러 핸들링
  } else {
    // script 실행
  }
}
  ```
</details>

