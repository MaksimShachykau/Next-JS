import React, { KeyboardEvent, useEffect, useState, forwardRef, ForwardedRef } from 'react';
import cn from 'classnames';

import { IRatingProps } from './Rating.props';
import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = forwardRef(({ rating, isEditable, setRating, ...props } : IRatingProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ ratingArray, setRatingArray ] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating :number): void => {
        const updatedArray = ratingArray.map((e: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    className={cn(
                        styles.star,
                        {
                            [styles.fill]: i < currentRating,
                            [styles.pointed]: isEditable,
                        }
                    )}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }

        constructRating(i);
    };

    const onClick = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        }

        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if(e.code !== 'Space' || !setRating) {
            return;
        }

        setRating(i);
    };

    return(
        <div ref={ref} {...props}>
            {ratingArray.map((e: JSX.Element, i: number) => <span key={i}>{e}</span>)}
        </div>
    );
});

export default Rating;
