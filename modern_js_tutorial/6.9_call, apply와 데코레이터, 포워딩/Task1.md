원문: https://ko.javascript.info/task/spy-decorator

<details>
  <summary>정답</summary>

  ```js
function spy(func) {
	function wrapper() {
		wrapper.calls.push([...arguments]);
		func(...arguments);
	}

	wrapper.calls = [];

	return wrapper;
}
  ```
</details>
