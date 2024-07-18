원문: https://ko.javascript.info/task/changing-prototype

<details>
  <summary>정답</summary>

  1. 이미 생성자 함수로 객체를 생성한 이후로 프로토타입을 변경했기에 정상적으로 true가 출력된다.
  2. 프로토타입 상속으로 받은 프로퍼티이므로 프로토타입을 참조해 해당 변수 값을 출력한다. false
  3. rabbit에는 eats 프로퍼티가 존재하지 않는다. rabbit.eats는 true가 출력된다.
  4. 프로토타입의 프로퍼티가 제거됐으므로 프로토타입 객체의 상속으로 해당 프로퍼티에 접근할 수 없다. undefined
</details>
