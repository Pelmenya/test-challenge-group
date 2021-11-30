import { call, put, takeLatest } from 'redux-saga/effects';

import {
    getFactFulfilled,
    getFactFailed,
    GET_FACT_REQUESTED,
    GetFactRequestedAction,
} from '../../actions/catFactsState/getFact';

import {
    getRandomFactsFulfilled,
    getRandomFactsFailed,
    GET_RANDOM_FACTS_REQUESTED,
    GetRandomFactsAction,
} from '../../actions/catFactsState/getRandomFacts';

import * as catFactsController from '../../../controllers/catFactsControllers';

import { CatFactsResponse, ErrorResponse } from '../../../api/catFactsApi.types';

export function* getCatFactRequest({ payload }: GetFactRequestedAction) {
    try {
        // @ts-expect-error redux-saga types
        const catFact = yield call(catFactsController.getFact(payload));
        yield put(getFactFulfilled(catFact as CatFactsResponse));
    } catch (err) {
        yield put(getFactFailed(err as ErrorResponse));
    }
}

export function* getRandomFactsRequest({ payload }: GetRandomFactsAction) {
    try {
        // @ts-expect-error redux-saga types
        const catFacts = yield call(catFactsController.getRandomFacts, payload);
        yield put(getRandomFactsFulfilled(catFacts as CatFactsResponse));
    } catch (err) {
        yield put(getRandomFactsFailed(err as ErrorResponse));
    }
}

export function* catFactsStateSaga() {
    yield takeLatest(GET_FACT_REQUESTED, getCatFactRequest);
    yield takeLatest(GET_RANDOM_FACTS_REQUESTED, getRandomFactsRequest);
}
