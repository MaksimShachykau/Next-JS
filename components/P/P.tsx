import React from 'react';
import cn from 'classnames';

import { IPProps } from './P.props';

import styles from './P.module.css';

const P = ({children, size='m', className, ...props}: IPProps): JSX.Element => {
    return (
        <p {...props} className={ cn(styles.P, className, { [styles.small]: size === 's', [styles.large]: size === 'l' }) }>
            {children}
        </p>
    );
};

export default P;
