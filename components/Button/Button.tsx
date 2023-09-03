import React from 'react';
import cn from 'classnames';

import { IButtonProps } from './Button.props';

import styles from './Button.module.css';

const Button = ({ appearance, children, className, ...props }: IButtonProps): JSX.Element => {
    return <button
        className={
            cn(styles['button'],
            className,
            { [styles.primary]:  appearance === 'primary', [styles.ghost]:  appearance === 'ghost'})
        }
        {...props}
        >
            {children}
        </button>;
};

export default Button;
