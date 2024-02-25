/**
 * Generic in Interface
 */
//* 어떤 배열이 든 들어가지만 타입 체크는 하고 싶은 경우
interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

//* interface Cache<T>의 타입은 스트링 이라고 지정
//* generic에 스트링이라고 타입을 선언하면 해당 타입은 스트링으로 구성된 배열이 된다.
const cache1: Cache<string> = {
  data: ['data1', 'data2'],
  lastUpdate: new Date(),
}

//* 함수는 암시적 타입 추론이 가능하지만 interface는 불가능
//! 명시적으로 사용해야하며 생략시 에러 
// const cach2_1: Cache<> = {
//     data: [123, 456],
//     lastUpdate: new Date(),
// }

const cach2: Cache<number> = {
    data: [123, 456],
    lastUpdate: new Date(),
}


//* generci에 defult 값을 넣어주면
interface DefaultGeneric<T = number>{
  data:T[];
}

//* 암시적 사용이 가능하다.
const cache3: DefaultGeneric = {
    data: [123, 456],
}

//* 변경도 가능
const cache3_2: DefaultGeneric<string> = {
  data: ['123', '456'],
}