원문: https://ko.javascript.info/task/defer-to-prototype

<details>
  <summary>정답</summary>

  네이티브 프로토타입에 메서드를 추가해준다.

  this는 런타임에 동적으로 결정되기에, 호출 시 f.defer() 메서드 호출의 주체인 f가 this가 된다.
```js
Object.prototype.defer = function (ms) {
	setTimeout(this, ms);
};
```
  
</details>
