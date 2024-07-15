원문: https://ko.javascript.info/property-accessors

<details>
  <summary>1. 객체 프로퍼티의 종류</summary>

  데이터 프로퍼티 : 객체에 저장되는 일반적인 프로퍼티

  접근자 프로퍼티 : 본질은 값을 획득하고 설정하는 역할을 하는 함수(get, set). 외부 코드에서는 함수가 아닌 일반적 프로퍼티처럼 보인다.
</details>

<details>
  <summary>2. getter, setter의 동작 시점</summary>

  getter: obj.propName에 접근하려 할 때

  setter: obj.propName = 'newPropName' 으로 프로퍼티에 값을 할당할 때
</details>

<details>
  <summary>3. 데이터 프로퍼티와 접근자 프로퍼티의 설명자 관련 차이점</summary>

  데이터 프로퍼티: value, writable, enumerable, configurable

  접근자 프로퍼티: get, set, enumerable, configurable
</details>
