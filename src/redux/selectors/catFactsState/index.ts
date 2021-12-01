import type { State } from '../../reducers';

export const getCatFactsState = (state: State) => state.catFactsState;

export const getCatFactsLoaderState = (state: State) => getCatFactsState(state).isLoading;

export const getNumberCatFactsState = (state: State) => getCatFactsState(state).numberCatFacts;

export const getPrevNumberCatFactsState = (state: State) => getCatFactsState(state).prevNumberCatFacts;

export const getCatFacts = (state: State) => getCatFactsState(state).catFacts;

export const getActiveCatFact = (state: State) => getCatFactsState(state).activeCatFact;

export const getMinDate = (state: State) => getCatFactsState(state).minDate;

export const getMaxDate = (state: State) => getCatFactsState(state).maxDate;

export const getSortCatFacts = (state: State) => getCatFactsState(state).sortCatFacts;
