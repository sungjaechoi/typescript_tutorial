"use strict";
/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
Object.defineProperty(exports, "__esModule", { value: true });
const stringVar = "string";
const numberVar = 3;
const bigIntVar = BigInt(9999);
const symbolVar = Symbol(1);
const nullVar = null;
const undefindVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 타입
// any는 JS와 비슷한 속성이므로 많이 사용할 경우 TS를 사용할 이유가 사라짐 - 걍 쓰지마
let anyVar;
anyVar = 100;
anyVar = "가나다라";
anyVar = true;
// any는 다른 어떤 타입의 변수에도 값을 저장 할 수 있다.
let testNumber = anyVar;
let testString = anyVar;
let testBolean = anyVar;
// unknown - 알 수 없는 타입 (비교적 최근에 생김)
let unknownType;
unknownType = 100;
unknownType = "가나다라";
unknownType = true;
// any타입과 unknown타입은 기본적으로 모든 타입을 해당 변수에 입력 할수 있지만,
// 다른 타입의 변수에 할당 할때 차이점 이 생김 -> any O, unknown X
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBolean2: boolean = unknownType;
//위와 같은 차이로 unknown타입은 아래와 같이 unknown, any타입에 할당 할떄가 아니면 할당이 불가능 하다.
let unknownType2 = unknownType;
let anyType2 = unknownType;
// naver - 어떤한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let naverType: naver = null;
// let neverType2: naver = undefined;
// let neverType3: never = "test";
//array Type
const KoreanGirGroup = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList = [true, false, false, true];
