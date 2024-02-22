/**
 * Multi Dimension Array
//* 배열 안에 배열이 들어가 있는 형태
 */
/**
 * (1) => 1차원적인 배열 , one Dimensional Array
 * [1,2,3]
 * 
 * (2) => 2차원적인 배열 , Two Dimensional Array
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ]
 * 
 * (3) => 3차원적인 배열 , three Dimensional Array
 * [
 *  [
 *    [1,2,3]
 *  ]
 * ]
 */

//* 2차원적 배열의 명시적 타입 선언 방법
const numb2DArr: number[][] = [
  //! 에러 
  // 1,2,3
  [1, 2, 3],
  [4, 5, 6]
]

//* 암시적 타입 추론
const str2DArr = [
  ['1', '2', '3'],
  ['4', '5', '6'],
]

//* string 또는 number로 구성된 2차원적 배열의 명시적 타입 선언 방법
const strAndNumbArr: (number | string)[][] = [
  [1, '2', 3],
  ['4', 5, '6'],
]

//* sting으로 이루어진 2차원적 배열 또는 number로 이루어진 2차원적 배열
let strArrOrNumbArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]

strArrOrNumbArr = [
  ['1', '2', '3'],
]

//? 1차원적 배열과 다차원 배열의 타입선언의 중점은 
//!"[]표시 갯수에 따른 타입입 선언"

//* for문시 타입 추론이 잘 되는것을 볼수 있다.
for(let arr of numb2DArr){
  for(let item of arr){
      
  }
}