원문: https://ko.javascript.info/task/counter-inc-dec

<details>
  <summary>정답</summary>

  ```js
  // 함수 프로퍼티 활용
  function makeCounter() {
    
    function counter(){
      return counter.count++;
    }
    counter.count = 0;
    counter.set = function(value){
      counter.count = value;
    }
    counter.decrease = function(){
      counter.count--;
    }
    return counter;
  }

// 클로저 활용
function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	}

	counter.set = function (value) {
		count = value;
	};

	counter.decrease = function () {
		count--;
	};

	return counter;
}
  ```
</details>
