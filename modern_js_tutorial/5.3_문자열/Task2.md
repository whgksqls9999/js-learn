원문: https://ko.javascript.info/task/check-spam

<details>
  <summary>정답</summary>

  ```js
  function checkSpam(str){
    const WORD = ['viagra', 'xxx'];

    for (let word of WORD){
      if (str.toLowerCase().includes(word)){
        return true;
      }
    }
    return false;
  }
  ```
</details>
