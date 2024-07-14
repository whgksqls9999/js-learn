원문: https://ko.javascript.info/task/array-input-sum

<details>
  <summary>정답</summary>

  ```js


function sumInput(){
  const arr = [];
  
  let a = +prompt('input');
  while(a !== null && a !== '' && !isNaN(a)){
    arr.push(a);
    a = +prompt('input);
  }

  return arr.reduce((prev, cur) => prev + cur, 0);
}
  ```
</details>
