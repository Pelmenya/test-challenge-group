import { Value } from 'utils/types/Value';
import type { Action } from '..';

export type SetMaxDate = Action<typeof SET_MAX_DATE, Value>;

export const SET_MAX_DATE = 'SET_MAX_DATE';

export const setMaxDate = (payload: number) => ({
    type: SET_MAX_DATE,
    payload,
} as SetMaxDate);
