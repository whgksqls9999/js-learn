원문: https://ko.javascript.info/task/dictionary-tostring

<details>
  <summary>정답</summary>

Object.create로 객체 생성 시, 프로퍼티 설명자를 추가해 toString 메서드를 추가해준다.

프로퍼티 설명자의 기본값은 일반적으로 false이므로, enumerable: true를 명시해주지 않아도 for ... in 문에서의 순회 대상에서 제외된다.
```js
let dictionary = Object.create(null, {
	toString: {
		value() {
			return Object.keys(this).join();
		},
		enumerable: true,
	},
});
```
</details>
