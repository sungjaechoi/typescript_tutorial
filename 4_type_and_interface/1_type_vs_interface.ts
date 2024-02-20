/**
 * Type vs Interface
//? 타입과 인터페이스가 겹치는 기능이 많은 이유? 
//* 인터페이스가 타입보다 나중에 만들어 짐 
//* type으로 안되는 기능을 추가하기위해 인터페이스가 생김,
//* 하지만 완전히 대체하려 interface가 나온건 아님
//! 그래서 type은 되고 interface는 안되는거, interface는 되고 type은 안되는게 존재
 */

//객체 선언의 차이
//* interface
//TODO 질문? - interface을 선언할때 첫글자 대문자로 선언하는 방식이 좋은가?
//* 일반적으로 type과 interfac의 첫글자는 대문자로 시작한다.
interface IObject {
  x: number;
  y: number;
}

//* type
type TObject = {
  x: number;
  y: number;
};

//Function을 선언 할때
//* interface
interface IFunction {
  (x: number, y: number): number;
}

//* type
type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할수 없는 것들
 */

//1️⃣ Primitive 타입 선언하기
//* primitive을 새로운 타입으로 선언하는것은 type만 가능 하다.
//! interface는 애초에 객체형태로 선언하기 때문에 primitive만을 선언 할수 없다.
type Name = string;

//2️⃣ union 타입 선언하기
//* 유니온 타입을 직접적으로 선언하는 것은 type만 가능하다.
type UnionType = string | number;

//? 유니온 타입을 interface에 선언 하려면 객체 내부에서 선언 해야한다.
interface IObject2 {
  x: number | string;
  y: number;
}

//?Tuple 복습
//* Array의 특정 값들로 구성된 구체화된 타입으로 선언 시 사용
//* "tuple"로 선언된 값은 몇번째에 어떤값이 있어야 하는지를 정확히 알 수 있다.

//3️⃣ primitive list 또는 tuple 타입 선언하기
//* tuple타입의 선언도 type에서만 가능하다.
type TupleType = [number, string];

//! interface에서는 array의 어떤 type을 만들 수가 없다.
// interface IObject3 {
//   x: number[string, number],
//   y: number
// }

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// 1️⃣ interface merging
//* 같은 식별자명을 가진 interface를 중복선언 시 각가 가지고 있는 프러퍼티가 합쳐짐
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

//?Test
// interface IRectangle {
//   width: string;
// }

//* 같은 식별자의 interface의 프러퍼티를 변수에서 모두 요구 하는 것을 볼수 있다.
// let rectangle: IRectangle = {}

//!프러퍼티는 오버로딩 안됨
// let rectangle: IRectangle = {
//   width: 222,
//   height: 111,
// }

//! Type은 중복 선언이 되지 않는다.
// type TRectangle={
//   height: number;
// }

// type TRectangle = {
//   width : number;
// }

//! 프러퍼티는 오버로딩이 안됨
//! 성립 자체가 불가능 - 완전히 똑같은 시그니처로만 성립 할수 있다.
interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  // getY: (y: string) => number;
}

//? 메서드로 오버로딩 가능
interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number;
}

const testMethod: GetXnY2 = {
  getX(x){
    return x;
  },
  // 오버로딩 예시
  // getY(){
    
  // }
  //! 오버로딩으로 y의 타입은 "string | number" 가 된다.
  getY(y){
    return 1;
  }
}
