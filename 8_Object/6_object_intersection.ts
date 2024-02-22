/**
 * Object Intersection
 */
//? 복습 : primitive intersection은 naver 타입이다.
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

//* 객체 2개의 타입으로 모두 충족해야 한다.
type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxyyyyzzzz',
}

//intersection 과 union 혼합

type PetType = {
    petName: string;
    petAge: number;
}

//? intersection 다음 union을 선언 해줄때는 "()" 내부에서 선언 해야 한다.
//* personType은 충족하면서 companyType 또는 petType 지정
type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '코드팩토리',
    age: 32,

    // CompanyType
    company: '주식회사 코드팩토리',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '오리',
    petAge: 8,
}