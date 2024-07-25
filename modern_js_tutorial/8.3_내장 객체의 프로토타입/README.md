원문: https://ko.javascript.info/native-prototypes

<details>
  <summary>1. 원시값의 프로퍼티에 접근하려 할 때 나타나는 일</summary>

  1. 해당 원시값의 래퍼 객체에 해당하는 임시 래퍼 객체를 생성 (string - String, number - Number, boolean - Boolean)
  2. 생성된 임시 래퍼 객체의 메서드를 사용 (래퍼 객체의 메서드는 프로토타입에 정의되어있다. String.prototype, Number.prototype 등)
  3. 임시 래퍼 객체 사라짐
</details>

<details>
  <summary>2. null, undefined의 경우 프로퍼티와 프로토타입을 사용할 수 없는 이유</summary>

  null, undefined의 경우 래퍼 객체를 가지고 있지 않기 때문
</details>

<details>
  <summary>3. 모던 프로그래밍에서 네이티브 프로토타입의 변경을 자제하는 이유와 변경이 허용되는 경우</summary>

  1. 네이티브 프로토타입을 변경하면 전역에 영향을 미칠 수 있다. 다른 곳에서 변경된 메서드를 또 다른 곳에서 덮어씌우면 문제가 발생할 수 있다.
  2. 변경이 허용되는 경우는 폴리필을 작성할 때
</details>

<details>
  <summary>4. 내장 객체의 규칙</summary>

  1. 메서드는 해당 내장 객체의 프로토타입에 저장
  2. 내장 객체 자체에는 데이터만 저장한다. (배열 요소, 객체 프로퍼티, 날짜 등)
</details>
