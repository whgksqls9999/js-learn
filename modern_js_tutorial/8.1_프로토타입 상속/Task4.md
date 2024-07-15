원문: https://ko.javascript.info/task/hamster-proto

<details>
  <summary>정답</summary>

  하위 객체에서 eat 메서드 호출 시, this.stomach을 찾아 거슬러 올라가기 때문
  하위 객체에 stomach 프로퍼티를 두어 메서드 호출 시 프로토타입을 거슬러 올라가지 않게 해야함
</details>
