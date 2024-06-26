// 원문: https://ko.javascript.info/task/object-property-this

// 오답
user가 출력된다. 
자바스크립트에서의 this는 런타임(해당 this가 호출됐을 때)에 결정되기 때문 

// 정답
this는 undefined가 되어 에러가 발생한다.
this가 호출된 부분이 객체의 메서드가 아니라 함수로써 호출됐기 때문
this가 객체를 가리키게 하기 위해서는 this를 호출하는 부분을 메서드로 바꿔줘야 한다

function makeUser(){
  return {
    name: "John",
    ref() {
      return this; // 해당 this는 메서드로 호출되기에 객체를 가리키게 된다.
  }
}
