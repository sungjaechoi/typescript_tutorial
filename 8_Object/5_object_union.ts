/**
 * Object Union
 */

/**
 * 암시적으로 유추된 객체 타입 유니언
 */

//? 0.5 보다 크면 강아지, 0.5 보다 작으면 고양이 이기때문에 예상하는 타입 추론은 강아지 | 고양이 이지만
//? 타입을 확인 하면 그렇지 않다.
//! 마치 강아지의 age와 고양이의 breed가 option표기되어 있어 선택사항 인것 처럼 추론되어 있다.
//! 때문에 직접적으로 타입을 선언 해야 한다.
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    }:
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }
//* "dogOrCat"의 name은 string이다.
dogOrCat.name;
//* "dogOrCat"의 age는 강아지에는 존재하나, 고양이에는 존재하지 않기 떄문에 number 또는 undefined 이다.
dogOrCat.age;
//* "dogOrCat"의 breed는 고양이에는 존재하나, 강아지에는 존재하지 않기 떄문에 string 또는 undefined 이다.
dogOrCat.breed;


// 명시적으로 타입 선언

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }
//* name은 string로 추론
dogOrCat2.name;

//! age, breed는 에러 -> 어디에 어떤 타입이 없는지 까지 상세히 설명
// dogOrCat2.age;
// dogOrCat2.breed;

//* age와 breed의 속성을 사용하기 위해서는 타입가드(narrowing)를 사용해야 한다.
//? 왜? => 타입체커는 dogOrcat가 어떤 타입으로 이루어진 객체가 선언될지 모르기 때문에 
//?        타입가드로 강아지가 나오면 이거하고 고양이가 나오면 저거해라 라고 정확히 인지 시켜야 한다.
//* 복습 - in 연산자: 객체의 프로퍼티 키값이 존재 여부를 boolean으로 반환
if('age' in dogOrCat2){
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
}else{
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.breed;
}