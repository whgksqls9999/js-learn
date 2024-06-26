원문: https://ko.javascript.info/object

<details>
  <summary>1. 객체 리터럴 안에서 메서드 선언 시 사용 가능한 단축 문법의 예시</summary>
  
  ```js
  user = {
    sayHi() {
      alert('Hello');
    }
  }
  ```
</details>

<details>
  <summary>2. this값이 결정되는 시점</summary>
  런타임, 함수 호출 시 결정
</details>

<details>
  <summary>3. 메서드는 this로 어떤 것을 참조하게 되나</summary>
  해당 메서드를 가진 객체
</details>

<details>
  <summary>4. 전역 객체의 함수에서 this를 호출했을 때 발생하는 일</summary>
  엄격모드: this에 undefined 할당

  엄격모드 X: this에 전역 객체 참조
</details>

<details>
  <summary>5. this가 런타임에 결정됐을 때 가질 수 있는 장점</summary>
  this를 내포하고 있는 하나의 함수를 여러 객체에서 재사용할 수 있다.
</details>

<details>
  <summary>6. 화살표 함수가 가지는 this 관련 특징</summary>
  화살표 함수는 고유의 this를 가지지 않고 상위 컨텍스트의 this를 그대로 가져온다.
</details>
