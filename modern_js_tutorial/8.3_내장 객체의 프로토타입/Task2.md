원문: https://ko.javascript.info/task/defer-to-prototype-extended

<details>
  <summary>정답</summary>

```js
Function.prototype.defer = function (ms) {
	let cur = this;
	return function (...args) {
		setTimeout(() => cur.apply(this, args), ms);
	};
};

```
</details>
