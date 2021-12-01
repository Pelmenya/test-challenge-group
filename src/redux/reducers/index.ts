import type { Immutable } from 'immer';
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import type { CatFactsState } from './catFactsState';
import { catFactsState } from './catFactsState';

export type State = Immutable<{
    catFactsState: CatFactsState;
    router: RouterState;
}>;

export const rootReducer = (history: History) => combineReducers(produce, {
    // @ts-expect-error action type
    router: connectRouter(history),
    // @ts-expect-error action type
    catFactsState,
});
