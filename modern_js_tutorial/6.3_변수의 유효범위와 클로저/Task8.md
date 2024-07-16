원문: https://ko.javascript.info/task/filter-through-function

<details>
  <summary>정답</summary>

  ```js
function inBetween(a, b) {
	return function (x) {
		return x >= a && x <= b;
	};
}

function inArray(arr) {
	return function (x) {
		return arr.includes(x);
	};
}

  ```
</details>
