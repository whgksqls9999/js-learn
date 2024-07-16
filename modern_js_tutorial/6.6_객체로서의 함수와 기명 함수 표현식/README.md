원문: https://ko.javascript.info/function-object

<details>
  <summary>1. 함수에 자동으로 이름을 할당할 수 없을 때 name 프로퍼티의 값</summary>

  빈 문자열이 저장된다

  ```js
  let arr = [function(){}];

  console.log(arr.name); // <빈 문자열>
  ```
</details>

<details>
  <summary>2. 함수의 length 프로퍼티가 반환하는 값</summary>

  함수 매개변수의 개수

  나머지 매개변수는 개수에 포함시키지 않는다.
</details>

<details>
  <summary>3. 기명 함수 표현식 작성법</summary>

  ```js
let sayHi = function say(who){
  console.log('hi `${who}`);
}
  ```
</details>

<details>
  <summary>4. 기명 함수 표현식을 사용했을 때의 이점</summary>

  1. 이름을 사용해 함수 내부에서 자기 자신을 참조할 수 있음
  2. 기명 함수 표현식 외부에서는 해당 이름에 접근할 수 없음
</details>

<details>
  <summary>5. 기명 함수 표현식에서 활용한 이름을 통해 중첩 함수 호출 시, 일반 재귀 함수와 비교했을 때의 이점</summary>

  중첩 함수 호출시, 외부 코드에 의해 함수를 저장하고 있는 변수가 변경되어도 정상적으로 중첩 함수 호출이 가능하다.

  ```js
function hi(name) {
	if (name) {
		console.log(`Hi ${name}`);
	} else {
		hi('Guest');
	}
}

let b = hi;
hi = null;
b(); // hi 함수가 존재하지 않으므로 에러를 발생시킨다.

let say = function aa(name) {
	if (name) {
		console.log(`Hi ${name}`);
	} else {
		say('Guest'); // say 함수 호출
	}
};

let new1 = say;
say = null;
new1(); // say 함수가 null이 되어 else 문의 say('Guest')를 실행시킬 수 없다.

let say = function aa(name) {
	if (name) {
		console.log(`Hi ${name}`);
	} else {
		aa('Guest'); // say를 재귀하지 않고 기명된 이름인 aa를 활용해서 함수 호출
	}
};

let new1 = say;
say = null;
new1(); // say는 null이 되었지만, 중첩 함수인 aa()를 호출하기에 문제없이 호출된다.

  ```
</details>
