원문: https://ko.javascript.info/task/make-army

<details>
  <summary>정답</summary>

  해당 환경 레코드에서 i 값은 while문을 따라 순회한 후 10으로 변해있기에 어디서 i를 출력하든 10이 출력된다.

  ```js
function makeArmy() {
	let shooters = [];

	let i = 0; // 3) a가 아닌 i를 출력하게 한다면, 외부 렉시컬 환경 참조를 통해 해당 i 값을 참조할 것이며, i는 항상 마지막 값인 10을 가진다.
	while (i < 10) {
		let a = i; // 2) 함수 shooter가 생성된 시점에서, a 변수는 그 당시의 i 값을 가지게 된다. shooter 함수는 해당 a 값을 참조한다.
		let shooter = function () {
			console.log(a); // 1) i가 아닌 a를 출력하게 한다. shooter 함수에서 외부 렉시컬 환경 참조를 통해 a를 참조한다.
		};
		shooters.push(shooter);
		i++;
	}

	return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
  ```
</details>
