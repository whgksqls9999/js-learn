원문: https://ko.javascript.info/task/truncate

<details>
  <summary>정답</summary>

  ```js
  function truncate(str, limit){
    let word = str.slice(0, Math.min(str.length, limit-1));

    if (str.length > limit){
      word += '…';
    }

    return word;
  }
  ```
</details>
