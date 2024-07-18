원문: https://ko.javascript.info/bind

<details>
  <summary>1. 브라우저 환경에서 setTimeout 메서드의 인수로 전달받은 함수 호출 시 this는?</summary>
  
  window
</details>

<details>
  <summary>2. 메서드를 인수로 전달해 호출 시, 컨텍스트를 유지하는 방법</summary>

  1. 래퍼 함수
  2. bind

  ```js
let boundFunc = func.bind(context); // bind 메서드는 context를 고정시킨, 호출 가능한 특수 객체를 반환함
  ```
</details>

<details>
  <summary>3. 부분 적용?</summary>

  인수의 일부만 고정시킬 수 있다. 포괄적인 함수를 가져와 덜 포괄적인 함수로 변형해서 사용하는데 유용함
  ```js
function mul(a, b){
  return a * b;
}

let double = mul.bind(null,2): // 컨텍스트는 null이며, 매개변수 a 는 2로 고정. b는 입력된 인수를 사용
  ```
</details>

<details>
  <summary>4. 컨텍스트는 고정하지 않고, 인수만 고정하고 싶을 때 사용하는 방법</summary>

  헬퍼 함수를 작성해 사용한다.

  ```js
function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

  ```
</details>
