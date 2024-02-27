/**
 * Return Type
 */
//* ReturnType 유틸리티를 사용하여 ReturnType을 알고 싶은 함수를 입력
type ReturnTypeSample = ReturnType<()=> number>;

type FunctionSign = (x: number, y: number) => number;

type ReturnType2 = ReturnType<FunctionSign>;