원문: https://ko.javascript.info/task/filter-anagrams

<details>
  <summary>정답</summary>

  ```js
function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}
  ```
</details>
