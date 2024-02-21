/**
 * Never Type
//* never : 어떤값도 저장되거나 반환되지 않을때 사용
//!!! 거의 쓸일없음 = 존재여부와, 왜 있는지 여부만 알면된다. = 타입체커 입장에는 타입을 추론하기위해 꼭 있어야하는 존재
 */

//* 반환타입이 never가 되려면 반환하는 상황 자체가 생기면 안된다.
//! 즉, 함수가 끝나지 않는 상태를 만들어야 한다.
// (1) 함수에서 에러를 던질때
function throwError() : never{
  throw Error();
}

// (2) 무한 루프
function infiniteLoop(): never{
  while(true){

  }
}

// (3) 존재 할 수 없는 인터섹션
//! intersection의 primitive 타입과 primitive타입이 설정되면 naver 타입이 된다. 
type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;