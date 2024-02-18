/**
 * Narrowing(= 좁아짐)
 //* 변수의 타입을 더 구체적인 타입으로 좁혀나가는 과정
 * 타입 안정성을 보장하고 런타임 오류를 줄이기 위해 중요
 */

/**
 * Narrowing 종류
 * 
 * 1) Assignment(:할당) Narrowing
 //* 특정 값을 할당해서 타입이 좁아짐
 * 2) typeof Narrowing
 //* 타입검사로 타입이 좁아짐
 * 3) Truthiness(:진실성) Narrowing
 //* 조건문으로 타입이 좁아짐
 * 4) Equality(:평등) Narrowing
 //* 동등 연산자로 타입이 좁아짐
 * 5) in operator(:연산자) Narrowing
 //* in 연산자는 객체가 특정 속성을 가지고 있는지 여부를 확인하는 데 사용
 //* in 연산자를 사용하여 타입 가드 내에서 타입을 좁히는 방법
 * 6) instanceof Narrowing
 //*  연산자를 사용하여 객체가 특정 클래스의 인스턴스인지 확인함으로써 좁아짐
 * 7) discrimated(:차별) union Narrowing (차별된 유니언 내로잉)
 //* 차별화된 유니언 타입은 공통된 리터럴 타입 프로퍼티(일반적으로 "tag"라고 함)를 가진 유니언 타입을 
 //* 이를 통해 타입 가드 내에서 각각의 타입을 안전하게 구별
 * 8) exhaustiveness(:철저함) checking
 //* 완전성 검사는 유니언 타입을 사용할 때, 모든 가능한 경우를 처리했는지 확인하는 과정
 //* never 타입을 사용하여 처리되지 않은 경우가 없는지 검사할 수 있다.
 */

// 1) Assignment Narrowing:
//* - 특정 값을 할당해서 타입이 좁아짐

//1. number와 string 포함하는 타입 선언 -> 값은 string타입의 값을 할당.
let numberOrString: number | string = "code Factory";

//2. numberOrString의 타입은 number | string 으로 선언 되어도
//*  값이 string으로 할당 되면 값을 통해서 string 타입으로 추론된다.
numberOrString;

// 3. numberOrString은 네로잉되어 string으로 추론 되기떄문에 number에 관련된
//    메서드 및 자동 완성 기능을 사용할 수 없다.
//* => narrowing된 타입(string)으로 인지 되었기 때문에
//? .toFixed(num) => num의 소수점 자리의 index를 인자로 넣고 반올림하는 number 메서드
// console.log(numberOrString.toFixed(2));

/**
 * 2) typeof Narrowing
//* - 타입검사로 타입이 좁아짐
 */

//? JS의 typeof - 주어진 변수나 표현식의 데이터 타입을 나타내는 문자열을 반환
//? TS의 typeof - 런타임 시 :  JavaScript의 typeof와 동일하게 작동
//?            - 린트 타임 시 : typeof의 고유기능으로 타입을 추출하여 재사용 할때 사용
let num = 10;
type NumberType = typeof num;

//! 런타임에 " Math.random()"함수가 실행되고 컴파일 시점에는 string인지 number인지
//! 알수 없기 때문에 TS는 "string | number"로 추론한다.
//? Math.random():0부터 1사이에 소수점 랜덤 값이 반환됨
numberOrString = Math.random() > 0.5 ? 1123 : "아이유";

// typeof를 통해서 런타임시 스트링이라면 true = string, false = number
//! - 타입이 선언 (string | number)선언 되어 있기 떄문에 false는 number일 수밖에 없음
if (typeof numberOrString == "string") {
  numberOrString;
} else {
  numberOrString;
}

/**
 * 3) Truthiness(:진실성) Narrowing
//* - 조건문으로 타입이 좁아짐
*/

let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

//* false가 나오는 값을 타입 typeof없이 체크 하는 방법
//! null은 javascript에서 false로 체크 하기 떄문에 if문의 "nullOrString"은 false로 체크되고 else로 넘어간다.
if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

/**
 * 4) Equality(:평등) Narrowing
//* - 동등 연산자로 타입이 좁아짐 = 같은지를 비교
 */

let numberOrstring2: number | string = Math.random() > 0.5 ? 1123 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

//* 서로 다른 2개의 타입들을 비교하여 같은 타입으로 타입을 좁힘
//! 자바스크립트 기준(=런타임)으로 '아이유'와 '아이브'의 값이 같을수 없기 떄문에 true를 반환 할수 없지만
//! 타입스크립트 기준(=컴파일)으로 서로다른 타입을 비교하였기 떄문에 타입 추론이 된다.
//TODO 질문  - 근데 이게 의미가 있는건가? 내로잉 된건 맞는데 무슨의미지? => 타입이 이렇게 추론될수 있다 말고 실제로 타입이 좁아지는 의미가 있는건가? 어떻게 써먹지?
//? **타입이 좁아지는 것을 보여주기위한 예제**
if (numberOrstring2 === stringOrBool2) {
  numberOrstring2;
  stringOrBool2;
  console.log("t", stringOrBool2, numberOrstring2); //!런타임 기준 true 가 나올수 없다
} else {
  numberOrstring2;
  stringOrBool2;
  console.log("f", stringOrBool2, numberOrstring2); //!런타임 기준 true 가 나올수 없다
}

//!! typeof Narrowing을 쓸때는 Equality Narrowing이 typeof Narrowing가 동시에 작용한다
let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
  console.log("number", numberOrStringOrNull);
} else {
  numberOrStringOrNull;
  console.log("string,null", numberOrStringOrNull);
}

/**
 * 5) in operator(:연산자) Narrowing
 //* - in 연산자는 객체의 프로퍼티 키값이 존재 여부를 boolean으로 반환
 */

interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  breed: string;
}

let human: Human = {
  name: "안유진",
  age: 23,
};

let dog: Dog = {
  name: "오리",
  breed: "Yorkshire Terrier",
};

//* Human과 Dog의 interface의 타입 프러퍼티의 키값 중에 'brred'를 가지고 있는 것은
//* Dog interface만 있기 떄문에 "in"식별자를 사용하여 타입을 좁힐수 있다.
let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ("breed" in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

/**
 * 6) instanceof Narrowing
//* - 연산자를 사용하여 객체가 특정 클래스의 인스턴스인지 확인함으로써 좁아짐
*
//! JS의 intanceof - 객체가 특정 클래스나 생성자함수의 인스턴스인지 확인
//! TS의 intanceof - JS와 동일한 역활을 하나 타입가드로 작용하여 컴파일 타임에 객체의 타입을 좁히는 역활을 수행
 */

//? 타입가드 -  특정 스코프 내에서 변수의 타입을 보다 구체적인 타입으로 좁히기(narrowing) 위해 사용되는 표현식이나 구문
//? new Date() - 인자 없이 호출 시 "현재의 날짜와 시간을 나타내는 객체를 생성"

let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : "코드팩토리";

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

/**
 * Discriminated union Narrowing
//* - 차별화된 유니언 타입은 공통된 리터럴 타입 프로퍼티(일반적으로 "tag"라고 함)를 가진 유니언 타입을 
//* - 이를 통해 타입 가드 내에서 각각의 타입을 안전하게 구별
 */

//! 잘못된 예 - 설명을 위한 예시 사용 금지
interface Animal {
  type: "dog" | "human";
  height?: number; // 사람의 키
  breed?: string; // 개의 종
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Yorkshire Terrier",
      };

//! 타입이 "number | undefined" 나오는 이유는 height, breed에 optional을 사용하여
//!  해당 프러퍼티가 있어도 되고 없어도 된다고 선언 했기 때문.
if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
  animal.height;
}

//* 위와 같이 타입을 나누고 싶은 경우 아래와 같이 사용 한다.

interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Yorkshire Terrier",
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
} else {
  humanOrDog2;
}

//!!! 공통되는 프러퍼티를 가지고있는 객체를 정의 하는 경우,
//!!! 여러개의 타입으로 나누어서 유니언으로 묶어주는것이 타입을 정확히 유추하기 좋다.

/**
 * 8) exhaustiveness(:철저함) checking
//* 완전성 검사는 유니언 타입을 사용할 때, 모든 가능한 경우를 처리했는지 확인하는 과정
//* never 타입을 사용하여 처리되지 않은 경우가 없는지 검사할 수 있다.
 */

// 1. 최초 아래와 같이 코드를 설정
interface Human3 {
  type: "human";
  height: number;
}

interface Dog3 {
  type: "dog";
  breed: string;
}

//TODO 추가 된 interface
interface Fish {
  type: "fish";
  length: number;
}

//! 수정시 주석
type HumanOrDog3 = Human3 | Dog3;

let humanOrDog3: HumanOrDog3 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "Yorkshire Terrier",
      };

//TODO 추가된 타입
// type HumanOrDog3 = Human3 | Dog3 | Fish;

// let humanOrDog3: HumanOrDog3 =
//   Math.random() > 0.5
//     ? { type: "human", height: 177 }
//     : Math.random() > 0.5
//     ? {
//         type: "dog",
//         breed: "Yorkshire Terrier",
//       }
//     : {
//         type: "fish",
//         length: 12,
//       };

//* humanOrDog3.type이 "human"이나 "dog" 외의 다른 값일 경우 default절이 실행 되나
//* "humanOrDog3"의 타입은 "Human3 | Dog3"이며 default 절은 실행 될수 없어기 때문에 naver타입으로 추론 된다.
//* 그럼에도 불구하고 default절을 사용하여 "humanOrDog3"를 다시 참조하는 이유는
//* naver 타입을 사용하여 모든 가능 케이스를 사용하였는지 "철저하게 검사"할수 있기 떄문이다.

//!!! "onst _check : never = humanOrDog3" !!!
//! 위의 설명대로 default절의 humanOrDog3는 naver타입 이기때문에 상수 "_check"에 never타입 설정후 할당이 가능하다.
//! 이점을 이용하여 타입 추가 및 수정시 린트타임에 에러를 생기게 하여 타입이 수정된 것을 "철저하게 검사"할수 있다.
//? 오류의 원리 - human,dog를 제외한 case가 생기면, 다시말해 type이 생기면 default절의 humanOrDog는 naver아닌 'fish'가 되기 떄문에
//? never가 타입으로 선언된 상수 "_check"에 에러가 발생된다. 결국 "_check"의 에러는 개발자에게 추가된 type을 case로 추가해라가 된다.
switch (humanOrDog3.type) {
  case "human":
    humanOrDog3;
    break;
  case "dog":
    humanOrDog3;
    break;
  // case "fish":
  //   humanOrDog3;
  //   break;
  default:
    humanOrDog3;
    const _check : never = humanOrDog3
    break;
}

