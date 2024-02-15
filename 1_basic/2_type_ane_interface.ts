/**
 * Type and Interface
 */

/**
 * Type
 * => 타입 시작은 대문자!!
 * 타입은 쉽게 말해서 TS 타입에 이름을 지어주는 역활을 한다.
 */

// type에서만 원시값 나열 가능 -> interface X
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = "male" | "female"; 

const stringVar: NewStringType = "test";

//객체 타입 지정시 "," 제외
type ldolType = {
  name: string;
  year: number;
};

// 아래와 같이 객체의 타입을 변수에 지정 할 수도 있다.
// 단, 매번 객체를 지정할때 타입 선언을 해야 한다.
// const yujin: {
//   name : string;
//   year : number
// } = {
//    name : '안유진',
//    year : 2002
// }

const yujin: ldolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 *
 * (인터페이스와 타입은 겹치는 기능이 많다.
 *  -> 인터페이스가 타입보다 나중에 생겼으며 타입이 해주지 못하는 몇가지 문제점을 해결 하기위해 생겨남
 *  즉, 타입이 하지못하는 인터페이스의 기능이 존재하며, 타입또한 인터페이스가 하지 못하는 기능이 존재함)
 */

/**
 * type과 interface의 차이
 * --type--
 * type은 type 키워드 다음 타입 선언(?) -> = {}
 * type에서는 원시값을 나열 할수 있다.
 * 
 * --interface--
 * interface는 interface 키워드 다음 타입 선언(?) -> '=' 생략 {}
 * interface는 기본적으로 객체 형태로 선언 된다. -> 함수, 객체 선언 가능 => 함수 객체 잘 사용안함 
 * interface에서는 원시값을 나열 할수 없다.
 */
// 
// 
interface IdolInterface {
  name: string;
  year: number;
}

const yujin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};
// -> interface와 type 키워드가 비슷 하게 작동 함

// interface와 type은 내부에서 설정한 타입들을 지정할 수 있다.
interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yujin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

type IdolIT2 = {
  name: NewStringType;
  year: NewNumberType;
};

const yujin3_1: IdolIT2 = {
  name: "안유진",
  year: 2002,
};

type interfaceTest = {
  test: IdolIT;
};

const interfaceTest: interfaceTest = {
  test: {
    name: "안유진",
    year: 2002,
  },
};

// "?" optional은 interface와 type에 모두 사용 가능
// optional로 지정 시 선택적으로 프로퍼티를 사용할수 있음
interface IdolOptional {
  name: string;
  year?: number;
}

const yujin4 : IdolOptional = {
  name: '안유진'
}

type Address = {
  city : string;
  dong : string;
}

type Credit = {
  grade : string;
  score : number;
}

type Person = {
  name : string;
  age : number;
  job : string;
  address:Address 
  credit : Credit
}

const 사람 = {
  나이 : 20,
  직업 : '개발자',
  주소 : {
    도시 : '서울',
    동 : '신림'
  },
  신용정보 : {
    신용등급 : 'A',
    신용점수 : 1000
  }
}

type Test = Person["address"]

//"사람"이라는 값을 타입으로 캐스팅 => typeof -> 자바스크립트의 typeof가 아님
type Test2 = typeof 사람;
