원문: https://ko.javascript.info/prototype-methods

<details>
  <summary>1. 프로토타입을 다루는 모던한 메서드</summary>

  1. Object.create(proto, [descriptors]) - [[Prototype]]이 proto인 빈 객체 생성. 설명자 추가 가능
  2. Object.getPrototypeOf(obj) - obj의 [[Prototype]] 반환
  3. Object.setPrototypeOf(obj, proto) - obj의 [[Prototype]]을 proto가 되도록 설정
</details>

<details>
  <summary>2. __proto__가 없는 객체를 만드는 방법</summary>

```js
  let obj = Object.create(null);
```

프로토 타입을 가지고 있지 않아 getter, setter인 __proto__를 상속받지도 않는다.

따라서 키가 __proto__인 프로퍼티를 자유롭게 활용할 수 있다.
</details>
