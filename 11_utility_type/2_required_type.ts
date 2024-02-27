/**
 * Required(:필수의) Type
//* 모든 프러퍼티를 "필수" 프러퍼티로 만든다.
 */

interface Dog {
  name: string;
  age?: number;
  country?: string;
}

//? Dog interface는 Optional로 설정된 프러퍼티가 존재하지만
//? Required 유틸리티를 사용하여 "필수" 프러퍼티로 만들수 있다.
const requiredDog: Required<Dog> = {
  name: '모찌',
  age: 7,
  country: '한국'
}