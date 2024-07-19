원문: https://ko.javascript.info/event-loop

<details>
  <summary>1. 이벤트 루프?</summary>

  작업을 기다리고, 처리하고 다시 대기하며 계속적으로 돌아가는 JS 내 루프 
</details>

<details>
  <summary>2. 이벤트 루프 동작 알고리즘</summary>

  1. 매크로태스크 큐의 가장 오래된 작업 처리
  2. 마이크로태스크 큐가 빌때까지 마이크로 태스크 큐 작업 처리
  3. 렌더링 작업
  4. 매크로태스크 큐에 작업이 있다면 해당 작업 처리 및 대기
  5. 반복
</details>

<details>
  <summary>3. 매크로태스크큐 스케줄링 방법</summary>

  지연시간이 0인 setTimeout에 매크로태스크큐에 넣을 함수를 넣어줌
</details>

<details>
  <summary>4. 마이크로태스크큐 스케줄링 방법</summary>

  1. queueMicrotask(f) 함수 실행
  2. 프라미스의 핸들러(then) 활용
</details>

<details>
  <summary>5. 마이크로태스크, 매크로태스크, 렌더링 작업 순서</summary>  

  1. 마이크로태스크를 우선적으로 처리
  2. 매크로태스크 처리
  3. 렌더링 처리
</details>

<details>
  <summary>6. 콜스택, 태스크 큐의 작업 순서</summary>

  1. 콜 스택 내에 작업을 올리며 동기 작업 처리
  2. 비동기 작업을 만나면 비동기 작업을 Web API에 위임, 그 작업 결과로 실행할 콜백 함수를 태스크 큐에 적재
  3. 콜 스택 내 작업이 모두 처리됐다면 이벤트루프는 태스크 큐의 작업을 콜 스택에 올려 처리
</details>
