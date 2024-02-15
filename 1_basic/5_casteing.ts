/**
 * Casting (타입 단언)
 * 
 * TS에서 casting을 사용 하면 JS 컴파일시 적용 되지 않는다.
 */
const codefactory = 'code factory'

// 1. .toUpperCase() => 스트링에서 사용 가능한 대문자를 만들어주는 JS 메서드
console.log(codefactory.toUpperCase())

const testNumber = 3;
// 2. .toUpperCase()는 넘버 타입에 존재 하지 않기 때문에 오류가 생긴다.
// console.log(testNumber.toUpperCase())

// 3. anyType의 문제 - 위 2번과 다르게 any타입은 문자열 타입에만 존재하는 
// .toUpperCase()메서드가 있다고 가정한다.
// 실재 실행시에는 존재 하지 않기 때문에 에러
let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase())

//4. 3번에에 any타입으로 숫자 5를 할당 하고 'stringVar'에 
// 'sampleNumber'를 할당하면서 타입을 문자열로 단언 하면 오류가 발생하지 않는다.
// 이는 실제 그타입이 아니더라도 그타입으로 가정을 하게 할 수 있다.
let stringVar = sampleNumber as string

//5. TS에서 casting을 사용 하면 JS 컴파일시 적용 되지 않기 떄문에 
//JS는 'sampleNumber'의 타입을 number로 출력 한다.
console.log(typeof (sampleNumber as string)) 

//6. JS에서는 캐스팅을 신경 쓰지 않으나 TS에서는 캐스팅 사용시 
//해당 타입이 문자열이 인것 처럼 문자열에 사용가능한 메서드들이 자동으로 출력된다.
// => 위 와 같은 오류가 생기기 떄문에 절대 캐스팅을 막 쓰면 안된다.
// console.log(typeof (sampleNumber as string).)

//7.캐스팅의 남용시 문제점
let number = 5;

//7-1. number에 toUpperCase() 메서드를 사용하게되면 오류가 발생한다.
//console.log(number.toUpperCase())

//7-2. any타입으로 캐스팅을 하게 되면 오류의 기능을 상실한다. 
console.log((number as any).toUpperCase())

/**
 * Casting(타입 단언) as의 사용 하기 좋은 형태 
 * 1. 타입을 확신 할때만 사용
 * 2. 상속상에 더 구체화 된 값으로 캐스팅 할때 사용
 */


