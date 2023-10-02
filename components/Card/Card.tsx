import cn from 'classnames';
import { ICardProps } from "./Card.props";

import styles from './Card.module.css';
import { ForwardedRef, forwardRef } from 'react';

const Card = forwardRef(({ background="white", children, className, ...props }: ICardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return <div
        className={cn(className, styles['card'], {
            [styles['blueCard']]: background === 'blue'
        })}
        ref={ref}
        {...props}
    >
        {children}
    </div>;
});

export default Card;
