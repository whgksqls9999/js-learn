원문: https://ko.javascript.info/task/calculator-constructor

<details>
  <summary>정답</summary>
  
  ```js
  function Calculator(){
    this.read = function(){
      this.a = Number(window.prompt("a", 0));
      this.b = Number(window.prompt("b", 0));
    }

    this.sum = function(){
      return this.a + this.b;
    }

    this.mul = function(){
      return this.a * this.b;
    }
  }
  
  let calculator = new Calculator();
  calculator.read();

  console.log("Sum=" + calculator.sum() );
  console.log("Mul=" + calculator.mul() );

  ```
</details>
