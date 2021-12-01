import { Value } from 'utils/types/Value';
import type { Action } from '..';

export type SetMinDate = Action<typeof SET_MIN_DATE, Value>;

export const SET_MIN_DATE = 'SET_MIN_DATE';

export const setMinDate = (payload: Value) => ({
    type: SET_MIN_DATE,
    payload,
} as SetMinDate);
