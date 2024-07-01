원문: https://ko.javascript.info/number

<details>
  <summary>1. JS에서 Number형의 범위</summary>
  
  -2^53 ~ 2^53
</details>

<details>
  <summary>2. 7.3e9의 결과값</summary>
  
  7,300,000,000

  e 왼쪽의 수에 e 오른쪽의 수만큼 10의 거듭제곱을 곱한다
</details>

<details>
  <summary>3. 2e-6의 결과값</summary>
  
  0.000002
</details>

<details>
  <summary>4. 16진수, 2진수, 8진수 표현법</summary>
  
  - 16진수 : 0x
  - 8진수 : 0o
  - 2진수 : 0b
</details>

<details>
  <summary>5. num.toString(base) 메서드의 동작 결과</summary>

  num을 base진법으로 표현한 후, 문자열로 전환
</details>

<details>
  <summary>6. 숫자 1234에 toString() 메서드를 적용시키는 방법</summary>

  1. 1234..toString(2);

  2. (1234).toString(2);

  소수점을 두 개 붙인 것은 1234.toString()을 하면 . 오른쪽을 소수부로 인식해 에러가 발생할 수 있기 때문
</details>

<details>
  <summary>7. 1.2345를 1.23으로 변환하는 방법</summary>

  ```js
  let num = 1.2345;

  Math.floor(num * 100) / 100; // 1.23
  num.toFixed(2); // '1.23' toFixed는 문자열을 반환한다.
  ```
</details>

<details>
  <summary>8. 숫자를 표현하는 방식과 이에 활용되는 메모리</summary>

  64비트 IEEE-754

  
  - 52비트 - 숫자 저장

  - 11비트 - 소수점 위치 저장

  - 1비트 - 부호 저장
</details>

<details>
  <summary>9. 숫자가 Infinity로 표현되는 경우</summary>

  64비트 메모리 공간 내 저장할 수 없는 경우
</details>

<details>
  <summary>10. 정밀도 손실이 발생하는 원인</summary>

  숫자는 2진법을 통해 저장된다.

  따라서 2의 거듭제곱이 아닌 수로 나눠진 수를 2진법에서는 무한소수가 될 수 있어 정확하게 저장할 방법이 없다. 

  IEEE-754에서는 숫자를 반올림하여 이를 해결하나 그 때 발생하는 미세한 정밀도 손실은 그대로 저장되어 0.1 + 0.2 === 0.3 은 false가 된다. 0.1과 0.2를 더할 때 각 수의 정밀도 손실까지도 더해지기 때문이다.
</details>

<details>
  <summary>11. NaN === NaN 비교를 하지 않고 isNaN 함수를 필요로 하는 이유</summary>

  NaN은 자기 자신을 포함하여 그 어떤 값과도 논리 평가에서 참을 반환하지 않기 때문

  ```js
  NaN === NaN; // false
  ```
</details>

<details>
  <summary>12. isFinite() 함수란?</summary>

  인수를 숫자형으로 변환했을 때, NaN / Infinity / -Infinity 가 아닌 일반적인 숫자일 경우 참을 반환
</details>

<details>
  <summary>13. Object.is 가 === 에 비해 이점을 가질 수 있는 케이스</summary>

  1. NaN과 NaN을 비교할 때 Object.is(NaN, NaN)은 true를 반환

  2. 0과 -0이 다르게 취급되어야 할 때. Object.is(0, -0)은 false를 반환
</details>

<details>
  <summary>14. parseInt(), parseFloat(num, radix) 함수의 반환값</summary>

  문자열 num에서 radix진법의 수를 파싱해 반환

  문자열 내에서 불가능할 때까지 숫자를 읽은 후 해당 숫자를 반환

  숫자를 읽어나가다가 불가능한 지점에 도달했을 경우, 이미 읽어온 숫자를 반환

  아무 숫자를 읽지 못했다면 NaN를 반환
</details>

<details>
  <summary>15. Math.random() 함수가 반환하는 수의 범위</summary>

  0에서 1사이 (1은 미포함)
</details>
