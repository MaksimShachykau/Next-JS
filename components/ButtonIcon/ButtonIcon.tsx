import React from 'react';
import cn from 'classnames';

import { IButtonIconProps, icons } from './ButtonIcon.props';

import styles from './ButtonIcon.module.css';


const ButtonIcon = ({ appearance, icon, className, ...props }: IButtonIconProps): JSX.Element => {
    const Icon = icons[icon];
    return <button
        className={
            cn(styles['button'],
            className,
            { [styles.primary]:  appearance === 'primary', [styles.white]:  appearance === 'white'})
        }
        {...props}
        >
            <Icon />
        </button>;
};

export default ButtonIcon;
