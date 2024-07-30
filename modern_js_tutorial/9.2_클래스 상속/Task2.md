원문: https://ko.javascript.info/task/clock-class-extended

<details>
  <summary>정답</summary>

```js
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
```
  
</details>
