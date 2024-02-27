/**
 * Template Literal = 문자열 리터럴
 */
type CodeFactory = 'Code Factory';

//* Uppercase - 대문자
type CodeFactoryUpper = Uppercase<CodeFactory>;

//* Lowercase - 소문자
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

//* Capitalize - 스트링에 첫번째 글자만 대문자
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

//* Uncapitalize - 전부 소문자로 변경
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;