원문: https://ko.javascript.info/task/random-int-min-max

<details>
  <summary>정답</summary>

  ```js
  function randomInteger(min, max) {
	  return Math.round(Math.random() * (max - min + 1) + min - 0.5);
  }
  ```
</details>
