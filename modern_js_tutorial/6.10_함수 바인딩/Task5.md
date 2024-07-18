원본: https://ko.javascript.info/task/ask-partial

<details>
  <summary>정답</summary>

  ok, fail의 경우에 달라지는 것은 login 메서드의 인수이다. 따라서 인수를 각각 true, false로 고정시킨 후 ok, fail 매개변수로 넘겨주면 된다.

  ```js
askPassword(user.login.bind(user, true), user.login.bind(user, false));
  ```
</details>
