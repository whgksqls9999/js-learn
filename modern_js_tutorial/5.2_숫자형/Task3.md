원문: https://ko.javascript.info/task/repeat-until-number

<details>
  <summary>정답</summary>

  작성한 답안
  
  ```js
  function readNumber(){
      let num = prompt('input','');

      while(isNaN(num)){
        num = prompt('input', '');
      }

      if (num === '' || num === null) return null;
      return Number(num);
  }
  ```

  모범 답안
  ```js
  function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
  }
  
  alert(`Read: ${readNumber()}`);
  ```
  
</details>
