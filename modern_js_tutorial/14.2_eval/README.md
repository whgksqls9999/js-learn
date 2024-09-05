원문: https://ko.javascript.info/eval

<details>
  <summary>1. eval의 반환 결과</summary>

  인수로 들어온 문자열 마지막 구문의 결과
</details>

<details>
  <summary>2. 모던 자바스크립트 환경에서 eval을 쓸 때 나타나는 부정적 영향</summary>

  eval 내부에서 외부 지역변수를 참조한다면, 자바스크립트 파일을 압축할 때 참조되는 변수명을 압축할 수 없다.

  해당 변수명을 압축한다면 eval 내부에서 참조하는 지역변수명을 찾을 수 없기 때문. 이는 압축률 저하를 야기한다.
</details>
