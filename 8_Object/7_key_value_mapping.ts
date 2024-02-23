/**
 * Key Value Mapping
 //* key와 value를 자동으로 맵핑 할 수 있는 다양한 방법 
 */

//* 3가지 상태가 있다고 가정
enum State {
  loading,
  done,
  error,
}

//* api의 전체 상태를 정의
type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
}

//* user 페이지에서의 상태 정의 - getPosts는 제외
//! DRY(don't repeat yourself)원칙을 어김 
//? DRY(don't repeat yourself : 반복하지마!)원칙
//? - 타입에 대한 반복을 줄이고 깔끔한 코드를 작성하기 위하여 노력
//* 타입이 반복되기 때문에 'GlobalApiStatus'가 변경 되었을때 'GlobalApiStatus'를 바라보고 있는 'UserApiStatus' 변경 되야 한다.
type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
}

//? DRY 원칙을 어기지 않으면서 전체 상태의 프러퍼티를 맵핑하는 방법들
//! 아래 선언들은 위의 선언과 값이 동일하다.

// 인덱스 접근 타입 방벙
//* Js의 객체 대괄호 표기법과 동일 -> TS는 type객체의 프러퍼티의 type을 가져온다.
//* typeName["typeKey"]
//? 자동완성이 되는것도 확인 할수 있음 -> 된다는 소리
type UserApiStatus2 = {
  getUser: GlobalApiStatus['getUser'];
  paginateUsers: GlobalApiStatus['paginateUsers'];
  banUser: GlobalApiStatus['banUser'];
}

// in 식별자를 활용한 타입 맵핑
//? in Operator 복습 - 연산자는 객체의 프로퍼티 키값이 존재 여부를 boolean으로 반환
//* in Operator 타입 맵핑 문법
//* type InMapping = {[k(식별자) in keytype  ]: valuType}
type Keys = "a" | "b";
type NewType = { [K in Keys]: string };

//* GlobalApiStatus의 key를 하나씩 union으로선한하면 식별자 K에 key가 들어가게 되어
//* 아래 주석처리된 key만 적는 것과 같습니다.
//* 콜론 이후 우변에 type로 선언된 GlobalApiStatus에 대괄호 표기법으로 k이 식별자에 저장된
//* key넣으면 각 프러퍼트의 value가 된다.
type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
  // getUser: 
  // paginateUsers:
  // banUser:
}

// 유틸리티 'Pick' 과 'Omit'을 사용하여 맵핑
//? pick - 기존 타입에서 몇 개의 프로퍼티를 선택하여 새로운 타입을 구성 하는 TypeScript의 유틸리티
//? 문법 : Pick<Type, Keys> 
//? Type: 선택할 기존 타입, Keys: 선택하고자 하는 프로퍼티의 key -> 다수의 key 작성시 union으로 연결
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;
//? Omit - 기존 타입에서 특정 프로퍼티를 제외한 새로운 타입을 생성 하는 TypeScript의 유틸리티
//? 문법 : Pick<Type, Keys> 
//? Type: 제외할 기존 타입, Keys: Type에서 제외하고자 하는 프로퍼티의 key -> 다수의 key 작성시 union으로 연결
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
* keyof
//* TypeScript에서 keyof 연산자는 객체 타입의 모든 키를 문자열 또는 숫자 리터럴 유니온으로 추출하는 데 사용
//? 문법 
//? keyof Type
//? Type : 객체 타입 -> keyof Type의 결과는 Type의 모든 프로퍼티 키를 유니온 타입으로 반환
*/

//* keyof를 통해 GlobalApiStatus의 key 값을 유니온 타입으로 AllKeys에 저장
type AllKeys = keyof GlobalApiStatus;

//* 자동완성을 확인 해보면 GlobalApiStatus가 추론 되는것을 확인 할수 있다.
const key: AllKeys = 'getUser';

//* keyof를 활용해서 "UserApiStatus3"의 코드를 줄일수 있다.
//? keyof로 선언된 GlobalApiStatus의 key를 union으로 반환 받으니까 결국 같음,
//! 단 getPosts가 빠지지 않음
type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// Exclude 유틸리티 타입 사용하여 getposts 제외 하기
//* 한 타입에서 특정 항목을 제외한 타입을 구성할 때 사용 특히,유니온 타입에서 특정 멤버를 제거하고자 할 때 유용
//? 문법
//? Exclude<UnionType, ExcludedUnion>
//? UnionType: 대상이 되는 유니온 타입, ExcludedUnion: 유니온에서 제외하고자 하는 타입 -> 다수의 key 제외시 union으로 연결
type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}


// 객체 타입 optional 만들기
type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}


//* 객체 타입이 선언 되어 있을때 그중 중복되는 프로퍼티로 union 만들기
interface LoadingStatus {
  type: 'loading';
  data: string[];
}

interface ErrorStatus {
  type: 'error';
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];