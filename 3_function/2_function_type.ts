/**
 * Function Type
 */

const runner = () => {
  return ["안유진", "장원영", "레이"].map((x) => `아이브 멤버: ${x}`);
};

console.log(runner());

//* 위와 같은 상황에서 반환값의 함수를 매개변수로 받고 싶을 경우 함수 시그니처를 type을 선언할수 있다.

type Mapper = (x: string) => string;

const runner2 = (callback: Mapper): string[] => {
  return ["안유진", "장원영", "레이"].map(callback);
};

//* type으로 선언한 Mapper의 정의된 함수 타입에 맞는 함수를 콜백인자로 넘겨야 한다.
console.log(runner2((x1) => `아이브 멤버: ${x1}`));

//! 정의된 함수 타입이 틀리면 에러가 출력된다.
// console.log(runner2((x1) => 1))

//------------------------------

//* 선언하는 함수를 타입으로 제안 하고 싶은 경우
type MultiplyTwoNumber = (x: number, y: number) => number;

//* 함수 시그니처를 type으로 선언하여 사용하면 타입을 따로 설정 하지 않아도 타입이 추론된다.
//? 왜? -> 타입으로 정의된 함수와 같은 함수를 정의하겠다고 선언 했으니까.
const mulitplyTwoNumber: MultiplyTwoNumber = (x, y) => {
  return x + y;
};

/** 
 * Interface로 함수 타입 선언하기
//! 절대 interface로 함수를 선언하지마라 !!!
 */

//? 함수타입 정의시 type과 interface의 차이
//* type : (arg:type, arg:type) => returnType;
//* interface : (arg:type, arg:type): returnType;

interface IMultiplyTwoNumbers{
  (x: number, y: number): number;
}

const mulitplyTowNumbers3: IMultiplyTwoNumbers = (x, y) => {
  return x * y
}