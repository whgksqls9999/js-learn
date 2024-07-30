원문: https://ko.javascript.info/class-inheritance

<details>
  <summary>1. class A를 class B가 상속받는다 했을 때의 프로토타입 관계</summary>

  B.prototype의 [[Prototype]]은 A.prototype이 된다.
</details>

<details>
  <summary>2. 조건에 따라 다른 클래스를 상속받게 할 수 있는 문법</summary>

  extends 뒤에 표현식을 사용한다.

```js
function f(){
  return class {
    sayHi() { console.log('hi') }
  }
}

class User extends f();
```
</details>

<details>
  <summary>3. super 키워드의 활용</summary>

  1. super.method() - 부모 메서드 사용
  2. super() - 부모 생성자 사용
</details>

<details>
  <summary>4. 클래스가 다른 클래스를 상속받고, constructor를 정의하지 않을 때 일어나는 일</summary>

아래 constructor를 자동으로 생성
```js
constructor(...args){
  super(...args);
}
```
</details>

<details>
  <summary>5. 일반 클래스 생성자 함수와 상속 클래스 생성자 함수의 차이</summary>

  1. 상속 클래스 생성자 함수는 [[ConstructorKind]]: "derived" 숨김 프로퍼티를 가진다
  2. new 키워드 사용시 일반 클래스 생성자 함수는 빈 객체를 만들고 여기서 this를 할당 / 상속 클래스 생성자 함수는 이를 부모 클래스 생성자 함수가 할 것이라고 생각. 따라서 this 호출 전, super()를 호출해줘야함
</details>

<details>
  <summary>6. 클래스 필드 초기화 순서</summary>

  1. 아무것도 상속 받지 않은 클래스: 생성자 실행 이전에 초기화
  2. 상속받은 클래스: 부모 생성자 호출 직후 초기화
</details>

<details>
  <summary>7. 필드 오버라이딩시 제대로 오버라이딩이 일어나지 않은 것처럼 보이는 상황</summary>

  부모 클래스의 생성자 함수에서 필드에 접근할 때, 상속 클래스 생성 시 super() 호출 직후 
</details>

<details>
  <summary>8. 객체의 프로토타입에서 메서드를 찾는 접근 방식</summary>

  this.__proto__를 통해 접근하지 않고 [[HomeObject]]를 활용한다.

  첫번째 방식은 call을 활용한 메서드에서 컨텍스트가 고정됐을 때 프로토타입을 찾는 과정이 올바르지 않을 수 있다.
</details>

<details>
  <summary>9. [[HomeObject]]란? </summary>

  클래스나 객체의 메서드인 함수는 [[HombObject]]에 해당 객체가 저장된다.

  super는 [[HomeObject]]를 활용해 상위 프로토타입과 메서드를 찾는다.
</details>

<details>
  <summary>10. 함수 프로퍼티와 메서드의 차이점</summary>

  함수 프로퍼티의 경우에는 [[HombObject]]가 정의되지 않아 해당 함수 내부에서 super를 호출하면 에러가 발생된다.

  [[HomeObject]]를 활용하기 위해서는 메서드 형태로 작성해야한다.
</details>
