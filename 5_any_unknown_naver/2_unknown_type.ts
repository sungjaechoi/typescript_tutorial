/**
 * Unknown Type
//* 거의 사용하지 않음
//* Any타입과 비슷하지만 "덜"관대한 타입이다.
//* Any를 사용하는 곳에 unknown은 타입을 선언할수 있다면 좀더 타이트한 unknown을 사용하는 것이 좋다.
 */

// any타입과의 차이점
//* any는 모든 타입의 value를 넣을수 있다.
let anyValue: any;

anyValue = 24;
anyValue = "아이유";
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

//* unknown도 any와 마찬가지로 모든 타입의 value를 넣을수 있다.
let unknownValue: unknown;

unknownValue = 24;
unknownValue = "아이유";
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

//* any와 unknown은 할당에서의 차이가 생김

//? any는 어떤 타입의 변수에 새로운 타입을 선언하든 그 값을 할당 할수 있다.
// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

//* unknown타입을 갖고있는 값의 경우 또는 변수의 경우
//! 오직 any타입을 가지고 있는 변수나 unknown타입을 가지고 있는 변수에만 할당이 가능
//? primitive타입 또는 그 어떤 타입도 할당할수 없다.
// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

//* any는 무엇이든 될수 있는 타입 - 에러 출력 안됨
anyValue.toUpperCase();
anyValue.name;
new anyValue();

//! unknown은 "알수 없는 타입" - 에러 출력
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

//* type predicate 선언시 unknown사용
function isString(target: unknown) : target is string{
  return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
  testVal;
}

/**
 * unknown에 Union선언 시
//* any를 제외한 모든 타입을 unknown 으로 흡수 한다.
//! union선언시 흡수 
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;
type anyOrU = any | unknown;


/**
 * Intersection Type
//! 이렇게 쓸일 없음 사용 금지 !!
//? Intersection = "primitive & primitive" = never
//* any를 제외한 모든 타입을 unknown 으로 흡수 된다 
//! Intersection선언시 흡수당함 
 */
type uAndString = unknown & string
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;
type anyAndU = any & unknown;


/**
 * Operator(:연산자) 사용
//* unknown은 알수 없는 타입이기 때문에 사칙 연산자 사용이 안된다.
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

//* 동등 연사자만 사용이 가능하다.
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
