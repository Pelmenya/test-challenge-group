import { Value } from 'utils/types/Value';
import type { Action } from '..';

export type SetPrevMaxDate = Action<typeof SET_PREV_MAX_DATE, Value>;

export const SET_PREV_MAX_DATE = 'SET_PREV_MAX_DATE';

export const setPrevMaxDate = (payload: number) => ({
    type: SET_PREV_MAX_DATE,
    payload,
} as SetPrevMaxDate);
