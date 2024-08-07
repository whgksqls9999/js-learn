원문: https://ko.javascript.info/weakmap-weakset

<details>
  <summary>1. 위크맵의 키가 가지는 특징</summary>

  위크맵은 키로 객체만을 저장할 수 있으며 키로 쓰인 객체가 가비지 컬렉션의 대상이 된다.

  키로 쓰인 객체를 참조하는 것이 아무것도 없다면 해당 객체는 메모리와 위크맵에서 제거된다.
</details>

<details>
  <summary>2. 위크맵과 맵의 차이점</summary>

  1. 위크맵은 키로 쓰인 객체가 가비지 컬렉션의 대상이 될 수 있다.
  2. 위크맵은 반복 작업, keys, values, entries 메서드를 사용할 수 없다.
</details>

<details>
  <summary>3. 위크맵에서 지원하는 메서드의 종류가 맵과 비교했을때 적은 이유</summary>

  위크맵에서 키로 쓰인 객체는 가비지 컬렉션에 의해 언제든지 사라질 수 있어야 한다.

  하지만 가비지 컬렉션의 동작 시점을 예측할 수 없기에 언제든 사라질 수 있는 키를 대상으로 동작하는 메서드를 가질 수 없다.
</details>

<details>
  <summary>4. 위크맵의 활용예</summary>

  외부에서 가져온 객체에 추가 정보를 넣고 싶으나, 해당 정보는 객체가 살아있을 때만 필요로 한다.

  이럴 경우 해당 객체를 키로 하고 추가 정보를 밸류로 하여 위크맵에 저장시켜 두면 객체가 사라지면 해당 정보도 사라지게끔 할 수 있다.

  캐싱 등
</details>
