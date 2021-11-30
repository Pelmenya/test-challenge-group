// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import imgLogo from 'images/logo.svg';

import './Facts.css';

import 'components/components/Button/Button.css';

import { Counter } from 'components/components/Counter/Counter';
import { Card } from 'components/components/Card/Card';
import { Title } from 'components/components/Title/Title';
import { CatFactResponse } from 'api/catFactsApi.types';
import { Text } from 'components/components/Text/Text';
import { Image } from 'components/components/Image/Image';
import { formatDateFromString } from 'utils/constants/functions/formatDateFromString';
import { Page } from '../components/Page/Page';
import { getCatFacts } from '../../../redux/selectors/catFactsState';

export const Facts = () => {
    const catFacts = useSelector(getCatFacts);

    useEffect(() => {});

    return (
        <Page>
            <div className="page">
                <Title className="title title_big" text="Daily Cats" />
                <Image className="image_logo" imagePath={imgLogo} />
                <main className="catalog page__catalog">
                    {(() => {
                        if (catFacts !== null && Array.isArray(catFacts)) {
                            const cards = catFacts.map((item: CatFactResponse) => (
                                <Card
                                    // eslint-disable-next-line no-underscore-dangle
                                    key={item._id}
                                    // eslint-disable-next-line no-underscore-dangle
                                    id={item._id}
                                    title={item.text}
                                    verified={item.status.verified === true ? 'yes' : 'no'}
                                    date={formatDateFromString(item.updatedAt)}
                                />
                            ));
                            return cards;
                        }
                        return false;
                    })()}
                </main>
            </div>
        </Page>
    );
};
