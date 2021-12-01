import React from 'react';
import cn from 'classnames';
import { getRandomCatImage } from 'utils/constants/functions/getRandomCatImage';

import './Card.css';

export interface CardProps {
    id: string;
    title: string;
    date: string;
    verified: string;
    className?: boolean;
    setCardToStore?: () => void;
}

export const Card = (props: CardProps) => {
    const image = getRandomCatImage();
    return (
        <article
            onClick={props.setCardToStore}
            className={cn({
                card: props.className,
                catalog__card: props.className,
                card_big: props.className,
            })}
            aria-hidden="true"
        >
            <img src={image.src} alt={image.name} className="card__image" />
            <div className="card__info card__info_theme_dark">
                <h3
                    className={cn('card__title', {
                        card__title_trim: props.className === undefined,
                    })}
                >
                    {`Fact: ${props.title}`}
                </h3>
                <p className="card__text">{`Verified: ${props.verified}`}</p>
                <p className="card__text">{`Date: ${props.date}`}</p>
            </div>
        </article>
    );
};
