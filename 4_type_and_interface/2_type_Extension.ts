/**
 * Extension(:상속)
 */

// 1. interface의 상속 (= extends)
//* extends키워드로 상속받은 interface의 모든 프로퍼티들은 그대로 사용할수 있다.
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

//? intersection 복습
//* 1. And의 개념 = 더하기(+) 개념,
//* 2. intersction으로 묶인 타입은 모두 포함하는 새로운 타입을 생성 한다.
//* 3. union과 마찬가지로 &로 타입을 엮어(?) 나갈수 있다 => "type & type & ..."
//* 4. union과 결합 해서 사용 가능
//! 5. 원시자료형은 이미 하나의 타입이기 때문에 더이상 타입을 추가할 수 없다. => naver 추론 : 존재할수 없는 타입

// 2. 상속과 유사한 type의 intersection(=&)
//TODO - 질문 -> intersection을 상속으로 봐도 되는가?
type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

// 3. extends키워드와 intersection으로 Type과 interface에 혼용이 가능하다.
//* interface로 type을 상속 받는 경우
type TName2 = {
  name: string;
};

interface IIdol2 extends TName2 {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

//* type으로 interface에 intersection을 하는경우
interface IName2 {
  name: string;
}

type TIdol2 = IName2 & {
  age: number;
};

const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

/** 
 * extending multiple
//* 일반적으로 상속은 하나의 클래스만 가능 하지만,
//! TS은 여러개의 type을 상속 받을수 있다.
 */

// 1. type으로 intersection을 사용한 여러 타입 상속(?)
type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "코드팩토리",
  age: 32,
  breed: "poodl",
};

// 2. interface의 extends 키워드를 통한 여러 타입 상속
interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

//? 하나 이상의 타입을 extends할때는 " , "를 사용한다.
interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "오리",
  age: 7,
  breed: "코리안 냥냥이",
};

/**
 * Overrding

 */
// 1. type의 intersction의 overrding
//! intersection의 primitive 타입과 primitive타입이 설정되면 naver 타입이 된다.
//* 중복으로 프로퍼티를 선언 할때는 같은 타입으로 선언 해야 한다.
type THeight = {
  height: number;
};

//TODO - typer과 interface의 차이
//* 타입 선언이 가능
//! 선언 단계에서 에러 출력
type TRectangle = THeight & {
  height: string;
  width: number;
};


// const rectangle: TRectangle = {
//   height:
//   width: 100,
// }

//* union을 사용하여 intersction을 narrowing하여 overrding 하기 (유용?)

//* 1. 최초 union으로 선언
type TWidth = {
  width: number | string;
};

//* 2. 이후 intersction을 사용하여 width를 number 타입으로 지정하여 number타입으로 Narrowing이 된다.
type Trectangle2 = TWidth & {
  width: number;
  height: number;
};

//* 3. 타입의 최종 타입 추론은 number가 된다.
const rectangle: Trectangle2 = {
  height: 100,
  width: 200,
};

//2. interface의 extends를 활용한 overrding
//* 중복으로 프로퍼티를 선언 할때는 같은 타입으로 선언 해야 한다.
interface IHeight {
  height: number;
}

//TODO - typer과 interface의 차이
//! 타입 선언 자체가 불가능

// interface IRectangle extends IHeight{
//   height : string;
//   width: number
// }

//* union을 사용하여 interface에 extends로 narrowing하기 (유용?)

interface IWidth {
  width: number | string;
}

//* extends된 interface에서 상세한 타입 또는 같은 타입이 되는 경우는 괜찮다.
//! 전현 다른 타입은 "당연" 안됨
interface IRectangle extends IWidth {
  width: number;
  // width: number | string;
  // width : boolean
  height: number;
}
