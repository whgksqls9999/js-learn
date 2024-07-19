원문: https://ko.javascript.info/task/array-unique-map

<details>
  <summary>정답</summary>

  ```js
function unique(arr) {
	return Array.from(new Set(arr));
}
  ```
</details>
