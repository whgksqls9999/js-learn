원문: https://ko.javascript.info/task/settimeout-result

<details>
  <summary>정답</summary>

  반복문 실행 후 100000000을 출력한다.

  setTimeout의 콜백함수는 태스크 큐에 들어가있고, 이는 콜스택이 비어있는 상태에서 호출 가능하다.

  따라서 반복문이 끝난 후 출력되며, 출력되는 값은 외부 렉시컬 환경에 존재하는 i값을 참조할 것이고 해당 값은 100000000까지 늘어난 상태이다.
</details>
