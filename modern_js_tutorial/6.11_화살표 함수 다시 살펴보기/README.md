원문: https://ko.javascript.info/arrow-functions

<details>
  <summary>1. 화살표 함수를 인수로 넘겼을 때의 이점</summary>

  함수를 인수로 넘기면 일반적으로 컨텍스트를 잃지만, 화살표 함수는 그렇지 않다.

  화살표 함수는 자체적인 this를 가지지 않기 때문이다.
</details>

<details>
  <summary>2. 화살표 함수를 new 키워드와 함께 실행할 수 없는 이유</summary>

  new 키워드를 활용한 생성자 함수는 this를 활용해야하지만 화살표 함수는 this를 가지지 않는다.
</details>

<details>
  <summary>3. 화살표 함수와 일반 함수를 bind를 사용해 호출하는 것의 차이점</summary>

  1. bind를 활용하면 this를 하나의 대상에 고정시킬 수 있다.
  2. 화살표 함수는 this가 없어 this를 찾기 위해 외부 렉시컬 환경을 거슬러 올라간다.
</details>

<details>
  <summary>4. 화살표 함수와 일반 함수의 차이점</summary>

  1. 화살표 함수는 this를 가지지 않는다.
  2. 유사 배열 객체인 arguments가 없다.
  3. new와 함께 호출할 수 없다.
</details>

<details>
  <summary>5. 시간 지연 기능을 갖춘 데코레이터 작성 시 일반 함수, 화살표 함수를 활용했을 때의 차이점</summary>

  setTimeout의 콜백함수가 화살표 함수인 경우 this, arguments를 사용해 래퍼 함수의 this와 arguments를 그대로 가져와 쓸 수 있다.

  일반 함수인 경우 this, arguments를 활용하면 setTimeout 내 콜백 함수의 this와 arguments를 활용하기에 예기치 않은 동작을 할 수 있다.

```js
// 화살표 함수
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms) // this, arguments는 return되는 래퍼 함수에서부터 가져온다
  };
}

// 일반 함수
function defer(f, ms){
  return function (...args){ // args를 명시적으로 받아줘야 한다.
    let ctx = this; // this를 setTimeout 외부에서 미리 저장해야 한다.
    setTimeout(function(){
      return f.apply(ctx, args);
    }, ms):
  }
}
```
</details>
