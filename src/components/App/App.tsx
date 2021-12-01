import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import { ErrorBoundary } from 'utils/classes/ErrorBoundary/ErrorBoundary';

import '../../styles/fonts.css';
import '../../../static/index.css';

import './App.css';

import { CatFactResponse } from 'api/catFactsApi.types';

import { MenuComponent } from 'components/components/Menu/Menu';
import { Fact } from 'components/Pages/Fact/Fact';

import { ROUTES } from 'utils/constants/routes';

import { getCatFacts, getNumberCatFactsState } from '../../redux/selectors/catFactsState';
import { getRandomFactsRequested } from '../../redux/actions/catFactsState/getRandomFacts';

export const App = () => {
    const dispatch = useDispatch();
    const numberCatFacts = useSelector(getNumberCatFactsState);
    const catFacts = useSelector(getCatFacts);

    useEffect(() => {
        if (catFacts === null) {
            dispatch(getRandomFactsRequested(numberCatFacts));
        }
    });

    return (
        <div className="app">
            <MenuComponent />
            {(() => {
                if (catFacts !== null && Array.isArray(catFacts)) {
                    return catFacts.map((item: CatFactResponse) => (
                        <Link to={`/${item._id}`} key={`${item._id}-link`} />
                    ));
                }
                return false;
            })()}
            <Switch>
                {(() => {
                    if (catFacts !== null && Array.isArray(catFacts)) {
                        return catFacts.map((item: CatFactResponse) => (
                            <Route path={`/${item._id}`} key={`${item._id}-route`} exact>
                                <ErrorBoundary key={`$${item._id}-error`}>
                                    <Fact key={`${item._id}-component`} />
                                </ErrorBoundary>
                            </Route>
                        ));
                    }
                    return false;
                })()}
                {ROUTES.map((item) => (
                    <Route path={item.link} key={`${item.name}-route`} exact>
                        <ErrorBoundary key={`${item.name}-error`}>
                            <item.component key={`${item.name}-component`} />
                        </ErrorBoundary>
                    </Route>
                ))}
            </Switch>
        </div>
    );
};
