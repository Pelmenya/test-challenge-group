import { all, fork } from 'redux-saga/effects';
import { catFactsStateSaga } from './catFactsState';

export function* rootSaga() {
    yield all([fork(catFactsStateSaga)]);
}
