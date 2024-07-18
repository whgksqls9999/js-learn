원문: https://ko.javascript.info/task/debounce

<details>
  <summary>정답</summary>

```js
function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}
```
  
</details>
