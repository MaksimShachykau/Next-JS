import React from 'react';
import cn from 'classnames';

import { IButtonProps } from './Button.props';

import styles from './Button.module.css';

const Button = ({ type, children }: IButtonProps): JSX.Element => {
    return <button className={cn(styles['button'], {
        [styles.primary]:  type === 'primary',
        [styles.ghost]:  type === 'ghost'
    })}>{children}</button>;
};

export default Button;
