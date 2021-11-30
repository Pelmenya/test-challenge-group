import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { ErrorBoundary } from 'utils/classes/ErrorBoundary/ErrorBoundary';

import '../../styles/fonts.css';
import '../../../static/index.css';

import './App.css';
import { MenuComponent } from 'components/components/Menu/Menu';
import { ROUTES } from 'utils/constants/routes';

import { getNumberCatFactsState } from '../../redux/selectors/catFactsState';
import { getRandomFactsRequested } from '../../redux/actions/catFactsState/getRandomFacts';

export const App = () => {
    const dispatch = useDispatch();
    const numberCatFacts = useSelector(getNumberCatFactsState);

    useEffect(() => {
        dispatch(getRandomFactsRequested(numberCatFacts));
    });

    return (
        <div className="app">
            <Router>
                <MenuComponent />
                <Switch>
                    {ROUTES.map((item) => (
                        <Route path={item.link} key={`${item.name}-route`}>
                            <ErrorBoundary key={`${item.name}-error`}>
                                <item.component key={`${item.name}-component`} />
                            </ErrorBoundary>
                        </Route>
                    ))}
                </Switch>
            </Router>
        </div>
    );
};
