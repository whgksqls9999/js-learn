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
