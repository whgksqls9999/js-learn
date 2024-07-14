원문: https://ko.javascript.info/property-descriptors

<details>
  <summary>1. 플래그란 무엇이고 그 종류는?</summary>

  객체 프로퍼티에 값과 함께 저장되는 특별한 속성.
  프로퍼티에 제약사항을 걸어준다

  1. writable - true이면 값을 수정할 수 있음
  2. enumerable - true이면 반복문을 사용해 나열할 수 있음. false일때는 Object.keys()에서도 나타나지 않음
  3. configurable - true이면 프로퍼티 삭제 및 플래그 수정이 가능함
</details>

<details>
  <summary>2. 프로퍼티 플래그를 얻는 메서드</summary>

  Object.getOwnPropertyDescriptor(obj, propertyName);

  메서드 호출 시 프로퍼티 설명자라 불리는 객체가 반환됨
</details>

<details>
  <summary>3. 프로퍼티 플래그를 수정하는 메서드</summary>

  Object.defineProperty(obj, propertyName, descriptor)

  해당 프로퍼티가 존재하면 플래그 수정, 없다면 해당 플래그 속성을 가진 프로퍼티 생성.
  플래그 정보가 없다면 모든 플래그를 false로 하여 프로퍼티 생성
</details>

<details>
  <summary>4. configurable 플래그를 false로 변경했을 때 만들어내는 제약사항</summary>

  1. configurable 플래그를 수정할 수 없음
  2. enumerable 플래그를 수정할 수 없음
  3. writable 플래그를 false에서 true로 변경할 수 없음. 반대는 가능
  4. 접근자 프로퍼티 get/set을 변경할 수 없음. 새롭게 추가하는 것은 가능함
</details>

<details>
  <summary>5. configurable과 writable의 차이점</summary>

  configurable은 '프로퍼티'의 '삭제'와 '플래그'의 '수정'을 막는 것

  writable은 '프로퍼티'의 '수정'을 막는 것
</details>

<details>
  <summary>6. 프로퍼티 설명자를 전부 가져오는 메서드와 프로퍼티를 플래그와 함께 여러개 정의 할 수 있는 메서드</summary>

  1. Object.getOwnPropertyDescriptors(obj);

  2. Object.defineProperties(obj, {obj1: descriptors1, obj2: descriptors2, ...});
</details>

<details>
  <summary>7. 프로퍼티와 함께 플래그도 복사해 새 객체를 만드는 방법</summary>

  ```js
const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
  ```
  이는 심볼형 프로퍼티를 포함한 프로퍼티 설명자 전체를 복사할 수 있다.
</details>

<details>
  <summary>8. 한 객체 내 프로퍼티 전체를 대상으로 제약사항을 거는 메서드</summary>

  1. Object.preventExtensions(obj) - 프로퍼티 추가 불가능
  2. Object.seal(obj) - 프로퍼티 추가, 삭제 불가능
  3. Object.freeze(obj) - 프로퍼티 추가, 삭제, 수정 불가능
</details>
