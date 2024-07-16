원문: https://ko.javascript.info/task/closure-sum

<details>
  <summary>정답</summary>

  ```js
function sum(a) {
	return function (b) {
		return a + b;
	};
}
  ```
</details>
