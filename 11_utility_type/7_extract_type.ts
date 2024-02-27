
/**
 * Extract(:추출하다) Type
//* Excloude 반대 개념 
 */

//* string, boolean, number 타입중 string만 "추출" 한다.
type stringOnly = Extract<string | boolean | number, string>;

type functionOnly = Extract<string | (() => void), Function>;