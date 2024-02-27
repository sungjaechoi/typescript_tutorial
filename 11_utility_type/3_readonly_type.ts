/**
 * Readonly Type
//* 읽기 전용 속성 만들기 - 변경 불가
//? 진짜 간혹 사용함
 */

//* 객체의 프러퍼티 변경 가능
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: '냐옹이',
  age: 8
};

nyaong.name = '코드팩토리';

//* Readonly 유틸리티 사용시 변경 불가 
const bori: Readonly<Cat> = {
  name: '보리',
  age: 7,
}

//! 오류를 무시하고 컴파일시 런타임에서는 정상작동함.
// bori.name = '아이유';

//* JS애서 객체를 변경 불가로 만들때 사용 
Object.freeze(bori);