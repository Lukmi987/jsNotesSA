Generally in programming, the saga pattern is way a to handle long running transactions with side effects
or potential failures.
We can revert the transaction if it fails.

Redux saga - middleware for redux-store.

Sagas LISTEN independently to actions and act upon that (so called side
effect) and then can call reducers with put.

Saga is a layer between action and reducer in the redux cycle:
a container calls an action -> a saga that listens to that action process its side effects (like catching data from API) -> saga then calls reducer ->
-> reducers saves data to store -> a container that listens to the specific prop from store that was changed will rerender

To make asynchronous flow easier, Redux-Saga uses ES6 Generators.
Generators are functions that can be stopped and continued, instead of
executing all expressions in a single step.


Výhoda redux-saga oproti thunk:
- mnohem čistší a čitelnější kod (jednoduché reducery)
- možnost použít např. takeLatest() a další vychytávky

Vzor:

import { put, takeLatest } from 'redux-saga/effects';

function* saveTodo(action) {
  try {
    yield axios.post(TODOS_API, action.text);
    yield put({ type: ALERT_SUCCESS, show: true });
  } catch (e) {
    yield put({ type: ALERT_ERROR, show: true });
  }
}

function* todosSaga() {
  yield takeLatest(CREATE_TODO, saveTodo);
}

export default todosSaga;


======================================

Možnosti:

takeEvery()
- spustí se pokaždé na danou akci

takeLatest()
- podobné, ale dovoluje spouštět jen jednu sagu v jeden čas, tj. pokud se
akce vypálí víckrát za sebou, saga cancellne rozdělané sideffecty a spustí se jen
pro tu poslední akci

take()
- vykoná se jen jednou

put()
- dispatches action data to redux store
- místo "dispatch"
- yield put({ type: "USER_FETCH_SUCCEEDED", data: data })

all()
- spouští yieldy paralelně a na všechny počká

race()
- čeká se jen na první yield
