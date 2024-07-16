원문: https://ko.javascript.info/task/sort-by-field

<details>
  <summary>정답</summary>

  ```js
function byField(standard) {
	return function (a, b) {
		return a[standard] > b[standard] ? 1 : -1;
	};
}
  ```
</details>
