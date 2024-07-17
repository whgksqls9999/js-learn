원문: https://ko.javascript.info/task/output-numbers-100ms

<details>
  <summary>정답</summary>

```js
// 중첩 setTimeout
function printNumbers(from, to) {
	let timer = setTimeout(
		function tick(n) {
			console.log(n);
			if (n === to) return;
			timer = setTimeout(() => tick(n + 1), 1000);
		},
		1000,
		from
	);
}

// setInterval
function printNumbers(from, to) {
	let num = from;

	let timer = setInterval(() => {
		if (num === to) {
			clearInterval(timer);
		}
		console.log(num++);
	}, 1000);
}
```
  
</details>
