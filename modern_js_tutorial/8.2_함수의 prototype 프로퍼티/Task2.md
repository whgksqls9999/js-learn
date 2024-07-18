원문: https://ko.javascript.info/task/new-object-same-constructor

<details>
  <summary>정답</summary>

  가능하다. obj.constructor은 obj의 프로토타입으로 거슬러 올라가 찾을 수 있다. (obj.__proto__.constructor)

  따라서 생성자 함수를 실행시키는 것과 같은 기능을 해 정상적으로 객체가 생성된다.


  ```js
function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined
  ```

  
</details>
