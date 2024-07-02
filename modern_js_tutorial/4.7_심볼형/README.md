원문: https://ko.javascript.info/symbol

<details>
  <summary>1. 심볼은 언제 사용할까</summary>

  유일한 식별자를 만들고 싶을 때 사용.

  설명이 같은 심볼이라고 해도 두 심볼은 다른 값을 가진다

  ```js
  let id = Symbol('id');
  let id2 = Symbol('id');
  console.log(id == id2); // false
  ```
</details>

<details>
  <summary>2. 심볼을 출력하는 방법</summary>

  심볼은 문자열로 암시적 형 변환이 이뤄지는 것을 막고있기 때문에 toString() 메서드를 사용해야함

  심볼의 설명을 출력하기 위해선 symbol.description 프로퍼티에 접근하면 됨
</details>

<details>
  <summary>3. 심볼의 활용</summary>

  객체에 숨김 프로퍼티를 추가해 식별자로 사용할 수 있다.

  ```js
  let user = {};
  let id = Symbol('id');
  user[id] = '000';
  ```

  심볼은 유일한 값을 가지기 때문에 A 환경에서 user 객체에 심볼로 숨김 프로퍼티를 만들었을 때,

  다른 환경에서 해당 심볼값으로 숨김 프로퍼티에 접근할 수 없다.
</details>

<details>
  <summary>4. 객체 리터럴로 객체 생성 시 심볼을 키로 사용하는 방법</summary>

  심볼을 대괄호로 감싸서 사용한다.

  ```js
  let id = Symbol('id');
  let user = {
    name: "John",
    [id]: 123,
  }
  ```
</details>

<details>
  <summary>5. 객체 순회와 관련해서 심볼이 가지는 특징</summary>

  심볼은 for ... in 에서 배제된다.

  Object.keys(object) 에서 배제된다.

  Object.assign 에서는 배제되지 않는다.
</details>

<details>
  <summary>6. 유일한 값인 심볼을 전역에서 사용할 수 있게 하는 방법</summary>
  
  Symbol.for(key)를 활용한다.

  Symbol.for(key)는 전역 심볼 레지스트리에 이름이 key인 심볼을 반환하되, 해당 심볼이 존재하지 않으면 심볼을 생성한 후 레지스트리에 저장한다.

  ```js
  let id = Symbol.for('id'); // 새로운 심볼을 생성함

  let idAgain = Symboel.for('id'); // 이미 생성된 심볼에 접근함

  console.log(id === idAgain); // true. 두 심볼은 같은 값을 가짐
  ```
</details>

<details>
  <summary>7. 심볼을 활용해 이름을 찾는 메서드</summary>

  Symbol.keyfor(sym);

  전역 심볼 레지스트리에서 입력된 심볼의 이름을 찾는다.

  전역 심볼 레지스트리에 등록되어 있지 않다면, undefined를 반환한다.

  ```js
  let sym = Symbol.for('id');

  console.log(Symbol.keyfor(sym)); // id
  ```
</details>

<details>
  <summary>8. 시스템 심볼에 접근하는 방법</summary>

  Symbol.*
</details>

<details>
  <summary>9. 객체 내 심볼을 확인할 수 있는 메서드</summary>

  ```js
  Object.getOwnPropertySymbols(obj) // 객체 내 모든 심볼 확인

  Reflect.ownKeys(obj) // 심볼형 키를 포함한 객체의 모든 키 반환
  ```
</details>


