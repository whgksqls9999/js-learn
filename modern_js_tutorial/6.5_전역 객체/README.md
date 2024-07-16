원문: https://ko.javascript.info/global-object

<details>
  <summary>1. 브라우저 환경, Node.js 환경에서 전역 객체를 부르는 명칭</summary>

  1. 브라우저 환경: window
  2. Node.js 환경: global
</details>

<details>
  <summary>2. 선언한 변수, 함수가 전역 객체의 프로퍼티가 되는 경우</summary>

  var를 활용해 변수를 선언하거나 함수를 선언하는 경우
</details>

<details>
  <summary>3. 전역 변수 활용시 보다 권장되는 방법</summary>

  var를 통해 변수를 선언하기보다 직접 전역 객체에 프로퍼티를 추가하는 방법

  ```js
  window.currentUser.name = '이름';
  ```
</details>

<details>
  <summary>4. 전역 객체의 유용한 활용 예</summary>

  폴리필
  
  ```js
if(!window.Promise){
  window.Promise = ...
}
  ```

  구식 브라우저에서 지원되지 않는 기능에 대한 폴리필을 만드는데 사용할 수 있다.
</details>
