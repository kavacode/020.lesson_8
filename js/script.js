/*
Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder = {
  step: 0,
  up: function () {
	 this.step++;
  },
  down: function () {
	 this.step--;
  },
  showStep: function () { // показывает текущую ступеньку
	 alert(this.step);
  }
};
Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().down().showStep(); // 1
*/


let ladder = {
	step: 0,
	up: function () {
		this.step++;
		return this;
	},
	down: function () {
		this.step--;
		return this;
	},
	showStep: function () {
		alert(this.step);
		return this;
	}
};

ladder.up().up().down().showStep();