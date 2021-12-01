/* eslint-disable no-param-reassign */

import { Value } from 'utils/types/Value';
import { CatFactResponse, CatFactsResponse } from 'api/catFactsApi.types';
import { initialNumberFacts } from 'utils/constants/initialNumberFacts';
import {
    SetActiveCatFactAction,
    SET_ACTIVE_CAT_FACT,
} from '../../actions/catFactsState/setActiveCatFact';
import { CleanErrorAction, CLEAN_ERROR } from '../../actions/catFactsState/cleanError';
import {
    GetFactAction,
    GET_FACT_REQUESTED,
    GET_FACT_FULFILLED,
    GET_FACT_FAILED,
} from '../../actions/catFactsState/getFact';
import {
    GetRandomFactsAction,
    GET_RANDOM_FACTS_REQUESTED,
    GET_RANDOM_FACTS_FULFILLED,
    GET_RANDOM_FACTS_FAILED,
} from '../../actions/catFactsState/getRandomFacts';
import {
    SetNumberCatFactsAction,
    SET_NUMBER_CAT_FACTS,
} from '../../actions/catFactsState/setNumberCatFacts';
import {
    SetPrevNumberCatFactsAction,
    SET_PREV_NUMBER_CAT_FACTS,
} from '../../actions/catFactsState/setPrevNumberCatFacts';

export type CatFactsStateAction =
    | GetFactAction
    | GetRandomFactsAction
    | CleanErrorAction
    | SetActiveCatFactAction
    | SetNumberCatFactsAction
    | SetPrevNumberCatFactsAction;

export type CatFactsState = {
    isLoading: boolean;
    numberCatFacts: Value;
    prevNumberCatFacts: Value;
    catFacts: CatFactsResponse | null;
    activeCatFact: CatFactResponse | null;
    error: string | null;
};

export const initialState: CatFactsState = {
    isLoading: false,
    numberCatFacts: initialNumberFacts,
    prevNumberCatFacts: initialNumberFacts,
    catFacts: null,
    activeCatFact: null,
    error: null,
};

export const catFactsState = (state: CatFactsState = initialState, action: CatFactsStateAction) => {
    switch (action.type) {
        case GET_FACT_REQUESTED:
        case GET_RANDOM_FACTS_REQUESTED:
            state.isLoading = true;
            break;

        case GET_FACT_FULFILLED:
        case GET_RANDOM_FACTS_FULFILLED:
            state.isLoading = false;
            state.catFacts = action.payload;
            break;

        case GET_FACT_FAILED:
        case GET_RANDOM_FACTS_FAILED:
            state.error = action.payload.message;
            break;

        case SET_ACTIVE_CAT_FACT:
            state.activeCatFact = action.payload;
            break;

        case SET_NUMBER_CAT_FACTS:
            state.numberCatFacts = action.payload;
            break;

        case SET_PREV_NUMBER_CAT_FACTS:
            state.prevNumberCatFacts = action.payload;
            break;

        case CLEAN_ERROR:
            state.error = null;
            break;
        // no default
    }
    return state;
};
/* eslint-enable no-param-reassign */
