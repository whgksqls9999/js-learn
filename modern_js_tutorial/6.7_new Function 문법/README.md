원문: https://ko.javascript.info/new-function

<details>
  <summary>1. new Function 문법을 활용해 함수를 생성하는 방법 </summary>

  ```js
  let func = new Function('a', 'b', 'return a + b');
  let func2 = new Function(`console.log('Hello')`);
  ```
</details>

<details>
  <summary>2. new Function 문법을 활용해 함수를 작성하는 방법의 이점</summary>

  런타임에서 전달받은 문자열을 바탕으로 함수를 작성할 수 있다.
</details>

<details>
  <summary>3. new Function 문법으로 작성한 함수가 가지는 클로저와 관련된 특징</summary>

  new Function을 통해 작성된 함수는 [[Environment]]에 외부 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하게 된다.

  따라서 외부 변수에 접근할 수 없고, 전역 변수에만 접근이 가능하다.

  컴파일 시점과 런타임 시점에서 작성된 함수는 변수 접근 시 다른 상황에 처해질 수 있다.
  
  스크립트로 작성된 코드에서 userName이라는 지역변수에 접근하는 코드를 작성하고 이를 배포해 사용하게 된다면, 압축기는 해당 userName이라는 변수명을 짧은 변수명으로 변경시켜 최적화한다.

  따라서 런타임 시점에 new Function 으로 작성한 함수가 userName이라는 변수에 접근하지 못할 수 있다는 것

  이 때문에 new Function으로 작성된 함수가 전역이 아닌 외부 렉시컬 환경에 참조가 가능한다고 해도 변수명이 변해있는 변수에 접근할 가능성이 있어 에러를 보일 수 있다. [에러 예방]
</details>

