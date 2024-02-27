/**
 * Non Nullable type
 */

//* 여러게 타입중에서 "null이 될수 없는" 값들만 추출 => null, undefined는 제외 된다.
type NonNull = NonNullable<string | number | boolean | null | undefined | object>;