원문: https://ko.javascript.info/task/random-min-max

<details>
  <summary>정답</summary>

  ```js
  function random(min, max){
    return Math.random() * (max - min) + min;
  }
  ```
</details>
