// 원문: https://ko.javascript.info/task/calculator

let calculator = {
  firstValue: 0,
  secondValue: 0,
	sum() {
		return this.firstValue + this.secondValue;
	},
	mul() {
		return this.firstValue * this.secondValue;
	},
  read() {
		this.firstValue = Number(prompt('first: ', 0));
		this.secondValue = Number(prompt('second: ', 0));
	},
};
