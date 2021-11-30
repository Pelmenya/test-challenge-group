import type { Immutable } from 'immer';
import { combineReducers } from 'redux-immer';
import produce from 'immer';

import type { CatFactsState } from './catFactsState';
import { catFactsState } from './catFactsState';

export type State = Immutable<{
    catFactsState: CatFactsState;
}>;

export const rootReducer = combineReducers(produce, {
    // @ts-expect-error action type
    catFactsState,
});
