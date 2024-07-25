원문: https://ko.javascript.info/class

<details>
  <summary>1. 클래스란</summary>

  객체 지향 프로그래밍에서 객체 생성을 위해 변수, 메서드를 정의하는 틀
</details>

<details>
  <summary>2. 클래스 작성 문법을 통해 클래스 작성 시 벌어지는 내부 동작</summary>

  1. 해당 클래스명을 이름으로 가진 함수를 만든다.
  2. 해당 함수의 본문에는 생성자 메서드인 constructor()에서 가져온다 - constructor에서 정의한 프로퍼티는 프로토타입이 아닌 객체에 저장된다. 이는 생성자 함수와 동일
  3. 클래스 내에 정의한 메서드는 ${class명}.prototype 에 저장된다.
</details>

<details>
  <summary>3. 생성자 함수와 클래스의 차이점</summary>

  메서드 저장 위치
  
  1. 생성자 함수로 생성한 객체는 메서드가 해당 객체 자체에 저장된다.
  2. 클래스로 생성한 객체는 메서드가 해당 객체의 프로토타입에 저장된다.


  [[IsClassConstructor]]
  1. 클래스는 숨김 프로퍼티인 [[IsClassConstructor]]이 true값을 가짐
  2. 이 값은 클래스 생성자를 new 키워드와 함께 쓰지 않으면 에러를 발생시키는데 사용
  3. 클래스 생성자를 문자열로 형 변환시 class User 와 같이 나오는데 이 때도 위 값 사용


  enumerable
  1. 클래스에 정의된 메서드는 enumerable 플래그가 false 값을 가져 순회시 대상에서 제외


  엄격 모드
  1. 클래스 생성자 내부의 코드는 모두 엄격 모드로 실행됨
</details>

<details>
  <summary>4. 클래스 필드 정의 시 해당 클래스 필드의 저장 위치</summary>

  클래스의 프로토타입이 아닌 객체 자체에 필드값을 가지게 됨
</details>
