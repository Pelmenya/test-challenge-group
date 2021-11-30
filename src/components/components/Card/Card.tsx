import React from 'react';
import { getRandomCatImage } from 'utils/constants/functions/getRandomCatImage';

import './Card.css';

export interface CardProps {
    id: string;
    title: string;
    date: string;
    verified: string;
}

export const Card = (props: CardProps) => {
    const image = getRandomCatImage();
    return (
        <article className="card catalog__card">
            <img src={image.src} alt={image.name} className="card__image" />
            <div className="card__info card__info_theme_dark">
                <h3 className="card__title">{`Fact: ${props.title}`}</h3>
                <p className="card__text">{`Verified: ${props.verified}`}</p>
                <p className="card__text">{`Date: ${props.date}`}</p>
            </div>
        </article>
    );
};
