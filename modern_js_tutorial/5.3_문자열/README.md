원문: https://ko.javascript.info/string

<details>
  <summary>1. 자바스크립트의 문자열 인코딩 방식</summary>

  UTF-16
</details>

<details>
  <summary>2. charAt과 []를 활용해 문자열 내 특정 위치 문자를 가져올때의 차이점</summary>

  charAt은 반환할 문자가 없을 때 빈 문자열을 반환

  []는 반환할 문자가 없을 때 undefined를 반환
</details>

<details>
  <summary>3. 반환값이 없을 때 indexOf의 반환값</summary>

  -1
</details>

<details>
  <summary>4. 비트 NOT 연산자(~) 의 동작 과정</summary>
  
  1. 피연산자를 32비트 정수로 바꿈 (소수부는 버림)

  2. 그 후 모든 비트를 반전시켜 반환

  ~n = -(n + 1)
</details>

<details>
  <summary>5. slice 메서드에 인수로 음수를 넘겼을 때 동작 방식</summary>

  문자열 뒤쪽에서부터 인덱스를 카운팅한다

  ```js
  let str = "stringify";
  console.log( str.slice(-4, -1) ); // gif
  ```
</details>

<details>
  <summary>6. slice와 substring의 차이점</summary>

  1. substring은 음수를 인수로 받지 않는다

  2. substring은 start 인수가 end 인수보다 커도 된다.
</details>

<details>
  <summary>7. substr 메서드의 반환값</summary>

  해당 문자열의 start 인덱스부터 length개의 문자를 반환한다.

  음수 인수를 받아 뒤쪽에서부터 카운팅할 수 있다.
</details>

<details>
  <summary>8. 문자의 코드를 가져오거나 코드를 바탕으로 문자열을 반환하는 함수</summary>

  1. String.fromCodePoint()
  2. str.codePointAt();
</details>

<details>
  <summary>9. localCompare의 비교 기준</summary>

  ECMA-402에서 정의한 규칙

  ```js
  str.localCompare(str2);
  ```
  str이 str2보다 앞선다면 -1
  str과 str2가 동등하다면 0
  str이 str2보다 뒤에있다면 1
</details>
