원문: https://ko.javascript.info/task/let-scope

<details>
  <summary>정답</summary>

  에러가 발생한다.

  func함수의 환경 레코드 내에는 x 라는 변수가 존재하기는 한다. 따라서 x를 참조하기 위해 외부 렉시컬 환경으로 거슬러 올라가지 않는다.

  그러나 해당 x라는 변수는 아직 선언문을 만나지 못한 상태이기에 uninitiallized 상태이므로 접근 시 에러를 발생시킨다.
</details>
