/**
 * Spread Operator
 */
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

//* 배열에서 스프레드 연사자를 사용해도 타입 추론이 된다.
const arr1 = [
    ...onlyString,
];

//* 타입을 명시하지 않고 서로다른 타입의 배열을 스프레드 했을때
//? string과 number를 포함한 배열로 추론된다.
const arr2 = [
    ...onlyString,
    ...onlyNumbers,
]