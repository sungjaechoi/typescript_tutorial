/**
 * Generic in Inheritance(:상속) => 확장으로 기억하자!
 */
class BaseCache<T>{
  data: T[] = [];
}

class StringCache extends BaseCache<string>{ }

const stringCache = new StringCache();
stringCache.data;

//* 자식 클래스에서 부모클래스의 제네릭을 받아서 넘겨줄수 있음
class GenericChild<T, Message> extends BaseCache<T>{
  message?: Message;

  constructor(message?: Message) {
      super();
      this.message = message;
  }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

/**
* 제너릭의 inheritance
*/
interface BaseGeneric {
  name: string;
}

//* BaseGeneric 제네릭이 제공해주는 Name 프러퍼터가 있는 타입을 따라줘야 함
//* gneric을 extends 하면 구조를 강제 할수 있다.
class Idol<T extends BaseGeneric>{
  information: T;

  constructor(information: T) {
      this.information = information;
  }
}

//! name을 지우면 에러
const yuJin = new Idol({
  name: '안유진',
  // age: 23,
});

/**
* keyof 함께 사용하기
//? keyof Type의 결과는 Type의 모든 프로퍼티 키를 유니온 타입으로 반환
*/
const testObj = {
  a: 1,
  b: 2,
  c: 3,
}

//* generic O라는 객체(인자로 들어오는 객체의)의 generic O의 key를 generic K에 저장 한다.
//? K는 어떤 구조를 강제 할껀데 O라는 객체의 key 속성으로 이루어진 유니언 으로
function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const val = objectParser(testObj, 'c');

/**
* Ternary(:3항)
* 1=== 2 ? true : false
*/

class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
  type: 'Male Idol' = 'Male Idol';
}

//* SpecificIdol type은 Idol2로 확장하여 gneric을 T가 2중 하나의 타입을 확장하면 해당 타입이 됨
type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
  MaleIdol : FemaleIdol;

//* 선언문에서 해당 타입을 정한다. 결국 FemaleIdol, MaleIdol 둘중 하나의 타입이 될수 있다.
const idol2: SpecificIdol<MaleIdol> = new MaleIdol();