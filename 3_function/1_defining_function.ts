/**
 * Defining Function
//* 함수 기본기 - TS의 함수 작동원리, 요소
 */

// JS의 함수 선언
//* - 매개변수에 타입선을 하지 않으면 암묵적으로 'any'타입으로 추론
// function printName(name){
//   console.log(name)
// }

//* 매개변수 타입선언
function printName(name: string) {
  console.log(name);
}

//----------------------------------------------------------

// 매개변수의 설정과 타입선언
function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 사귀고 있습니다.`;
}

// 1
//* 함수의 매개변수에 인자2개의 타입을 스트링으로 받겠다고 설정시 옵셔널로(=?) 표기하지 않는 이상 무조건 2개의 인자가 들어와야 한다.
//* 그렇지 않을시 에러메세지가 출력 된다.
// console.log(returnTwoCouples())
// console.log(returnTwoCouples('아이유'))
// console.log(returnTwoCouples('아이유','코드팩토리','레드벨벳'))

//2
//* 함수 선언시 설정한 타입을 지켜주지 않아도 에러가 출력된다. 이는 타입을 잘못 입력하는것을 막아준다.
// console.log(returnTwoCouples(1,2))

//3
//* 정상적으로 stringType의 인자가 2개 입력되면 에러가 사라짐
console.log(returnTwoCouples("아이유", "코드팩토리"));

/**
 * Optional paramenter
 */

// 옵셔널 지정
//* 옵셔널(=?)로 지정시 옵셔널로 지정된 매게변수를 재외할수 있다.
//! 옵셔널로 지정된 "y"의 타입은 "number | undefined" 이기 떄문
function mulitplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}

console.log(mulitplyOrReturn(10, 20));
console.log(mulitplyOrReturn(10));

/**
 * 기본값 매개변수
 */

// 기본값 매개변수 지정
function mulitplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}

//* 매개변수의 기본값이 설정되면 인자가 부족해도 에러가 출력 되지 않는다.
//! 인자 전달시 인자가 절달 되지 않으면 기본값으로 설정된 "20"이 인자로 전달 된다.
console.log(mulitplyOrReturn2(10));
console.log(mulitplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */

//!나머지 매개변수(=...)의 타입은 배열 형식으로 설정 되어야 한다.
// function getInfiniteParameters(...args:string){}

function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters("아이유", "아이브", "블랙핑크"));

/**
 * Return Type
 */

//1
//* TS의 return 추론
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

//! 매개 변수의 타입이 모두 number로 지정되어 있기 때문에 리턴 타입은 "(x: number, y: number): number"로 추론된다.
addTwoNumbers(10, 20);

//2
function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}

//! 값이 숫자타입과 스트링리터럴 타입의 '랜덤'으로 추론될 떄는 유니언으로 return값이 설정 된다.
//! = randomNumber(): 10 | "랜덤"
randomNumber();

// ---------------------

// 직접적인 반환타입 명시
//* 반환 타입으로 number를 설정하고 내부에서 어떠한 값도 반환하지 않지 않으면 에러가 발생
//! 반환 타입을 명시적으로 설정했다면 반드시 값이 반환 되어야 한다.
// function subtractTwoNumber(x:number, y:number):number{}

//* 만약 반환 값이 명시된 타입과 틀릴 경우 에러가 발생한다.
// function subtractTwoNumber(x: number, y: number): number {
//   return '이게 반환되니?';
// }

//* return을 생성하여 반환값을 명시하면 에러가 사라진다.
function subtractTwoNumber(x: number, y: number): number {
  return x - y;
}

/**
 * Arrow function
 */

//* 화살표 함수도 리턴값의 타입을 명시할 때 function과 같이 설정 해주면 된다.
const subtractTwoNumberArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 */

//void : 아무것도 없다.
//* 반환값이 없을시 타입 명시 - void
function doNotReturn():void{
  console.log('저는 반환을 하지 않습니다.')
}

//* 만약 반환값을 void로 설정후 반환하면 에러가 출력된다.
// function doNotReturn2():void{
//   return 3;
// }

//* return을 명시하고 값을 반환하지 않는다면 에러가 출력되지 않는다.
function doNotReturn3():void{
  return;
}

//* 실행시 반환 타입도 void로 출력된다.
doNotReturn()


//never : 어떤값도 저장되거나 반환되지 않을때 사용
//* 반환타입이 never가 되려면 반환하는 상황 자체가 생기면 안된다.
//! 즉, 함수가 끝나지 않는 상태를 만들어야 한다.

//1
//* throwError함수에 while문이 true이기 떄문에 함수를 실행하면 함수가 끝나지 않고 무한으로 실행 된다.
function neverEndingLoop(): never{
  while(true){

  }
}

//2
function throwError():never{
  throw Error()
}

