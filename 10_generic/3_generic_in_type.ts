/**
 * Generic in Type
 */
//* generic 타입 선언 법
type GenericSimpleType<T> = T;

//* 타입 지정 가능
const genericString: GenericSimpleType<string> = '코드팩토리';

//! type도 interface와 마찬가지로 defult값이 없으면 에러 
// const genericString2: GenericSimpleType = '코드팩토리';

//* generic 선언
interface DoneState<T>{
    data: T[];
}

interface LoadingState{
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

//* 사용하는 타입을 지정 가능
// type State = DoneState<string> | LoadingState | ErrorState;

//* 여기서 State의 타입을 사용할떄 DoneState의 타입을 지정 하고 싶은 경우
//? State에서 타입을지정하면 DonState에 state에서 지정한 타입이 들어간다.
//* defult 사용도 가능
//! 비동기 사용시 사용가능한 실무 코드
type State<T = number> = DoneState<T> | LoadingState | ErrorState;

//* steate의 타입에 strign를 넣어주면 Donestate는 string타입의 배열이 된다.
let state: State<string> = {
    data: ['123', '456'], 
}

//* union으로 재 할당 가능
state = {
    requestedAt: new Date()
}

state = {error: 'error'};

//* generic의 기본 타입이 number이기 때문에 가능
let state2: State = {
    data: [123, 456]
}