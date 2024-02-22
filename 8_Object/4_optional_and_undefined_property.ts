/**
 * Optional and Undefined Property
//* optional(= ?)의 정확한 이해
 */

// 객체 interface 선언
//* "?" breed를 옵셔널로 설정
interface Dog {
  name: string;
  age: number;
  //! optional(?)은 string | undefined 로 타입 추론 된다.
  //* 종을 모르면 undefined
  breed?: string;
}

//* breed는 optional =  선택사항
const byulE: Dog = {
  name: '별이',
  age: 12,
  breed: '미니핀',
}

//* breed는 optional =  선택사항
const ori: Dog = {
  name: '오리',
  age: 3,
}

//? optional을 사용하지 않고 union을 사용하여 type | undefined를 명시적으로 타입선 언시 다른점??
interface Cat{
  name: string;
  age: number;
  breed: string | undefined;
}

//! 명시적으로 undefined를 선언 했기 때문에 속성은 존재 햐야 한다.
//* 결국 optional(=?)은 속성을 입력 여부를 따지는 것이다. 
const nabi: Cat = {
  name: '나비',
  age: 7,
  breed: undefined,
}