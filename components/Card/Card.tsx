import cn from 'classnames';
import { ICardProps } from "./Card.props";

import styles from './Card.module.css';

const Card = ({ background="white", children, className, ...props }: ICardProps): JSX.Element => {
    return <div
        className={cn(className, styles['card'], {
            [styles['blueCard']]: background === 'blue'
        })}
        {...props}
    >
        {children}
    </div>;
};

export default Card;
