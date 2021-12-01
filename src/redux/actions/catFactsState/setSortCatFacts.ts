import { CatFactsResponse } from 'api/catFactsApi.types';
import type { Action } from '..';

export type SetSortCatFactsPayload = CatFactsResponse | null;

export type SetSortCatFacts = Action<typeof SET_SORT_CAT_FACTS, SetSortCatFactsPayload>;

export const SET_SORT_CAT_FACTS = 'SET_SORT_CAT_FACTS';

export const setSortCatFacts = (payload: SetSortCatFactsPayload) => ({
    type: SET_SORT_CAT_FACTS,
    payload,
} as SetSortCatFacts);
