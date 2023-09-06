import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { IRatingProps } from './Rating.props';
import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = ({ rating, ...props } : IRatingProps): JSX.Element => {
    const [ ratingArray, setRatingArray ] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        someFunk(rating);
    }, [rating]);

    const someFunk = (rating :number): void => {
        const updatedArray = ratingArray.map((e: JSX.Element, i: number) => {
            return (
                <StarIcon key={i} className={cn(
                    styles.star,
                    {
                        [styles.fill]: i < rating,
                    }
                )}/>
            );
        });
        setRatingArray(updatedArray);
    };

    return(
        <div {...props}>
            {ratingArray}
        </div>
    );
};

export default Rating;
