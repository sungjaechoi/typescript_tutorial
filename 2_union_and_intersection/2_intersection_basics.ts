/**
 * Intersction (&)
 * 
//* 1. And의 개념 = 더하기(+) 개념 
//* 2.  union과 마찬가지로 &로 타입을 엮어(?) 나갈수 있다 => "type & type & ..."
//* 3. union과 결합 해서 사용 가능
 
 * 
 */

interface Human {
  name : string;
  age : number;
}

interface Contacts{
  phone : string;
  address : string;
}

//* 1. Human과 Contacts가 모두 포함되어야 하는 새로운 타입을 생성.
type HumanAndContacts = Human & Contacts;

//1-1. Human과 Contacts의 모든 프로퍼티가 만족하는 새로운 객체가 생성됨
let humanAndContacts : HumanAndContacts = {
  name : 'mike',
  age : 23,
  phone : '010-1234-5678',
  address : '서울시 강남구'
}


//! 원시자료형 타입에 인터섹션 사용시 에러발생
//! => 원시자료형은 이미 하나의 타입이기 때문에 더이상 타입을 추가할 수 없다. => naver 추론 : 존재할수 없는 타입 
type NumberAndString = number & string;

//! 어떤 값으로 할당 되든 에러 발생 => naver : 어떤한 값도 저장되거나 반환되지 않는 타입
// let numberAndString : NumberAndString = 1;

