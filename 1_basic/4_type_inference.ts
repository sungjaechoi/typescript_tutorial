/**
 * Type Inference
 *
 * 타입 추론
 * -> type을 굳이 입력하지 않더라도 typescript에서 자체적으로 변수나 함수 또는 이 파라미터의 값들의 Type을 유추 하는것
 */
// 타입을 직접 명시 하지 않아도 타입을 유추함
// 1.초기화 할떄(선언 할때) 값을 정확하게 넣어주면 그타입으로 추론이 잘된다.
let stringType = "string";
let booleanType = true;
let numberType = 30;

// 2. 같은 타입으로 재할당시 오류 없이 잘 됨
booleanType = false;

// 3. 최초 초기화(선언) 할때 변수 타입을 boolean 타입으로 설정이 되었기 때문에 다른 타입으로 재할당시 에러가 발생한다.
// booleanType = 'false'

/**
 * const의 타입 추론
 * 상수는 변경이나 재할당이 불가능하기 떄문에 타입 추론 시 "스트링 리터럴" 타입으로 추론 된다.
 * => 문자열 타입이기는 하나 문자열 보다 구체화된 타입인 'const string' 타입으로 해당 문자열만 입력이 가능한 상태가 된다.
 */
const constStringType = "const string";
const constBooleanType = true;

/**
 * const 객체의 타입추론
 * 1. const의 객체 선언시 원시값만 선언했을떄와 다르게 구체화된 타입으로 타입추론이 이루어 지지 않는다.
 *  (let과 타입 추론이 같음)
 */
let yujin = {
  name: "안유진",
  year: 2003,
};

const yujin2 = {
  name: "안유진",
  year: 2003,
};
// 2. 그렇기 떄문에 값의 재할당이 가능하다.
yujin2.name = "코드팩토리";
console.log(yujin2); // name : '코드팩토리'

// 3. 객체에서 조금더 구체화된 타입으로 유추되도록 하고 싶은 경우 '캐스팅(타입 단언)'을 사용한다.
// 캐스팅(타입 단언) -> 특정 타입으로 지정해 주느것
const yujin3 = {
  name: "안유진" as const,
  year: 2003 as const,
};

// 4. 캐스팅으로 객체의 각 key의 값이 구체화 되었기 때문에 값이 재할당이 불가능 하다.
// yujin3.name = '코드팩토리'

// 5. "yujin3.name" 작성 시 마우스를 올려보면 구체화된 타입을 추론 받을수 있다.
console.log(yujin3.name);
console.log(yujin2.name);

/**
 * Array
 */

// 1-1. "let numbers: number[]"로 타입 추론
let numbers = [1, 2, 3, 4, 5];

// 1-2. numbers의 원소는 number라고 타입 추론이 되었기 때문에 에러 발생
// numbers.push('6');

// 1-3. numbers의 원소가 number로 타입추론이 되어 있기떄문이 'number'에 'numbers[0]'을
// 할당 할경우 'number'는 numberType으로 추론 된다.
const number = numbers[0];

// 2-1. "let numbersAndString: (string | number)[]"로 타입 추론
let numbersAndString = [1, 2, 3, "4", "5", "6"];

// 2-2. numbersAndString의 [0]번째 원소는 number 타입이 지만 타입스크립트는 거기까지는 추론 하지 않고
//numbersAndString이 '(number|string)[]'로 타입이 추론 되었기 떄문에 원소 할당 시 nos의 타입은 'number|string'로 추론된다.
const nos = numbersAndString[0];

// 2-3 타입스크립트는 Array의 index까지 신경 쓰지 않는다. => 
const nos2 = numbersAndString[10]
console.log("nos2: ",nos2)

// 3-1. Array또한 특정 값들로 구성된 구체화된 타입으로 선언 하고 싶다면 '캐스팅'을 사용할 수 있다.
// -> 이러한 형식을 "tuple" 이라고 한다. => "const twoNumbers: readonly [1, 3]" => readonly : 수정 불가 
// "tuple"로 선언된 값은 몇번째에 어떤값이 있어야 하는지를 정확히 알 수 있다.
const twoNumbers = [1, 3] as const;

// 3-2.twoNumbers는 읽기 전용 속성(readonly)으로 재 할당(수정), 추가 할수 없다.
// twoNumbers[0] = 10;
// twoNumbers.push(100)

// 3-3. 아래와 같이 twoNumbers의 원소의 값을 할당하면 해당 타입은 "twoNumbers[0]"가 readonly 타입이기 때문에
// 구체화된 숫자리터럴의 "1"이 타입으로 추론 된다. => let으로 선언해도 마찬가지
const first = twoNumbers[0]
let letTest = twoNumbers[0]

// 3-4. 2-3과는 다르게 'tuple'로 선언된 타입은
// 몇번째에 어떤 값이 있어야 하는지를 정확하게 알기 때문에 아래와 같은 경우 에러가 발생한다.
// const indexTest = twoNumbers[10]