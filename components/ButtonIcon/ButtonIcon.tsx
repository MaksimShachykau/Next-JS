import React from 'react';
import cn from 'classnames';

import { IButtonIconProps, icons } from './ButtonIcon.props';

import styles from './ButtonIcon.module.css';
import { motion } from 'framer-motion';


const ButtonIcon = ({ appearance, icon, className, ...props }: IButtonIconProps): JSX.Element => {
    const Icon = icons[icon];
    return <motion.button
        whileHover={{ scale: 1.05 }}
        name={icon}
        type='button'
        aria-label={icon}
        className={
            cn(styles['button'],
            className,
            { [styles.primary]:  appearance === 'primary', [styles.white]:  appearance === 'white'})
        }
        {...props}
        >
            <Icon />
        </motion.button>;
};

export default ButtonIcon;
