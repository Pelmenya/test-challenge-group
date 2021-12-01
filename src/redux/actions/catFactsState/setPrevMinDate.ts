import { Value } from 'utils/types/Value';
import type { Action } from '..';

export type SetPrevMinDate = Action<typeof SET_PREV_MIN_DATE, Value>;

export const SET_PREV_MIN_DATE = 'SET_PREV_MIN_DATE';

export const setPrevMinDate = (payload: number) => ({
    type: SET_PREV_MIN_DATE,
    payload,
} as SetPrevMinDate);
