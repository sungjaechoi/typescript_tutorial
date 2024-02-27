/**
 * Constructor Parameter
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}
//* constructor의 파라미터를 추출해서 사용할수 있다.
type ConstructorParamType = ConstructorParameters<typeof Idol>;