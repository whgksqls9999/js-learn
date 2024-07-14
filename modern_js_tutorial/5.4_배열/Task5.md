원문: https://ko.javascript.info/task/maximal-subarray

<details>
  <summary>정답</summary>

  ```js
function getMaxSubSum(arr){
  let max = 0;
  let partialSum = 0;

  for (let item of arr){
    partialSum += item;
    max = Math.max(max, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return max;
}
  ```
</details>
