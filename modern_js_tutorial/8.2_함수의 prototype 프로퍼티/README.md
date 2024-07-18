원문: https://ko.javascript.info/function-prototype

<details>
  <summary>1. 생성자 함수로 객체 생성시 프로토타입의 결정</summary>

  생성자 함수의 프로토타입이 객체일 경우 해당 정보를 사용해 [[Prototype]]을 설정

  생성자 함수의 prototype 프로퍼티에 객체를 지정하면 해당 객체가 [[Prototype]]이 된다.
</details>

<details>
  <summary>2. 함수의 디폴트 프로퍼티인 prototype이 가리키는 것</summary>

  prototype을 지정해주지 않아도 함수는 모두 prototype 프로퍼티를 가진다.

  해당 prototype은 자기 자신을 가리키는 constructor 프로토타입을 가지는 객체를 가리킨다.

  Rabbit.prototype --- > { constructor: Rabbit }
</details>

<details>
  <summary>3. prototype에 프로퍼티를 추가할 때, prototype 전체를 덮어씌우지 말고 프로퍼티를 직접 추가해줘야 하는 이유</summary>

  모든 함수는 디폴트 프로퍼티로 prototype을 가지고 해당 프로토타입에는 함수 자신을 가리키는 constructor 프로퍼티를 기잔다.

  해당 값의 손실을 피하기 위해 prototype = { key: value } 가 아닌 prototype.key = value 형식으로 프로퍼티를 추가해줘야 한다.

  혹은 덮어씌우더라도 constructor 프로퍼티를 다시 만들어줘야 한다.
</details>
