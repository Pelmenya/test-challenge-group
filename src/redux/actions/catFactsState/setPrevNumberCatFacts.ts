import { Value } from 'utils/types/Value';
import type { Action } from '..';

export type SetPrevNumberCatFactsAction = Action<typeof SET_PREV_NUMBER_CAT_FACTS, Value>;

export const SET_PREV_NUMBER_CAT_FACTS = 'SET_PREV_NUMBER_CAT_FACTS';

export const setPrevNumberCatFacts = (payload: number) => ({
    type: SET_PREV_NUMBER_CAT_FACTS,
    payload,
} as SetPrevNumberCatFactsAction);
