원문: https://ko.javascript.info/task/sum-many-brackets

<details>
  <summary>정답</summary>

  ```js
function sum(a) {
	let curSum = a;

	function f(b) {
		curSum += b;
		return f;
	}

	f.toString = function () {
		return curSum;
	};

	return f;
}
  ```
</details>
