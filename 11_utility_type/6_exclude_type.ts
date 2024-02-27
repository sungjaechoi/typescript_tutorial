/**
 * Exclude(:제외) Type
//? Pick 과 Omit은 객체 타입에 프러퍼티를 고르고, 생략하고를 할수 있고, 일반 적인 type에 primitive 타입에서는 사용이 불가능 하다.
//? 타입에 primitive를 유니언으로 선언시 Exclude와 Extract 사용할수 있다.
 */

//? 구문
//? type typeName = Exclude(type | type .. , 제외 하고 싶은 type)
//* string, boolean, number 타입중 string을 제외하고 싶다.
type NoString = Exclude<string | boolean | number, string>;

//* Function을 제외
type NoFunction = Exclude<string | (() => void), Function>;