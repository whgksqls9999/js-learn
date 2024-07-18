원문: https://ko.javascript.info/task/delay

<details>
  <summary>정답</summary>

  ```js
function delay(f, ms) {
	return function () {
		setTimeout(() => {
			f.apply(this, arguments);
		}, ms);
	};
}
  ```
</details>
