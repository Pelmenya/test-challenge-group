import { Value } from 'utils/types/Value';
import type { Action } from '..';

export type SetNumberCatFactsAction = Action<typeof SET_NUMBER_CAT_FACTS, Value>;

export const SET_NUMBER_CAT_FACTS = 'SET_NUMBER_CAT_FACTS';

export const setNumberCatFacts = (payload: number) => ({
    type: SET_NUMBER_CAT_FACTS,
    payload,
} as SetNumberCatFactsAction);
