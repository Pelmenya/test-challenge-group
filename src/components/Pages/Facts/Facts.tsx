import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import imgLogo from 'images/logo.svg';

import './Facts.css';

import 'components/components/Button/Button.css';
import { Card } from 'components/components/Card/Card';
import { Title } from 'components/components/Title/Title';
import { CatFactResponse } from 'api/catFactsApi.types';
import { Image } from 'components/components/Image/Image';
import { formatDateFromString } from 'utils/constants/functions/formatDateFromString';
import { FormFactsSelection } from 'components/components/Forms/FormFactsSelection/FormFactsSelection';
import { Page } from '../components/Page/Page';
import { getCatFacts } from '../../../redux/selectors/catFactsState';
import { setActiveCatFact } from '../../../redux/actions/catFactsState/setActiveCatFact';

export const Facts = () => {
    const dispatch = useDispatch();
    const catFacts = useSelector(getCatFacts);

    useEffect(() => {});

    return (
        <Page>
            <>
                <div className="header">
                    <Image className="image_logo" imagePath={imgLogo} />
                    <Title className="title title_big" text="Daily Cats" />
                </div>
                <FormFactsSelection />
                <main className="catalog page__catalog">
                    {(() => {
                        if (catFacts !== null && Array.isArray(catFacts)) {
                            const cards = catFacts.map((item: CatFactResponse) => (
                                <Link
                                    to={`/${item._id}`}
                                    key={`${item._id}-link`}
                                    className="card catalog__card"
                                >
                                    <Card
                                        setCardToStore={() => {
                                            dispatch(setActiveCatFact(item));
                                        }}
                                        key={item._id}
                                        id={item._id}
                                        title={item.text}
                                        verified={item.status.verified === true ? 'yes' : 'no'}
                                        date={formatDateFromString(item.updatedAt)}
                                    />
                                </Link>
                            ));
                            return cards;
                        }
                        return false;
                    })()}
                </main>
            </>
        </Page>
    );
};
