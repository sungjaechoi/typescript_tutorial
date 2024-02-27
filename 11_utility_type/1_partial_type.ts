/**
 * Partial(:부분적인) Type
 */
interface Idol{
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: '안유진',
  age: 23,
  groupName: '아이브',
}
//* 기존 객체의 타입을 받아서 "부분적"으로 변경하여 사용하고 싶은 경우
//? Idol interface에 존재하는 프러퍼티 중 원하는 프러퍼티만 "부분적"으로 사용 하고 싶을때 Partial 유틸리티를 사용한다.
function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
  return {
      ...original,
      ...updates,
  }
}
//? partial 유틸리티는 부분적으로 원하는 속성을 가져오기때문에 속성이 없어도 에러가 나지 않는다.
//? => 저분 입력 해도 되고, 부분적으로 하나만 입력해도되고, 안해도 된다.
console.log(updateIdol(yuJin, {
  age: 27,
  name: '코드팩토리',
  // name2: '코드팩토리',
  groupName: '주식회사 코드팩토리',
}));