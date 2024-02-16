/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */

//1. 선언된 type은 "string | boolean" 타입으로 string와 boolean을 모두 포함한다.
type StringOrBooleanType = string | boolean;

//2. StringOrBooleanType은 "string | boolean" 타입 이기 떄문에 string을 할당 하고,
// boolean을 재 할당 할수도 있다.
let exampleValue: StringOrBooleanType ='아이브';
exampleValue = true;

//3. StringOrBooleanType은 string과 boolean만 포함하고 있기 때문에
// undefined를 할당 할수 없다.
// exampleValue = undefined

//! 4.유니언은 무한하게 추가 할 수 있다.
type StrBoolNullType = string | boolean | null;

//! 5. 스트링 리터럴(구체화 되어있는 스트링의 값)을 유니언으로 사용 할 수 있다.
type StringLiteralType = 'IVE' | '아이브' | '아이브코리아';
let exampleValue2: StringLiteralType = 'IVE';
exampleValue2 = '아이브';
exampleValue2 = '아이브코리아';

//* 5-1. 구체화된 스티링 타입('IVE' | '아이브' | '아이브코리아') 아니기 때문에 재 할당 될 수 없다.
//! => 유니언을 사용하여 타입을 제한하거나, 값을 제한하거나, 원하는 영역의 값들만 입력하게 할 수 있다.
// exampleValue2 = 'IVE코리아';

/**
 * 배열의 유니언
 * 
 */

//1. string[]으로 또는 boolean[]으로 구성된 배열
//* => 정확히 어떤 타입으로 구성된 배열 또는 다른 타입으로 구성된 배열를 원한다면
//*    타입 앞에 배열표시가 될수 있도록 독립된 타입을 유니언으로 나누어 주어야 한다. => string[] | boolean[];
type stringListOrBooleanList = string[] | boolean[];

//2. "string[]"으로 구성되어 있기 떄문에 string[]으로 할당 할 수 있다.
let strListOrBooleanList: stringListOrBooleanList = [
  '아이유',
  '김고은',
  '박소담',
]

//3. "boolean[]"으로 구성되어 있기 때문에 boolean[]으로 재 할당 할 수 있다.
strListOrBooleanList = [
  true,
  false,
  false,
  true,
]

//! 4. 하지만 두개의 배열 타입을 섞는건 불가능하다.
// strListOrBooleanList = ['아이유', true];


//5. 4번의 타입을 만족하는 배열를 만들기 위해서는 아래와 같이 타입선언을 해야 한다.
//* =>"StrOrNumberList" 타입은 string 과 number을 만족시키는 배열 이다.
//*   배열를 표현해주는 대괄호([])앞에 "(type | type | ...)"을 넣어주면 된다.
// type StrOrNumberList = (string | number)[]
//? 다른 방식의 선언
type StrOrNumberList = Array<string | number>

//!5-1. 4번의 결과와 달리 string,number로 배열 구성이 가능하다.
let stringOrNumberList: StrOrNumberList = [
  '아이브',
  1,
  '아이브코리아',
  2,
]
//5-2. number[]로 재할당 가능
stringOrNumberList = [1,2,3]

//5-3. string[]로 재할당 가능
stringOrNumberList = ['아이유','김고은','박소담']

//? 스트링으로 이루어진 배열인데 원소개 3개
type StringArray = [string,string,string]

/**
 * Interface로 사용하는 union
 */

interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}
// 1. AnimalOrHuman은 Animal과 Human을 만족하는 타입이다.
type AnimalOrHuman = Animal | Human;

//2. 변수 animalOrHuman의 타입으로 AnimalOrHuman을 선언 하고 Human의 타입을 만족하는 객체를 할당하면,
//   console.log(animalOrHuman)의 타입을 Human으로 출력한다.
//*   이는 TS가 Animal과 Human 타입 사이의 차이점(address)을 분석하여, 할당된 객체가 어떤 타입인지를 추론한다.
let animalOrHuman:AnimalOrHuman = {
  name : '최성재',
  age: 34,
  address: '대한민국'
}

console.log(animalOrHuman)

//3. 위와 동일한 이유로 animalOrHuman에 Animal타입을 만족하는 객체를 할당하면
//  console.log(animalOrHuman)의 타입을 Animal로 출력한다.
animalOrHuman = {
  name:'오리',
  age: 9,
}

console.log(animalOrHuman)

//* 4. Animal 타입의 프러퍼터의 키의 값으로 접근 하면 값에 대한 타입을 추론한다.
console.log(animalOrHuman.name)
console.log(animalOrHuman.age)

//5. Animal 타입의 address프러퍼티는 없기 때문에 애러가 발생한다.
// console.log(animalOrHuman.address)

//!6. 타입 단언의 문제점 
//   위 5번의 에러를 타입 단언으로 해결 할 수 있지만
//   타입 단언은 타입을 강제로 변환하는 것이기 때문에, 실제로는 address프러퍼티가 없는데
//   address프러퍼티가 있다고 TS에게 알려주는 것이기 때문에, 타입 단언은 사용하지 않는 것이 좋다.
console.log((animalOrHuman as Human).address)


/**
//* Type을 선언해서 union을 사용하는게 좋은 이유
 * 위의 코드와 아래의 코드의 차이점은 type선언의 여부 이다.
 * 타입 선언을 한 에러메세지와 타입선언을 하지 않은 에러메세지는 다르며
//* 타입 선언을 한 에러 메세지의 가독성이 좋다
 */

let animalOrHuman2 : {
  name: string;
  age: number;
  address: string;
} | {
  name: string;
  age: number;
} = {
  name: '최성재',
  age: 34,
  address: '대한민국'
}

console.log(animalOrHuman2.name)
console.log(animalOrHuman2.age)
console.log(animalOrHuman2.address)

animalOrHuman2 = {
  name: '오리',
  age: 9,
}

//! type 선언의 차이로 인한 에러메시지 가독성 차이 
// console.log(animalOrHuman.address)
// console.log(animalOrHuman2.address)


/**
 * 위의 코드들과 다르게 전혀 상관이 없는 프러퍼티들을 가지고 있는 유니언을 선언 시
 * 어떻개 될까?
 */

type Person = {
  name: string;
  age: string
}

type Cat = {
  breed: string;
  country: string;
}


//* 유니언은 합집합의 개념이다. => 조합이 중요하다.
type PersonOrCat = Person | Cat;

// 1. Person의 name만 지우거나
// 2. Person의 name과 age를 지우거나
// 3. Cat의 country만 지우거나
// 4. Cat의 breed와 country를 지우거나
// ! 1,2,3,4의 경우 처럼 하나의 타입을 충족하 다음에는 초과 되는 값이 다른 타입으로 와도 타입을 만족한다.
// * 하지만 Person과 Cat에서 프러퍼티를 "하나씩" 지우면 어느 타입에서 속하지 못하기 때문에 에러가 발생한다
const personOrCat: PersonOrCat = {
  // name: '최성재',
  age: '34',
  breed: '코리안숏헤어',
  country: '대한민국'
}

