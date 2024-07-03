원문: https://ko.javascript.info/task/ucfirst

<details>
  <summary>정답</summary>

  ```js
  function ucFirst(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  ```
</details>
