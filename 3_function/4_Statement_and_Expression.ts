/**
 * Statement and Expression
//* ts 관점에서의 문장과 표현식
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// expression(표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

//? TS에서 둘의 차이 비교

//* 문장으로 함수 선언문을 선언시 모두 선언 해야 한다.

function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x + y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}


//* 표현식으로 위은 선언문을 선언했을떄는.. ?
//! type선언으로 함수 타입을 정의 하고 변수명만 바꿔서 해당 타입으로 재사용 할수 있다.
//! 즉, 일일이 타입선언을 해주지 않아도 된다!

//TODO 변수명,타입명 지을떄 고려 사항
//?연사기 타입은 타입이다 => 그렇기 떄문에 "CalculationType"의 Type은 불용어 이다.
//* => 그렇기 때문에 겹치는 불용어는 변수명으로 사용하지 않는게 좋다.
//* 변수명을 줄일수 있음 맥락이 틀리지 않는 선에서 줄이는 것이 좋다. CalculationType => Calc

type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function (x, y) {
  return x + y;
};

const subtract2: CalculationType = function (x, y) {
  return x - y;
};

const multiply2: CalculationType = function (x, y) {
  return x * y;
};

const divide2: CalculationType = function (x, y) {
  return x / y;
};

//!! 결론 !!
//* 문장 보다는 type을 선언하고 표현식으로 표현 하는게 훨씬 유리하다.