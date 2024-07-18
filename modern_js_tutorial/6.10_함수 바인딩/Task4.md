원문: https://ko.javascript.info/task/question-use-bind

<details>
  <summary>정답</summary>

  askPassword로 전달된 인수는 alert(`${this.name}님이 로그인하셨습니다.`); 이다.

  따라서 함수 내부에서는 this를 찾을 수 없다.

  ```js
askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // 컨텍스트를 user로 고정시킨 후 넘겨줘야한다.
  ```
</details>
