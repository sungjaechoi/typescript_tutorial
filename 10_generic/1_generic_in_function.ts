/**
 * Generic 함수에서 사용하기
//? 함수 작성 시 매개변수 타입이 반환 타입이라는것을 알 수 있는 방법이  => !! Generic !!
//* 1. 다양한 타입에 대해 재사용 가능한 컴포넌트를 생성할 수 있게 하는 기능
//* 2. 타입 안전성을 유지하면서도 코드의 유연성을 크게 향상
//* 3. 타입을 파라미터처럼 함수나 클래스에 전달이 가능
//! 결론 - 어떤 타입이든 인자를 받고 받은 인자에 따라서 ts가 타입을 추론할 수있게 함 = 재사용성 = 동적?
 */

//generic ??
//* 어떤 타입도 인자로 받을수 있는 함수 선언
function whatValue(value: any) {
  return value;
}
//* 함수 실행문에 인자로 string 타입의 값을 넣어도 파라미터를 any타입으로 지정 했기 때문에 value의 타입은 any로 추론된다.
const value = whatValue('test');


// 함수에서 기본적인 generic 사용법
//* 1) 위와 같은 함수를 선언하고 함수명 뒤에 Generic"<T>"을 붙여서 "generic type"을 선언
//* 2) 함수 내부에서 generic type를 받아 사용 할꺼라는 명시
//* 3) generic을 선언하면 타입으로 generic을 사용할수 있음
//? 보통 Generic에 "T"를 선언해 주는데 의미없이 type에 "T" 이다. => 단순한 식별자이며 보편적으로 한글자로된 대문자로 표기한다.
function genericWhatValue<T>(value: T): T {
  return value;
}

//* 함수에서 generic타입을 선언하면 함수의 인자로 반환값의 타입이 어떤 타입이 될것인지 설정 할수 있다.
//* 함수의 인자가 number로 설정되면 함수 반환 타입은 "number"가 된다.
//? 반환 타입 설정 시 함수명 뒤 generic 내부에 타입을 적어주면 된다.

const genericResult1 = genericWhatValue<number>(123);

// generic으로 함수 실행문의 인자로 반환 타입 유추 하기
//* 함수 실행문에 generic을 선언하지 않으면 타입이 자동으로 유츄 된다.

//? const 사용 시 더 좁은 타입으로 유츄
const genericResult2 = genericWhatValue('123')

//? let 사용 시 넓은 타입으로 유추
let genericResult2_1 = genericWhatValue('123')


// generic 여러개 사용하기
//* generic을 사용해서 매개변수 선언
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return {
      x,
      y,
      z,
  }
}

//* 함수 인자의 타입과 맞게 순서대로 표기 = 인자도 타입순서대로 정의
//! 순서 변경시 에러
const multipleGenericResult = multipleGenerics<number, boolean, string>(
  123,
  true,
  '123',
);

//* 함수에 들어간 인자로 타입이 추론 됨
const multipleGenericResult2 = multipleGenerics(
  123,
  true,
  '123',
);

// 응용 => tuple을 반환하는 함수
function getTuple<X, Y>(val1: X, val2: Y) {
  //* 반환 타입 배열에 타입 단언 = tuple
  return [val1, val2] as const;
}

//* tuple의 반화값 역시 함수 실행문에 인자의 타입으로 추론 된다.
const tuple = getTuple(true, 100);
