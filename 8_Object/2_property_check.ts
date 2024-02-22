/**
 * Property Check 
 //* 초과 속성 검사의 작동원리
 //? 초과속성 검사: 프로퍼티를 초과시 어떻게 검사할 것인지
 */
type TName = {
  name: string;
}

type TAge = {
  age: number;
}

//* TName에 age 프러퍼티가 없기 때문에 오류
// const iu1 : TName = {
//   name: '아이유',
//   age: 30,
// }

//* TAge에 name 프러퍼티가 없기 때문에 오류
// const iu2 : TAge = {
//   name: '아이유',
//   age: 30,
// }

const iu = {
  name: '아이유',
  age: 30,
}

//? 위에서는 오류가 났지만 아래서 할당 할떄는 오류가 나지 않는다?
//* iu의 할당 당시에는 "초과 속성"이 허락이 되지 않는다.
//! 단, 이미 선언되어 있는 변수를 다른 변수에 할당하게 될때는 TS는 객체의 타입을 보게 되고
//! 내로잉을 했다고 판단하고 초과되는 속성이 있어도 할당이 가능하게 된다.
//!!!! 초과 속성 검사는 객체 리터럴를 직접 할당 할때만 작동 한다. !!!!!!
const testName: TName = iu;
console.log(testName)
const testAge: TAge = iu;
console.log(testAge)