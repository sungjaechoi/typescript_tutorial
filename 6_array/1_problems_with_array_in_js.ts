/**
 * Problems with Array in JS
//* Array의 문제점
 */

//* 변수명과 할당되 배열의 다르나 JS에서는 타입이 섞여있는 배열이 들어와도 문제가 있다고 인식하지 못함
//? TS는 타입설정을 하지 않고 할당 했기때문에 number|string 으로 추론
const number = [1, '2', 3, '4', 5];

//* 명시적으로 string으로 이루어진 배열이 할당되는 변수
let strings: string[] = ['1', '2', '3'];

//! string 타입 외의 어떤 값도 push할수 없다.
// strings.push(1);

//* string과 number타입으로 이루어진 배열 (=명시적 표헌) 해주어야한다.
//? () 의 표현은 string 또는 number가 포함된 배열
let stringsOrNumbersArray: (string | number)[] = [
    1,
    '2',
    3,
    '4',
]

//* string으로 구성된 배열 또는 number로 구성된 배열
let stringArrNumberArr: string[] | number[] = [
    1,
    2,
    3,
]

//! string[] 이던 number[]든 둘중 하나
stringArrNumberArr = [
    '1', '2', '3',
]

//? ()가 없으므로 변수는 string 또는 number의 배열
let stringOrNumberArr: string | number[] = [
    1, 2, 3
]

stringOrNumberArr = '3';

//* 명시적으로 작성하지 않아도 boolean의 배열로 타입 추론 됨
let boolsArr = [true, false, true];

boolsArr.push(false);

//! boolean의 배열로 유추된 상황에서 1은 push가 안됨
// boolsArr.push(1);



const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

//* onlyString는 string로 이루어진 배열이므로 for문을 돌았을떄
//? onlyString의 원소(item)이 number로 추론 된다.
for(let i = 0; i < onlyString.length; i++){
    let item = onlyString[i];
}

//* 위와 동일
for(let item of onlyNumbers){

}

//* 배열의 값을 할당해도 잘 타입 추론이 잘되는것을 볼수 있다.
let number3 = onlyNumbers[0];
console.log(number3)

//! 주의
//* TS는 배열의 index가 몇개인지 까지는 추론하지 않기 떄문에 에러가 생기지 않는다.
let number4 = onlyNumbers[9999];