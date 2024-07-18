원문: https://ko.javascript.info/call-apply-decorators

<details>
  <summary>1. 데코레이터란?</summary>

  인수로 받은 함수를 감싸 행동을 변화시키는 래퍼 함수
</details>

<details>
  <summary>2. 데코레이터를 활용하기 좋은 예</summary>

  함수의 반환값을 캐싱할 때, 캐싱 관련 로직을 데코레이터에 두고 인수로 실행할 함수를 받아 사용할 수 있다.

  캐싱 로직과 함수 본문의 로직을 분리시켜 복잡도를 증가시키지 않고 캐싱 로직을 활용할 수 있으며, 어떤 함수에도 해당 데코레이터를 적용시킬 수 있는 장점이 있다.
</details>

<details>
  <summary>3. 객체의 메서드를 데코레이터의 매개변수로 넘겨줬을 때 문제가 발생할 수 있는 상황</summary>

  객체의 메서드가 this를 참조하는 함수일 때, 해당 메서드를 데코레이터로 넘긴다면 해당 this의 컨텍스트가 사라져 참조할 수 없다.
</details>

<details>
  <summary>4. func.call() 메서드는 어떤 기능을 수행하는가</summary>

  해당 함수의 컨텍스트를 명시적으로 설정 후 함수 내용을 실행한다.

  함수 내부에서는 설정된 컨텍스트를 this로 참조할 수 있다.
</details>

<details>
  <summary>5. func.call()과 func.apply()의 차이점</summary>

  1. func.call은 매개변수로 (context, arg1, arg2, ...)를 받는다. 매개변수들을 각각 따로 받는다.
  2. func.apply는 매개변수로 (context, args)를 받는다. 유사 배열 객체로 여러 매개변수를 한번에 받는다.
</details>

<details>
  <summary>6. 콜 포워딩이란?</summary>

  컨텍스트와 함께 인수 전체를 다른 함수에 전달하는 것

  함수 호출을 다른 함수에게 전달시키는것

  호출 대상이 되는 함수를 래퍼 함수에게 전달해 부가적인 기능을 가능케 함
</details>

<details>
  <summary>7. 이터러블하지 않은 유사 배열 객체에서 join 메서드를 사용하게 하는 방법</summary>

  ```js
function hash(){
  return [].join.call(arguments);
}
  ```

유사 배열 객체도 인덱스를 통해 접근할 수 있다는 점과 join의 내부 동작 원리를 결합해 메서드를 빌려서 사용할 수 있다.

이터러블하지 않은 유사 배열 객체에서 join을 직접 호출할 순 없으나, 배열의 join 메서드의 컨텍스트를 유사 배열 객체로 변경 후 메서드를 실행시키게 되어 문제 없이 join이 동작한다.
</details>

<details>
  <summary>8. 데코레이터의 제약사항</summary>

 원본 함수가 가진 프로퍼티는 사용할 수 없다.
</details>
