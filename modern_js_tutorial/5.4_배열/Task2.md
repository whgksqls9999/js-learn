원문: https://ko.javascript.info/task/create-array

<details>
  <summary>정답</summary>

  ```js
const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classics';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');
  ```
</details>
