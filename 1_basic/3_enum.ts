/**
 * Enum
 */

/**
 * API 요청을 하는 4가지 상태
 *
 * DONE  - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */

function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // 작업을 한다.

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}
console.log(runWork() === "DONNE");
/**
 * 위의 코드와 같이 애러 없이 작업이 완료 되면 예상하는 값은 'DONE' -> 'true' 이지만,
 * 스트링으로 상태나 한정된 값들을 표현 하고 비교하는 과정에서
 * 아래와 같이 인간의 실수로 오타가 나오게 되면 예상하지 못한 결과가 나올 수 있다.
 */

// 위와 같은 오타 실수를 줄이기 위해 JS에서 많이 사용하던 상태를 상수에 담는 방법
const doneState = "DONE";
const loadingState = "LOADING";
const errorState = "ERROR";
const initialState = "INITIAL";

function runWork2() {
  let state = initialState;

  try {
    state = loadingState;
    // 작업을 한다.

    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}
console.log(runWork2() === doneState);
/**
 * 위의 코드에서 한단계를 더 나아가면 enum이 된다.(?) 
 * enum 사용시 첫 식별자는 대문자로 많이(?) 사용한다.
 * enum의 선언시 각 식별자(?),이넘(?)에 명시적으로 값을 지정 해주지 않으면 맨 처음부터 index순서로 값이 부여된다.

 * 값을 지정해주지 않을시 암시적 enum의 값
  enum State {
    DONE = 0,
    LOADING = 1,
    INITIAL = 2,
    ERROR = 3
}
 */

enum State {
  DONE = "DONE",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}
// console.log(runWork3() === State.DONE);
console.log(runWork3())