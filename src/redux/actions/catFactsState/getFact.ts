import type { ErrorResponse, CatFactsResponse } from '../../../api/catFactsApi.types';
import type { Action } from '..';

export type GetFactRequestedAction = Action<typeof GET_FACT_REQUESTED, number>;
export type GetFactFulfilledAction = Action<typeof GET_FACT_FULFILLED, CatFactsResponse>;
export type GetFactFailedAction = Action<typeof GET_FACT_FAILED, ErrorResponse>;

export type GetFactAction =
    | GetFactRequestedAction
    | GetFactFulfilledAction
    | GetFactFailedAction;

export const GET_FACT_REQUESTED = 'GET_FACT_REQUESTED';
export const GET_FACT_FULFILLED = 'GET_FACT_FULFILLED';
export const GET_FACT_FAILED = 'GET_FACT_FAILED';

export const getFactRequested = (payload: number) => ({
    type: GET_FACT_REQUESTED,
    payload,
} as GetFactRequestedAction);

export const getFactFulfilled = (payload: CatFactsResponse) => ({
    type: GET_FACT_FULFILLED,
    payload,
} as GetFactFulfilledAction);

export const getFactFailed = (payload: ErrorResponse) => ({
    type: GET_FACT_FAILED,
    payload,
} as GetFactFailedAction);
