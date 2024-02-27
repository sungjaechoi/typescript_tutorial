/**
 * Parameter Type
//* Parameters 유틸리티를 사용해서 파라미터의 타입을 가져올수 있다.
 */

function sampleFunction(x: number, y: string, z: boolean){

}

//* sampleFunction의 타입을 가져오기 위해 typeof를 사용해야 함
type Params = Parameters<typeof sampleFunction>;

//* generic안에서는 타입으로 인식하기때문에 함수 타입 정의하면 해당 함수의 파라미터 타입을 받아올수 있다.
type Params2 = Parameters<(one: number) => void>;