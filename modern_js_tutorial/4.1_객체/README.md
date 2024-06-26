원문: https://ko.javascript.info/object

<details>
  <summary>1. 객체와 Map에서 Key값으로 지정할 수 있는 데이터 타입의 차이점</summary>
  객체: 문자열, 심볼만 지정 가능
  
  Map: 모든 데이터 타입 지정 가능
</details>

<details>
  <summary>2. user 라는 객체에 존재하는 age 프로퍼티를 삭제하기 위한 코드</summary>
  delete user.age
</details>

<details>
  <summary>3. 프로퍼티 이름(key)를 따옴표로 묶어줘야 하는 경우는?</summary>
  공백으로 구분된 복수의 단어로 프로퍼티 이름을 작성한 경우
</details>

<details>
  <summary>4. 객체에 변수명을 프로퍼티 이름으로 지정하고 싶을 때 사용하는 방법</summary>
  프로퍼티 이름을 대괄호로 감싸준다.
  
  ``let bag = {
    [fruit]: 5,
  };``
</details>

<details>
  <summary>5. 프로퍼티 이름 지정 시 제약사항은?</summary>
  별도 제약사항이 없다. 하지만 __proto__는 특별히 동작한다.

  for, let, return과 같은 예약어도 사용할 수 있다. 이는 모두 문자열로 변경되어 지정된다.
</details>

<details>
  <summary>6. 객체 내 프로퍼티 존재 여부를 확인하는 키워드</summary>
  in

  "key" in object
</details>

<details>
  <summary>7. for key in object를 통해 객체의 키를 순회할 때의 순회 순서</summary>
  정수 프로퍼티: 오름차순 정렬하여 순회

  그 외 프로퍼티: 객체에 추가한 순서로 순회

  ** 정수 프로퍼티란?

  문자열을 정수형으로 변경 했을 때 변형이 없는 문자열. +49, 1.2 등은 정수 프로퍼티가 아님

  "+49" <-> 49

  "1.2" <-> 1
</details>



