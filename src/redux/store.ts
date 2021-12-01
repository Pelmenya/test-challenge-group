import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { createBrowserHistory } from 'history';

import { rootReducer } from './reducers';
import type { State } from './reducers';

import { rootSaga } from './sagas';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initializeStore = (initialState: State) => {
    const history = createBrowserHistory();

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
    );
    sagaMiddleware.run(rootSaga);
    return { store, history };
};
