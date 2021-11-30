import type { ErrorResponse, CatFactsResponse } from '../../../api/catFactsApi.types';
import type { Action } from '..';

export type GetRandomFactsRequestedAction = Action<typeof GET_RANDOM_FACTS_REQUESTED, number>;
export type GetRandomFactsFulfilledAction = Action<typeof GET_RANDOM_FACTS_FULFILLED, CatFactsResponse>;
export type GetRandomFactsFailedAction = Action<typeof GET_RANDOM_FACTS_FAILED, ErrorResponse>;

export type GetRandomFactsAction =
    | GetRandomFactsRequestedAction
    | GetRandomFactsFulfilledAction
    | GetRandomFactsFailedAction;

export const GET_RANDOM_FACTS_REQUESTED = 'GET_RANDOM_FACTS_REQUESTED';
export const GET_RANDOM_FACTS_FULFILLED = 'GET_RANDOM_FACTS_FULFILLED';
export const GET_RANDOM_FACTS_FAILED = 'GET_RANDOM_FACTS_FAILED';

export const getRandomFactsRequested = (payload: number) => ({
    type: GET_RANDOM_FACTS_REQUESTED,
    payload,
} as GetRandomFactsRequestedAction);

export const getRandomFactsFulfilled = (payload: CatFactsResponse) => ({
    type: GET_RANDOM_FACTS_FULFILLED,
    payload,
} as GetRandomFactsFulfilledAction);

export const getRandomFactsFailed = (payload: ErrorResponse) => ({
    type: GET_RANDOM_FACTS_FAILED,
    payload,
} as GetRandomFactsFailedAction);
