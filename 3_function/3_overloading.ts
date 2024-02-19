/**
 * Overloading
//? 실제 구현체와 오버로딩 정의간의 차이가 발생한다.
// * JS에서는 실제 오버로딩을 지원하지 않기 때문에 컴파일 단계에서 삭제됨
// * 컴파일 타임에서 존재 -> 컴파일후 단일 함수로 변환  
//! 유지보수에 좋지 않음 사용 하지 금지 => 각각의 단일 함수를 선언하여 사용하는것이 나음
*/

/** 
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력 받는다.
 * 예) '아이유, 장원영, 레이'
 * */ 

/**
 * 만약 세게의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진','장원영','레이'
 */

function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string) : string{
  if(member2 && member3){
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  }else{
    return `아이브: ${memberOrMembers}`
  }
}

console.log(stringOrStrings('안유진, 장원영, 레이'))
console.log(stringOrStrings('안유진', '장원영', '레이'))

//* 현상태의 문제 인자를 두개 넣어도 동작한다. -> 파라미터 2개를 옵셔널로 지정했기 때문에
//! 단 if조건에 맞지 않기 때문에 2번쨰 인자는 제외 된다.
//? 인자를 받는 상황을 2가지로 하면서 제한하고 싶은경우 "오버로딩"을 사용한다.
console.log(stringOrStrings('안유진', '장원영'))




//? Overloading
//* 하나의 함수로 인자 하나, 세게를 받는 함수 구현
//* 1)하나를 받는 함수 오버로딩 정의
//! 아래 구현체 함수에서 가능한 함수 시그니처만을 사용해서 오버로딩을 할수 있음
//! 함수명과 동일하게 정의
function stringOrStrings2(members : string): string

//* 2)세게를 받는 함수를 구현
//! 오버로딩을 정의할때 파라미터의 명칭은 모두 달라도 된다. 단, 순서는 같아야 한다.
//! 첫번재 파라미터가 없는 상황의 오버로딩은 구현할수 없다.
function stringOrStrings2(member1: string, member2:string, member3:string):string

//! 결국 아래 함수 구현체의 타입을 위의 오버로딩 정의로 2개의 타입을 "오버로딩" 할수 있다.
function stringOrStrings2(memberOrMembers: string, member2?: string, member3?: string) : string{
  if(member2 && member3){
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  }else{
    return `아이브: ${memberOrMembers}`
  }
}

//* 상위 코드와 같은 결과가 나오지만
console.log(stringOrStrings2('안유진, 장원영, 레이'))
console.log(stringOrStrings2('안유진', '장원영', '레이'))

//! 인자가 2개가 들어오는 상황은 제한 할수 있다.
// console.log(stringOrStrings2('안유진', '장원영'))