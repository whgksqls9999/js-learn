원문: https://ko.javascript.info/task/string-new-property

<details>
  <summary>정답</summary>
  
  ```js
  let str = 'Hello';
  str.test = 5;
  console.log(str.test);
  ```

  1. 엄격 모드

  엄격 모드에서는 래퍼 객체를 수정하려 할 때 에러를 발생시킴


  2. 비엄격 모드

  - 래퍼 객체에 test 라는 프로퍼티를 추가함
  - 하지만 해당 래퍼 객체는 곧바로 제거됨
  - 따라서 log를 실행시켰을 땐 새로운 임시 래퍼 객체를 생성하고 해당 객체의 test 프로퍼티에 접근하기에 undefined를 출력
  - 아래 코드를 실행시켜보면, 래퍼 객체에 test 프로퍼티가 추가됐음을 확인할 수 있음
    
  ```js
  console.log(str.test = 5);
  ```
</details>
