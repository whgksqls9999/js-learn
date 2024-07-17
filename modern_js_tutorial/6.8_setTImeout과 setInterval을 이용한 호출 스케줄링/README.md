원문: https://ko.javascript.info/settimeout-setinterval

<details>
  <summary>1. 호출 스케줄링이란?</summary>

  일정 시간 후 원하는 함수를 예약실행 할 수 있게 하는 것
</details>

<details>
  <summary>2. setTimeout 스케줄링을 취소하는 방법</summary>

  clearTimeout(식별자) 호출

  ```js
let timer = setTimeout(() => console.log('hi'), 2000);

clearTimeout(timer);
  ```
</details>

<details>
  <summary>3. setTimeout을 활용해 일정 간격으로 함수 실행 반복하기</summary>

  ```js
let timer = setTimeout(function tick(){
  console.log('tick');
  timer = setTimeout(tick, 2000); // 이렇게 하면 외부에서 clearTimeout으로 타이머를 멈출 수 있지만
  setTimeout(tick, 2000); // 이는 외부에서 clearTimeout(timer)를 해도 스케줄링이 계속해서 진행된다
}, 2000);
  ```
</details>

<details>
  <summary>4. setInterval을 활용한 스케줄링과 중첩 setTimeout을 활용한 스케줄링의 차이점</summary>

  1. setInterval은 함수의 실행시간도 지연시간에 포함시킨다.
  2. setTimeout은 함수를 호출하고 동작이 끝난 뒤부터 지연시간을 계산한다.

  setInterval에서의 함수 실행시간이 지연시간보다 길어지면 엔진은 함수 실행 종료를 기다렸다가 바로 다음 호출을 진행한다.
</details>

<details>
  <summary>5. setTimeout, setInterval 내 함수와 가비지 컬렉션의 동작 관계</summary>

  호출 스케줄링에 넘겨진 함수는 스케줄러에 저장돼 해당 함수에 도달할 수 없어도 가비지 컬렉션의 대상이 되지 않는다.

  따라서, 메모리 누수 방지를 위해서는 필요가 없어진 스케줄링 함수는 곧바로 취소해주어야 한다.

  특히 외부 렉시컬 환경을 참조하는 함수를 스케줄링에 넘겼을 때 이와 같은 메모리 누수는 더 커질 수 있다.
</details>

<details>
  <summary>6. 브라우저가 가지는 스케줄링 지연시간 관련 제약</summary>

  브라우저 환경에서는 다섯번째 중첩 타이머 이후에는 대기시간을 최소 4ms 이상이 되게 강제한다.

  Node.js 환경에서는 무관하다.
</details>
