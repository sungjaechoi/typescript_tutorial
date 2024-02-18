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
 * 2) typeof(:유형) Narrowing
 //* 타입검사로 타입이 좁아짐
 * 3) Truthiness(:진실성) Narrowing
 //* 조건문으로 타입이 좁아짐
 * 4) Equality(:평등) Narrowing
 //* 동등 연산자로 타입이 좁아짐
 * 5) in operator(:연산자) Narrowing
 //* in 연산자는 객체가 특정 속성을 가지고 있는지 여부를 확인하는 데 사용
 //* in 연산자를 사용하여 타입 가드 내에서 타입을 좁히는 방법
 * 6) instanceof(:대신에?) Narrowing
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
var numberOrString = "code Factory";
//2. numberOrString의 타입은 number | string 으로 선언 되어도
//*  값이 string으로 할당 되면 값을 통해서 string 타입으로 추론된다.
numberOrString;
// 3. numberOrString은 네로잉되어 string으로 추론 되기떄문에 number에 관련된
//    메서드 및 자동 완성 기능을 사용할 수 없다.
//* => narrowing된 타입(string)으로 인지 되었기 때문에
//? .toFixed(num) => num의 소수점 자리의 index를 인자로 넣고 반올림하는 number 메서드
// console.log(numberOrString.toFixed(2));
/**
 * 2) typeof(:유형) Narrowing
//* - 타입검사로 타입이 좁아짐
 */
//? Math.random():0부터 1사이에 소수점 랜덤 값이 반환됨
//! 런타임에 " Math.random()"함수가 실행되고 컴파일 시점에는 string인지 number인지
//! 알수 없기 때문에 TS는 "string | number"로 추론한다.
numberOrString = Math.random() > 0.5 ? 1123 : "아이유";
// typeof를 통해서 런타임시 스트링이라면 true = string, false = number
//! - 타입이 선언 (string | number)선언 되어 있기 떄문에 false는 number일 수밖에 없음
if (typeof numberOrString == "string") {
    numberOrString;
}
else {
    numberOrString;
}
/**
 * 3) Truthiness(:진실성) Narrowing
//* - 조건문으로 타입이 좁아짐
*/
var nullOrString = Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];
//* false가 나오는 값을 타입 typeof없이 체크 하는 방법
//! null은 javascript에서 false로 체크 하기 떄문에 if문의 "nullOrString"은 false로 체크되고 else로 넘어간다.
if (nullOrString) {
    nullOrString;
}
else {
    nullOrString;
}
/**
 * 4) Equality(:평등) Narrowing
//* - 동등 연산자로 타입이 좁아짐 = 같은지를 비교
 */
var numberOrstring2 = Math.random() > 0.5 ? 1123 : "아이유";
var stringOrBool2 = Math.random() > 0.5 ? "아이브" : true;
//* 2개의 타입을 비교하여 하나의 타입으로 내로잉
//! 자바스크립트 기준(=런타임)으로 '아이유'와 '아이브'의 값이 같을수 없기 떄문에 true를 반환 할수 없지만
//! 타입스크립트 기준(=컴파일)으로 서로다른 타입을 비교하였기 떄문에 타입 추론이 된다.
//TODO 질문  - 근데 이게 의미가 있는건가? 내로잉 된건 맞는데 무슨의미지? => 타입이 이렇게 추론될수 있다 말고 실제로 타입이 좁아지는 의미가 있는건가? 어떻게 써먹지?
if (numberOrstring2 === stringOrBool2) {
    numberOrstring2;
    stringOrBool2;
    console.log("t", stringOrBool2, numberOrstring2); //!런타임 기준 true 가 나올수 없다
}
else {
    numberOrstring2;
    stringOrBool2;
    console.log("f", stringOrBool2, numberOrstring2); //!런타임 기준 true 가 나올수 없다
}
var numberOrStringOrNull = Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null;
if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
    console.log('number', numberOrStringOrNull);
}
else {
    numberOrStringOrNull;
    console.log('string,null', numberOrStringOrNull);
}
/**
 * 5) in operator(:연산자) Narrowing
 //* - in 연산자는 객체가 특정 속성을 가지고 있는지 여부를 확인하는 데 사용
 //* - in 연산자를 사용하여 타입 가드 내에서 타입을 좁히는 방법
 */
