/**
 * Nested Object
//* 객체 내부의 객체를 Type으로 어떻게 표현 함?
 */

//* 객체 타입 선언
type NestedPerson = {
  identity:{
      name: string;
      age: number;
  },
  nationality: string;
}

//* 명시적 타입 선언 후 값을 할당
//! 프러퍼티가 하나라도 빠지면 당연히 에러
const codefactory: NestedPerson = {
  identity:{
      name: '코드팩토리',
      age: 32,
  },
  nationality: '한국인',
}

/**
 * 객체를 분리하여 선언 하기
*/

//* 타입선언
//* "identity"속성에 타입으로 "TPersonIdentity"을 선언 할수 있다.
type TPersonIdentity = {
  name: string;
  age: number;
}

//* 타입선언
type TPerson = {
  identity: TPersonIdentity,
  nationality: string;
}


//? 타입을 한번에 선언 VS 타입을 나눠서 객체의 타입을 선언 = 에러 출력의 차이

//- 타입을 한번에 선언
//* name속성을 지웠을때 오류 내용 확인
//! 굉장히 복잡 -> 프러퍼티가 많아지면 많아질수록 더 복잡해짐
const codefactory2: NestedPerson = {
  identity:{
      name: '코드팩토리',
      age: 32,
  },
  nationality: '한국인',
}

//- 타입을 나눠서 객체의 타입을 선언 
//* name속성을 지웠을떄 오류내용 확인
//? 정확히 타입을 가르킴 - 단순
const iu: TPerson = {
  identity:{
      name: '아이유',
      age: 32,
  },
  nationality: '한국인',
}


//* type과 동일!!
interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity{
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity:{
      name: '안유진',
      age: 22,
  },
  nationality: '한국인',
}