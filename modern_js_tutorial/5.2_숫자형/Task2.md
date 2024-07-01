원문: https://ko.javascript.info/task/why-rounded-down

<details>
  <summary>정답</summary>

  정밀도 손실에 의해 6.35로 표시된 값은 실제로는 6.34~~~~ 의 값을 가질 것으로 예상된다.

  따라서 6.35.toFixed(1)을 했을 경우 6.34~~~~의 4에서 반올림을 하기 때문에 6.3을 반환할 것이다.
</details>
