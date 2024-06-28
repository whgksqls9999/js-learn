원문 : https://ko.javascript.info/task/accumulator

<details>
  <summary>정답</summary>
  
  ```js
  function Accumulator(stringValue){
    this.value = Number(stringValue);
    this.read = function(){
      this.value += Number(prompt('입력값:',0));
    }
  }
  ```
</details>
