원문: https://ko.javascript.info/cookie

<details>
  <summary>1. 쿠키의 저장 방식</summary>

  웹 서버에서 HTTP 응답 헤더의 Set-Cookie에 내용을 적어 전달하면, 브라우저는 이를 저장
</details>

<details>
  <summary>2. 클라이언트단에서의 쿠키 전달 시점</summary>

  쿠키를 만들어 전송해준 웹 서버에 접속(요청)할 때 마다 쿠키 내용을 Cookie 요청 헤더에 넣어 전송
</details>

<details>
  <summary>3. 브라우저에서 쿠키 읽기, 쓰기에 사용되는 접근자</summary>

  document.cookie

  이는 데이터 프로퍼티가 아닌 접근자 프로퍼티이므로 getter, setter의 역할을 한다.
</details>

<details>
  <summary>4. 쿠키에 데이터 추가시 공백 관련 일관성 유지를 위해 인코딩에 쓰이는 내장 함수</summary>

  encodeURIComponent
</details>

<details>
  <summary>5. 쿠키의 제약 사항</summary>

  1. encodeURIComponent를 통해 인코딩된 name=value 쌍의 크기는 4KB를 넘을 수 없다.
  2. 쿠키는 도메인당 최대 20개 까지 저장 가능 - 브라우저마자 상이할 수 있음
</details>

<details>
  <summary>6. 쿠키에 사용가능한 옵션의 종류</summary>

  1. path: 허용 경로를 절대경로로 지정해 해당 경로나 하위 경로에서만 쿠키에 접근할 수 있도록 함. (기본값: 현재 경로)
  2. domain: 쿠키에 접근할 수 있는 도메인을 지정. 도메인을 명시적으로 지정하지 않으면 서브 도메인에서는 해당 쿠키에 접근할 수 없음 (기본값: 현재 도메인)

     ex) site.com 에서 기본값으로 지정한 쿠키는 forum.site.com 에서 접근할 수 없으나 domain=site.com 으로 명시해주면 서브 도메인에서도 접근 가능

  3. expires, max-age: 쿠키의 유효 일자, 만료기간을 지정함.
  4. secure: HTTPS 옵션을 활용할 때만 쿠키 전송이 이뤄지게 함.
  5. samesite

    - strict: 쿠키가 만들어진 도메인이 아니면 절대로 전송되지 않는다.

    - lax: 읽기 작업만 이뤄지는 '안전한 메서드', iframe과 같은 하위 레벨이 아닌 최상위 레벨에서의 탐색일 때만 쿠키를 전송한다.

  6. httpOnly: 웹 서버에서 Set-Cookie 헤더를 통해 지정해주는 옵션으로, 클라이언트 측에서 쿠키에 접근할 수 없도록 함
</details>

<details>
  <summary>7. expires 옵션의 특징</summary>

  1. 유효일자를 이미 지난 일자로 설정하면 쿠키는 삭제된다.
  2. UTC 포맷으로 지정해야하기 때문에 date.toUTCString 메서드를 활용해야 한다.
</details>

<details>
  <summary>8. 세션 쿠키란?</summary>

  expires, max-age가 지정되어있지 않아 브라우저가 닫힐 때 삭제되는 쿠키
</details>

