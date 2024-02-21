/**
 *  Loopholes of Any
//* any타입의 허점
 */

//* TS는 타입과 다른 메서드를 사용 하면 아래와 같이 에러를 던져 준다.
let number: number;
number = 10;

// number.toUpperCase()

//* number타입을 any타입으로 타입단언을 했기때문에
//* 컴파일 전까지 오류가 없는 것으로 보이다 런타임에 에러발생
//! any를 남발하거나 마음대로 타입단언시 생각하지 못한 오류에 빠질수 있음
(number as any).toUpperCase()

//* 함수의 매개변수 타입을 number로 지정하고
const multipleTwo = (x: number, y:number) => {
 return x * y
}

//* 변수에 any 타입으로 설정후, string과 boolean 타입의 값을 할당한후,
let args1: any = '코드팩토리'
let args2: any = true

//? 함수 실행 문에 위 any타입의 값을 넣어도 오류가 발생하지 않는다.
//! 인자로 들어갈 value를 any타입으로 설정하면 매개변수의 타입과 상관없이
//! 어떤 함수의 인자로든 들어갈수 있으며 이또한 생각지 못한 오류에 빠질수 있다.
multipleTwo(args1, args2)

//* any타입은 TS가 추론 할수 없기 때문에 자동완성도 지원지 못한다.
let iu : any = {name: '아이유', age: 30};

//? TS는 "iu"라는 객체에 name이라는 프러퍼티가 있는지 알지 못한다.
//! 자동완성이 지원되지 않는다.
// iu.

// callback 함수를 any타입으로 지정시 위험성
//* callback 함수를 any로 지정
const callbackRunner = (x:number, y:number, callback: any) => {
  return callback(x, y)
}

//* callback 함수가 변경되어도 어떤 오류도 받을수 없다
//!이는 코드를 리팩토링할떄 오류를 알려주지 않기 떄문에 어디가 문제인 알수 없어 위험하다.
const callback = (x: number, y: number) => {
  return x * y
}

console.log(callbackRunner(4, 4, callback))


//!!!! 사용하지 말자 !!!!!

