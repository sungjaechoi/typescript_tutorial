/**
 * type Predicate(:술어) = 사용자 정의 타입가드
//* 어떤 변수또는 반환값이 특정 type인지 아닌지 구분하는 경우가 많다.
//? type을 구분하는 기능만 따로 만들어 놓은 함수가 type Predicate 이다.
//!! if문을 통해서 정확한 타입으로 확인 할수 있다.
 */

// number Type을 구분하는 함수 정의 = "type Predicate"
//* 1. 인자로 무엇이 들어올지 모르기 때문에 "any"를 타입으로 지정
//* 2. return에서 인자가 숫자 타입인지 확인 하기 위해 typof로 인자를 비교한다.
//! 3. 함수의 반환값 타입지정 => 매개변수이름 is Type 형식으로 작성 한다.
function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10)); // true

//! type predicate의 사용 이유?
//* type Predicate 사용 하지 않은 함수 선언
function isNumberRetBool(input: any): boolean {
  return typeof input === "number";
}

//* number에 any 타입으로 설정
let number: any = 10;

//* number를 any타입으로 지정 했기 때문에 number의 타입은 any로 추론된다.
if (isNumberRetBool(number)) {
  number;
}

//? type predicate를 사용한 함수에서 any타입이 설정된 number의 타입을 확인하면
//! number는 number type으로 추론 된다.
if (isNumber(number)) {
  number;
}


//객체의 타입을 확인할수 있는 type predicate

interface Doge{
  name : string;
  age : number;
}

interface Cat{
  name: string,
  breed: string
}

type DogeOrCat = Doge | Cat;


//Doge타입을 확인하는 type Predicate선언
function isDoge(animal: DogeOrCat):animal is Doge{
  //? 타입단언을 사용하는 이유 
  // 인자로 DogeOrCat의 타입이 선언된 변수을 가져온다
  //* 현재 타입은 Doge 또는 Cat(DogeOrCat) 이기 때문에 서로 다른 프러퍼터인 age, breed에 접근할수 없다.
  // return animal.
  //! 매개변수 animal에 age가 있는지 확인하기 위해서 인자 animal의 타입을 Doge타입으로 단언하고 age의 프러퍼티에 접근하고
  //! 해당 인자가 age를 가지고 있는지 확인한다.
  return (animal as Doge).age !== undefined
}

const dogeOrcat: DogeOrCat = Math.random() > 0.5 ? {
  name : '도지',
  age : 32
} : {
  name : '오리',
  breed: '코리안 숏컷'
}

if(isDoge(dogeOrcat)){
  dogeOrcat;
}else{
  dogeOrcat;
}

//? TEST
const doge: DogeOrCat = {
  name : '도지',
  age : 32
}

const cat : DogeOrCat = {
  name : '오리',
  breed: '코리안 숏컷',
}


if(isDoge(doge)){
  doge;
}else{
  //? 타입 Cat을 형성할수 있는 요소가 없기 때문에 never
  doge;
}

if(isDoge(cat)){
  //? 타입이 intersection으로 추론되는 이유
  //* 유니온은 한가지 타입이 만족하면 다른 타입의 프로퍼티도 받을수 있다.
  //! cat이 true가 나올수 있는 방법은 cat의 타입을 만족하면서 age를 들고 있는 수밖에 없다.
  cat;
}else{
  //* cat을 형성할수 있는 breed가 있기 때문에 cat 타입 추론
  cat;
}

