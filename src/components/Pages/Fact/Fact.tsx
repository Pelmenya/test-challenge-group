import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDateFromString } from 'utils/constants/functions/formatDateFromString';

import imgLogo from 'images/logo.svg';
import { Image } from 'components/components/Image/Image';
import { Title } from 'components/components/Title/Title';
import { Card } from 'components/components/Card/Card';
import { Page } from '../components/Page/Page';

import { getActiveCatFact } from '../../../redux/selectors/catFactsState';

import '../Facts/Facts.css';

export const Fact = () => {
    const activeCatFact = useSelector(getActiveCatFact);

    return (
        <Page>
            <>
                <div className="header">
                    <Link to="/" className="image image_logo image_logo_link">
                        <Image className="image image_logo" imagePath={imgLogo} />
                        <Title className="title title_big" text="Daily Cats" />
                    </Link>
                </div>
                <main className="catalog">
                    {(() => {
                        if (activeCatFact !== null) {
                            return (
                                <Card
                                    id={activeCatFact._id}
                                    title={activeCatFact.text}
                                    verified={activeCatFact.status.verified === true ? 'yes' : 'no'}
                                    date={formatDateFromString(activeCatFact.updatedAt)}
                                    className
                                />
                            );
                        }
                        return false;
                    })()}
                </main>
            </>
        </Page>
    );
};
