/**
 * Generic in Implementation(:실행)
//? Implementation: 클래스가 정의한 인터페이스나 추상 클래스의 실제 기능을 작성, 클래스가 어떤 메소드를 가지고 있어야 하며,
//?                 그 메소드들이 어떻게 동작해야 하는지에 대한 구체적인 코드를 포함함
 */

interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

class Idol implements Singer<string, number> {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  sing(year: number): void {
      console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
  }
}

const yuJin = new Idol('안유진');
yuJin.sing(2003);

class Idol2<T, V> implements Singer<T, V> {
  name: T;

  constructor(name: T) {
      this.name = name;
  }

  sing(year: V): void {
      console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
  }
}

const wonYoung = new Idol2<string, number>('장원영');
wonYoung.sing(2003);