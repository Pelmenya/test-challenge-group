import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { App } from 'components/App/App';
import { initializeStore } from './redux/store';
import { getInitialState } from './redux/reducers/getInitalState';

const { store, history } = initializeStore(getInitialState());

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
