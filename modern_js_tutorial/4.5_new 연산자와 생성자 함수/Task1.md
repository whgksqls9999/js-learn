원문: https://ko.javascript.info/task/two-functions-one-object

<details>
  <summary>정답</summary>
  ```js
  const obj = {};
  function A(){
    return obj;
  }

  function B(){
    return obj;
  }

  alert(a == b); // true;
  ```

  두 생성자 함수에서 외부에 선언된 객체를 리턴하면 a == b 를 시킬 수 있다
</details>
