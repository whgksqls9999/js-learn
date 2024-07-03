원문: https://ko.javascript.info/task/extract-currency

<details>
  <summary>정답</summary>

  ```js
  function extractCurrencyValue(str){
    return parseInt(str.slice(1));
  }

  function extractCurrencyValue(str){
    return +str.slice(1);
  }
  ```
</details>
