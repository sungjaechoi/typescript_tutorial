/**
 * Generic in Promise
 */

//* JS의 Promise
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
      }, 2000)
  })
}

//* JS의 async
//? response가 unknown 타입으로 나옴
const runner = async function () {
  const res = await afterTwoSeconds();
  console.log(res);
}

runner();


// response의 타입 유추
//* 반환 타입이 Promise이며 string 타입이라고 명시
//? 비동기 함수를 정의 할때 우리가 반환을 받을 promise 타입을 반환 해주고
//? await 으로 반환 받을 값은 promise의 generic으로 선언해 준다.
const afterOneSecond = function(): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
      }, 1000)
  })
}

//? 화살표 함수로도 가능
const afterOneSecond2 = (): Promise<string> =>{
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('done');
      }, 1000)
  })
}

const runner2 = async function () {
  const res = await afterOneSecond();
  console.log(res);
}

runner2();

//? async를 붙이면 자동으로 타입 유추가 된다. -> async는 promise를 반환하 하나까
const runner3 = async function(){
  return 'string return';
}