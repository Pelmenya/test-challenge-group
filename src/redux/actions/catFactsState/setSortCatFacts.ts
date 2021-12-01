import { CatFactsResponse } from 'api/catFactsApi.types';
import type { Action } from '..';

export type SetSortCatFacts = Action<typeof SET_SORT_CAT_FACTS, CatFactsResponse>;

export const SET_SORT_CAT_FACTS = 'SET_SORT_CAT_FACTS';

export const setSortCatFacts = (payload: CatFactsResponse) => ({
    type: SET_SORT_CAT_FACTS,
    payload,
} as SetSortCatFacts);
