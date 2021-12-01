import { CatFactResponse } from 'api/catFactsApi.types';
import type { Action } from '..';

export type SetActiveCatFactAction = Action<typeof SET_ACTIVE_CAT_FACT, CatFactResponse>;

export const SET_ACTIVE_CAT_FACT = 'SET_ACTIVE_CAT_FACT';

export const setActiveCatFact = (payload: CatFactResponse) => ({
    type: SET_ACTIVE_CAT_FACT,
    payload,
} as SetActiveCatFactAction);
