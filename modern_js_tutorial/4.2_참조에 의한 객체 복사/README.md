원문: https://ko.javascript.info/object-copy

<details>
  <summary>1. 객체를 복제할 때 사용할 수 있는 메서드</summary>
  Object.assign(dest, [src1, src2, ...]);

  dest 객체에 src1, src2, ... 객체가 가진 프로퍼티를 모두 추가한다.

  그 과정에서 목표 객체(dest)에 동일한 이름을 가진 프로퍼티가 존재한다면 덮어씌운다.
</details>

<details>
  <summary>2. 위 메서드를 사용했을 때의 단점</summary>
  얕은 복사만 가능해 객체 내 객체 프로퍼티를 복사하면 그 참조 값이 복사된다.

  [Structured cloning algorithm](https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data)을 활용해 깊은 복사 가능
</details>
